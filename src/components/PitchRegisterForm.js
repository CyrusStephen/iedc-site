"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/utils/supabase/client";

export default function PitchRegisterForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ideaTitle: "",
    problem: "",
    solution: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    
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

    if (!formData.ideaTitle.trim()) newErrors.ideaTitle = "Idea title is required";
    if (!formData.problem.trim()) newErrors.problem = "Problem statement is required";
    if (!formData.solution.trim()) newErrors.solution = "Proposed solution is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      const { error } = await supabase.from("pitches").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        idea_title: formData.ideaTitle,
        problem: formData.problem,
        solution: formData.solution,
      });

      if (error) throw error;

      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError(err.message || "Failed to submit pitch. Please try again.");
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

        <AnimatePresence mode="wait">
          {!submitSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
                  Pitch Deck
                </p>
                <h2 className="mt-1.5 text-2xl font-semibold text-white md:text-3xl">
                  Pitch Your Idea
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  Share your innovative concepts, startup thoughts, or projects with IEDC for incubation and support.
                </p>
              </div>

              {submitError && (
                <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-white/60">
                      Founder Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Vivin Thomas"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] focus:bg-white/[0.05]"
                    />
                    {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-white/60">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vivin@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] focus:bg-white/[0.05]"
                    />
                    {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-white/60">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., 9876543210"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] focus:bg-white/[0.05]"
                    />
                    {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
                  </div>

                  {/* Idea Title */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-white/60">
                      Idea / Startup Name *
                    </label>
                    <input
                      type="text"
                      name="ideaTitle"
                      value={formData.ideaTitle}
                      onChange={handleChange}
                      placeholder="e.g., Eco-friendly delivery"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)] focus:bg-white/[0.05]"
                    />
                    {errors.ideaTitle && <p className="text-xs text-red-400">{errors.ideaTitle}</p>}
                  </div>
                </div>

                {/* Solution Statement */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-white/60">
                    What is your proposed solution? *
                  </label>
                  <textarea
                    name="solution"
                    value={formData.solution}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Explain how your product, app, or service solves this problem..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none resize-none transition focus:border-[var(--accent)] focus:bg-white/[0.05]"
                  />
                  {errors.solution && <p className="text-xs text-red-400">{errors.solution}</p>}
                </div>

                {/* Problem Statement */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium uppercase tracking-wider text-white/60">
                    What problem are you solving? *
                  </label>
                  <textarea
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Describe the issue, pain points, or gap you identified..."
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none resize-none transition focus:border-[var(--accent)] focus:bg-white/[0.05]"
                  />
                  {errors.problem && <p className="text-xs text-red-400">{errors.problem}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 disabled:bg-white/50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting Pitch...
                    </>
                  ) : (
                    "Submit Idea Pitch"
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-white">Idea Pitch Submitted!</h2>
              <p className="mt-3 max-w-sm text-sm text-white/50 leading-relaxed">
                Thank you for pitching your idea to IEDC SB College. Our core committee will review your submission and connect with you shortly for feedback and discussion!
              </p>

              <button
                onClick={onClose}
                className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Close Window
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
