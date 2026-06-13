"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // CMS states
  const [activeTab, setActiveTab] = useState("collaborations"); // collaborations, stories, events, tv_items
  const [items, setItems] = useState([]);
  const [itemsLoading, setItemsLoading] = useState(false);

  // Form Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // null if adding new

  // Form input states (dynamic object matching activeTab fields)
  const [formData, setFormData] = useState({});

  // Check auth session on mount
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch CMS items when activeTab changes or session becomes available
  useEffect(() => {
    if (session) {
      fetchCMSItems();
    }
  }, [activeTab, session]);

  const fetchCMSItems = async () => {
    setItemsLoading(true);
    try {
      let query = supabase.from(activeTab).select("*");
      
      // Add custom sorting depending on table
      if (activeTab === "events") {
        query = query.order("event_date", { ascending: false });
      } else {
        query = query.order("created_at", { ascending: false });
      }

      const { data, error } = await query;
      if (error) throw error;
      setItems(data || []);
    } catch (err) {
      console.error("Error fetching items:", err);
      alert(`Failed to load ${activeTab} items: ` + err.message);
    } finally {
      setItemsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginError("Please enter both email and password.");
      return;
    }
    setLoginLoading(true);
    setLoginError("");
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (err) {
      setLoginError(err.message || "Failed to log in.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  // Setup form fields when opening Add / Edit Modal
  const openFormModal = (item = null) => {
    setEditingItem(item);
    if (item) {
      // Map database object fields to state
      if (activeTab === "events") {
        setFormData({
          slug: item.slug || "",
          title: item.title || "",
          label: item.label || "",
          short_description: item.short_description || "",
          long_description: item.long_description ? item.long_description.join("\n\n") : "",
          event_date: item.event_date ? new Date(item.event_date).toISOString().substring(0, 16) : "",
          date_string: item.date_string || "",
          banner_image_url: item.banner_image_url || "",
          video_url: item.video_url || "",
          gallery_urls: item.gallery_urls ? item.gallery_urls.join(", ") : "",
          speakers: item.speakers ? JSON.stringify(item.speakers, null, 2) : "[]",
          registration_open: item.registration_open || false,
          registration_limit: item.registration_limit || "",
        });
      } else {
        setFormData({ ...item });
      }
    } else {
      // Set empty structures
      if (activeTab === "events") {
        setFormData({
          slug: "",
          title: "",
          label: "",
          short_description: "",
          long_description: "",
          event_date: "",
          date_string: "",
          banner_image_url: "",
          video_url: "",
          gallery_urls: "",
          speakers: "[]",
          registration_open: false,
          registration_limit: "",
        });
      } else if (activeTab === "collaborations") {
        setFormData({
          label: "Partner",
          title: "",
          image: "",
          description: "",
          href: "#",
          read_time: "Partner",
        });
      } else if (activeTab === "stories") {
        setFormData({
          label: "Story",
          title: "",
          description: "",
          href: "/stories",
          image: "",
          read_time: "4 min read",
        });
      } else if (activeTab === "tv_items") {
        setFormData({
          label: "Coming Soon",
          title: "",
          href: "/tv",
          image: "",
          video: "",
          description: "",
          read_time: "Coming Soon",
        });
      }
    }
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setItemsLoading(true);

    try {
      // Process special formatted fields before insertion
      let payload = { ...formData };

      if (activeTab === "events") {
        payload.long_description = formData.long_description
          ? formData.long_description.split("\n\n").map((p) => p.trim()).filter(Boolean)
          : [];
        payload.gallery_urls = formData.gallery_urls
          ? formData.gallery_urls.split(",").map((url) => url.trim()).filter(Boolean)
          : [];
        payload.registration_limit = formData.registration_limit
          ? parseInt(formData.registration_limit, 10)
          : null;
        payload.event_date = formData.event_date ? new Date(formData.event_date).toISOString() : null;

        try {
          payload.speakers = JSON.parse(formData.speakers || "[]");
        } catch (err) {
          throw new Error("Speakers must be a valid JSON array.");
        }
      }

      if (editingItem) {
        // Update item
        const { error } = await supabase
          .from(activeTab)
          .update(payload)
          .eq("id", editingItem.id);
        if (error) throw error;
      } else {
        // Insert new item
        const { error } = await supabase.from(activeTab).insert(payload);
        if (error) throw error;
      }

      setIsModalOpen(false);
      fetchCMSItems();
    } catch (err) {
      console.error("Error saving item:", err);
      alert("Error saving item: " + err.message);
    } finally {
      setItemsLoading(false);
    }
  };

  const handleDeleteItem = async (id) => {
    if (!confirm(`Are you sure you want to delete this item? This action is permanent.`)) return;

    setItemsLoading(true);
    try {
      const { error } = await supabase.from(activeTab).delete().eq("id", id);
      if (error) throw error;
      fetchCMSItems();
    } catch (err) {
      console.error("Error deleting item:", err);
      alert("Error deleting item: " + err.message);
    } finally {
      setItemsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--accent)] border-t-transparent" />
      </main>
    );
  }

  // Render Login screen if not authenticated
  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-md"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)] font-semibold">
              Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Admin Portal</h1>
            <p className="mt-2 text-sm text-white/50">
              Sign in with your Supabase credentials to manage website CMS.
            </p>
          </div>

          {loginError && (
            <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-xs text-red-400">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[var(--accent)] focus:bg-white/[0.05]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition focus:border-[var(--accent)] focus:bg-white/[0.05]"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="mt-6 flex w-full items-center justify-center rounded-2xl bg-white py-3.5 text-sm font-semibold text-black hover:bg-white/90 disabled:bg-white/50"
            >
              {loginLoading ? "Authenticating..." : "Sign In"}
            </button>
          </form>
        </motion.div>
      </main>
    );
  }

  // Render CMS Dashboard if authenticated
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        
        {/* Admin Header */}
        <header className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">CMS Management</h1>
            <p className="mt-1 text-sm text-white/45">
              Logged in as <span className="text-[var(--accent)] font-medium">{session.user.email}</span>
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="self-start rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            Sign Out
          </button>
        </header>
        {/* Tab Selection */}
        <nav className="mt-8 flex flex-wrap gap-2">
          {["collaborations", "stories", "events", "tv_items", "showcase_submissions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-5 py-3 text-sm font-semibold uppercase tracking-wider transition ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "border border-white/5 bg-white/[0.02] text-white/60 hover:border-white/10 hover:text-white"
              }`}
            >
              {tab.replace("_", " ")}
            </button>
          ))}
        </nav>

        {/* Main List Workspace */}
        <section className="mt-8 rounded-3xl border border-white/5 bg-white/[0.01] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold capitalize">
              {activeTab === "showcase_submissions" ? "Showcase Submissions" : activeTab.replace("_", " ")} List
            </h2>
            {activeTab !== "showcase_submissions" && (
              <button
                onClick={() => openFormModal(null)}
                className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[var(--accent)]/90"
              >
                + Add New
              </button>
            )}
          </div>

          {itemsLoading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
            </div>
          ) : items.length === 0 ? (
            <div className="flex h-64 flex-col items-center justify-center text-center text-white/35">
              <p className="text-sm">No items found in this category.</p>
              {activeTab !== "showcase_submissions" && (
                <button
                  onClick={() => openFormModal(null)}
                  className="mt-4 text-xs font-semibold text-[var(--accent)] underline"
                >
                  Create your first entry
                </button>
              )}
            </div>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/45">
                    <th className="py-3 px-4">
                      {activeTab === "showcase_submissions" ? "Startup / Founder" : "Title / Label"}
                    </th>
                    <th className="py-3 px-4">Description</th>
                    <th className="py-3 px-4">
                      {activeTab === "showcase_submissions" ? "Website / Contact" : "Media Link"}
                    </th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {items.map((item) => (
                    <tr key={item.id} className="group hover:bg-white/[0.01]">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-white">
                          {activeTab === "showcase_submissions" ? item.startup_name : item.title}
                        </div>
                        <div className="mt-0.5 text-xs text-white/35 font-medium uppercase tracking-wider">
                          {activeTab === "showcase_submissions" 
                            ? `${item.founder_name} • ${item.email} • ${item.phone || "No Phone"} • [Consent: ${item.public_consent ? 'YES' : 'NO'}]` 
                            : (item.label || item.slug)}
                        </div>
                      </td>
                      <td className="py-4 px-4 max-w-xs truncate text-sm text-white/60">
                        {item.description || item.short_description || "N/A"}
                      </td>
                      <td className="py-4 px-4 max-w-xs truncate text-xs text-white/45 font-mono">
                        {activeTab === "showcase_submissions"
                          ? (item.website_url || "N/A")
                          : (item.image || item.banner_image_url || "N/A")}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex justify-end gap-2">
                          {activeTab !== "showcase_submissions" && (
                            <button
                              onClick={() => openFormModal(item)}
                              className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs font-semibold transition hover:border-white/20 hover:bg-white/[0.05]"
                            >
                              Edit
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="rounded-lg border border-red-500/10 bg-red-500/[0.02] px-3 py-1.5 text-xs font-semibold text-red-400 transition hover:border-red-500/20 hover:bg-red-500/[0.05]"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Modal Form Overlay (Add / Edit) */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                className="relative my-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0c0c0c] p-6 shadow-2xl md:p-8"
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <h3 className="text-xl font-bold capitalize">
                    {editingItem ? "Edit" : "Add New"} {activeTab.replace("_", " ")}
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-white/50 hover:text-white text-sm"
                  >
                    ✕
                  </button>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  
                  {activeTab === "events" ? (
                    <>
                      {/* Title & Slug */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Event Title *</label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title || ""}
                            onChange={handleInputChange}
                            required
                            placeholder="Grand Circle of Changemakers"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Slug (URL Path) *</label>
                          <input
                            type="text"
                            name="slug"
                            value={formData.slug || ""}
                            onChange={handleInputChange}
                            required
                            placeholder="e.g. gcc"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                      </div>

                      {/* Label & Date String */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Category Label</label>
                          <input
                            type="text"
                            name="label"
                            value={formData.label || ""}
                            onChange={handleInputChange}
                            placeholder="e.g. Innovation Meet, Workshop"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Human Date String</label>
                          <input
                            type="text"
                            name="date_string"
                            value={formData.date_string || ""}
                            onChange={handleInputChange}
                            placeholder="e.g. August 2026"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                      </div>

                      {/* Exact Date & Limit */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Sortable Event Date & Time</label>
                          <input
                            type="datetime-local"
                            name="event_date"
                            value={formData.event_date || ""}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-white/10 bg-[#0c0c0c] px-4 py-3 text-sm outline-none focus:border-[var(--accent)] text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Registration Limit</label>
                          <input
                            type="number"
                            name="registration_limit"
                            value={formData.registration_limit || ""}
                            onChange={handleInputChange}
                            placeholder="e.g. 100 (leave blank for unlimited)"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                      </div>

                      {/* Media URL Paths */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Banner Image URL</label>
                          <input
                            type="text"
                            name="banner_image_url"
                            value={formData.banner_image_url || ""}
                            onChange={handleInputChange}
                            placeholder="e.g. /images/iedc_events/workshop.jpg"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Featured Video URL</label>
                          <input
                            type="text"
                            name="video_url"
                            value={formData.video_url || ""}
                            onChange={handleInputChange}
                            placeholder="e.g. /videos/iedc_events/gcc/gcc-hero.mp4"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                      </div>

                      {/* Short Description */}
                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Short Summary *</label>
                        <input
                          type="text"
                          name="short_description"
                          value={formData.short_description || ""}
                          onChange={handleInputChange}
                          required
                          placeholder="A quick 1-sentence card description..."
                          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                        />
                      </div>

                      {/* Long Description */}
                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Long Description (Separate paragraphs with DOUBLE Line Break) *</label>
                        <textarea
                          name="long_description"
                          value={formData.long_description || ""}
                          onChange={handleInputChange}
                          rows="4"
                          required
                          placeholder="Write paragraph one here.&#10;&#10;Write paragraph two here..."
                          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none resize-none focus:border-[var(--accent)]"
                        />
                      </div>

                      {/* Gallery URLs */}
                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Gallery Image URLs (Comma-separated)</label>
                        <input
                          type="text"
                          name="gallery_urls"
                          value={formData.gallery_urls || ""}
                          onChange={handleInputChange}
                          placeholder="e.g. /images/event-1.jpg, /images/event-2.jpg"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                        />
                      </div>

                      {/* Speakers JSON */}
                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Speakers JSON Array</label>
                        <textarea
                          name="speakers"
                          value={formData.speakers || "[]"}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-xs outline-none font-mono focus:border-[var(--accent)]"
                        />
                      </div>

                      {/* Registration Open */}
                      <div className="flex items-center gap-3 py-1">
                        <input
                          type="checkbox"
                          name="registration_open"
                          id="registration_open"
                          checked={formData.registration_open || false}
                          onChange={handleInputChange}
                          className="h-5 w-5 rounded border-white/10 bg-white/[0.02] accent-[var(--accent)]"
                        />
                        <label htmlFor="registration_open" className="text-sm font-semibold select-none text-white/80 cursor-pointer">
                          Enable registrations for this event
                        </label>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Standard Forms for Collaborations, Stories, TV */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Title *</label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title || ""}
                            onChange={handleInputChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Label / Category</label>
                          <input
                            type="text"
                            name="label"
                            value={formData.label || ""}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Image Link / Local Path</label>
                          <input
                            type="text"
                            name="image"
                            value={formData.image || ""}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Link (HREF)</label>
                          <input
                            type="text"
                            name="href"
                            value={formData.href || ""}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                      </div>

                      {activeTab === "tv_items" && (
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Preview Video Link</label>
                          <input
                            type="text"
                            name="video"
                            value={formData.video || ""}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                      )}

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Read Time / Meta Info</label>
                          <input
                            type="text"
                            name="read_time"
                            value={formData.read_time || ""}
                            onChange={handleInputChange}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Description *</label>
                        <textarea
                          name="description"
                          value={formData.description || ""}
                          onChange={handleInputChange}
                          required
                          rows="3"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm outline-none resize-none focus:border-[var(--accent)]"
                        />
                      </div>
                    </>
                  )}

                  {/* Actions */}
                  <div className="flex justify-end gap-2 border-t border-white/5 pt-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-semibold transition hover:bg-white/[0.05]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      Save Changes
                    </button>
                  </div>

                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}
