'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col items-center justify-between">
      <div className="max-w-2xl w-full space-y-8">
        {/* Navigation Bar */}
        <header className="flex justify-between items-center py-4 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="bg-teal-400 text-slate-950 font-bold px-3 py-1 rounded-lg text-lg">S</span>
            <span className="text-xl font-bold text-slate-100">StorieZ</span>
          </div>
          <Link 
            href="/tell-your-story"
            className="px-4 py-2 bg-teal-400 text-slate-950 rounded-xl text-sm font-semibold hover:bg-teal-300 transition"
          >
            Tell Your Story
          </Link>
        </header>

        {/* Hero Section */}
        <section className="text-center space-y-6 pt-6">
          <h1 className="text-4xl font-extrabold text-slate-100 leading-tight">
            a story, <span className="text-teal-400">will you tell Yours?</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-lg mx-auto">
            StorieZ matches your lived experience to people who made it through the same thing. 
            Mask your input, mute your outcome, and earn reputation for every real step forward.
          </p>

          {/* Core Action Buttons */}
          <div className="space-y-3 max-w-sm mx-auto pt-2">
            <Link 
              href="/tell-your-story"
              className="block w-full py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-xl text-center text-sm transition"
            >
              Tell Your Story →
            </Link>
            <Link 
              href="/tell-your-story"
              className="block w-full py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl text-center text-sm transition"
            >
              Open Business Hub
            </Link>
          </div>
        </section>

        {/* Footer Navigation Links */}
        <footer className="pt-12 border-t border-slate-900 space-y-6">
          <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-400">
            <Link href="/tell-your-story" className="hover:text-teal-400">Advice Engine</Link>
            <Link href="/tell-your-story" className="hover:text-teal-400">Community Stories</Link>
            <Link href="/tell-your-story" className="hover:text-teal-400">My Timeline</Link>
            <Link href="/tell-your-story" className="hover:text-teal-400">Solutions Engine</Link>
            <Link href="/tell-your-story" className="hover:text-teal-400">Business Hub</Link>
          </div>
          <p className="text-center text-[10px] text-slate-600">
            © 2026 StorieZ. Mask Your Input · Mute Your Outcome.
          </p>
        </footer>
      </div>
    </main>
  );
}
