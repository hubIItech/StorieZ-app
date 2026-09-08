'use client';

import React, { useState } from 'react';

export default function TellYourStoryPage() {
  const [story, setStory] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (story.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col items-center">
      <div className="max-w-2xl w-full space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-amber-400">Tell Your Story</h1>
          <p className="text-slate-400 text-sm">
            Share your personal journey and turning points to help others find solution blueprints.
          </p>
        </header>

        {submitted ? (
          <div className="bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl text-center space-y-3">
            <h2 className="text-xl font-bold text-emerald-400">Story Saved!</h2>
            <p className="text-slate-300 text-sm">
              Thank you for sharing. Your story has been recorded and will help power matches for users facing similar life obstacles.
            </p>
            <button
              onClick={() => {
                setStory('');
                setSubmitted(false);
              }}
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded-xl text-xs font-semibold"
            >
              Share Another Entry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <label className="block text-sm font-semibold text-slate-200">
              Your Journey & Key Challenges
            </label>
            <textarea
              rows={8}
              required
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Describe what you went through, what challenges you faced, and how you navigated them..."
              className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition"
            >
              Save & Publish Story
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
