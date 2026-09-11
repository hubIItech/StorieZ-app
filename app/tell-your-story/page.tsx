"use client";

import { useState } from "react";

export default function TellYourStory() {
  const [story, setStory] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!story.trim()) {
      alert("Please tell us a little about your story first.");
      return;
    }

    alert("Your story has been received. We will connect it to your StorieZ timeline soon.");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-950 via-emerald-900 to-cyan-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="mb-10 inline-block text-sm text-emerald-200 hover:text-white"
        >
          ← Back to StorieZ
        </a>

        <div className="rounded-3xl border border-white/10 bg-black/20 p-8 shadow-2xl backdrop-blur">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-300">
            StorieZ
          </p>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Tell Your Story
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-emerald-50/80">
            Everyone has a story. Your experience may help someone else
            recognize that they are not alone.
          </p>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="story"
              className="mb-3 block text-lg font-semibold"
            >
              What would you like to share?
            </label>

            <textarea
              id="story"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Start wherever feels right..."
              className="min-h-[280px] w-full rounded-2xl border border-white/10 bg-white/10 p-5 text-white outline-none placeholder:text-white/40 focus:border-emerald-400"
            />

            <p className="mt-3 text-sm text-white/50">
              For now, this is a private draft. We will build the secure
              story-saving system next.
            </p>

            <button
              type="submit"
              className="mt-6 rounded-full bg-emerald-400 px-7 py-3 font-bold text-emerald-950 transition hover:bg-emerald-300"
            >
              Continue My Story
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
