"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/utils/supabase/client";

export default function StartupShowcaseForm({ onClose }) {
  const [formData, setFormData] = useState({
    startupName: "",
    founderName: "",
    email: "",
    phone: "",
    websiteUrl: "",
    description: "",
    publicConsent: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.startupName.trim()) {
      newErrors.startupName = "Startup or business name is required";
    }
    
    if (!formData.founderName.trim()) {
      newErrors.founderName = "Founder name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (10+ digits)";
    }

    if (!formData.description.trim()) {
      newErrors.description = "A short description is required";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Description should be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const { error } = await supabase.from("showcase_submissions").insert({
        startup_name: formData.startupName,
        founder_name: formData.founderName,
        email: formData.email,
        phone: formData.phone,
        website_url: formData.websiteUrl || null,
        description: formData.description,
        public_consent: formData.publicConsent,
      });

      if (error) {
        if (error.code === "23505") {
          throw new Error("This email is already registered for a showcase request.");
        }
        throw error;
      }

      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError(err.message || "Failed to submit showcase request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.96, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 15 }}
        transition={{ type: "spring", duration: 0.45 }}
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl md:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          ✕
        </button>

        {!submitSuccess ? (
          <>
            <div className="mb-6 pr-8">
              <p
                className="text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--muted)" }}
              >
                Showcase Request
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Showcase Your Startup / Business
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Submit your business details to get featured in our campus startups directory.
              </p>
            </div>

            {submitError && (
              <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Startup / Business Name *
                  </label>
                  <input
                    type="text"
                    name="startupName"
                    value={formData.startupName}
                    onChange={handleChange}
                    placeholder="e.g. Vivin's Tech Ventures"
                    className={`w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] ${
                      errors.startupName ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.startupName && (
                    <p className="text-xs text-red-400">{errors.startupName}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Founder Name(s) *
                  </label>
                  <input
                    type="text"
                    name="founderName"
                    value={formData.founderName}
                    onChange={handleChange}
                    placeholder="Vivin Thomas"
                    className={`w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] ${
                      errors.founderName ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.founderName && (
                    <p className="text-xs text-red-400">{errors.founderName}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vivin@example.com"
                    className={`w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] ${
                      errors.email ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] ${
                      errors.phone ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Website or Social Media Link
                </label>
                <input
                  type="url"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  placeholder="https://vivin.dev"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Business / Product Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us what your business or product does, who your target customers are, and what makes it special..."
                  rows="3"
                  className={`w-full resize-none rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] ${
                    errors.description ? "border-red-500/50" : "border-white/10"
                  }`}
                />
                {errors.description && (
                  <p className="text-xs text-red-400">{errors.description}</p>
                )}
              </div>

              <div className="flex items-start gap-3 py-1">
                <input
                  type="checkbox"
                  name="publicConsent"
                  id="publicConsent"
                  checked={formData.publicConsent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-white/10 bg-white/[0.02] accent-[var(--accent)]"
                />
                <label
                  htmlFor="publicConsent"
                  className="text-xs leading-5 text-white/60 select-none cursor-pointer"
                >
                  I consent to have my startup/business listed publicly on the IEDC website once reviewed and approved by the team.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center rounded-xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Showcase Details"}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full text-2xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid var(--border)",
                color: "var(--accent)",
              }}
            >
              ✓
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white">Showcase Request Received!</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
              Thank you for sharing your business details. The IEDC team will review your submission and follow up with you soon.
            </p>
            <button
              onClick={onClose}
              className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
            >
              Close Window
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
