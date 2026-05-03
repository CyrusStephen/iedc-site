"use client";

import MediaSection from "../../components/MediaSection";

export default function MediaPage() {
  return (
    <main className="bg-black text-white min-h-screen px-4 md:px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-6">
        Stories & Media
      </h1>

      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Conversations, insights, and moments that define our culture.
      </p>

      <MediaSection />

    </main>
  );
}