'use client' import { useState } ...

import { useState } from 'react'
import Link from 'next/link'

interface StoryLog {
  id: number
  title: string
  content: string
  date: string
}

export default function TimelinePage() {
  const [logs, setLogs] = useState<StoryLog[]>([
    {
      id: 1,
      title: 'First Milestone Reached',
      content: 'Logged first memento and completed trajectory setup.',
      date: '2026-09-01'
    }
  ])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    const newLog: StoryLog = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString().split('T')[0]
    }

    setLogs([newLog, ...logs])
    setTitle('')
    setContent('')
  }

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto text-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Timeline</h1>
          <p className="text-zinc-400">Track your recovery trajectory and add mementos.</p>
        </div>
        <Link href="/" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-sm rounded-lg border border-zinc-700">
          ← Back to Home
        </Link>
      </div>

      {/* Progress Bar */}
      <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 mb-8">
        <h2 className="text-xl font-semibold mb-2">Active Trajectory</h2>
        <div className="w-full bg-zinc-800 h-4 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full w-[82%]" />
        </div>
        <span className="text-sm text-zinc-400 mt-2 block">82% Recovery Milestone Reached</span>
      </div>

      {/* Interactive Form */}
      <form onSubmit={handleAddLog} className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 mb-8">
        <h2 className="text-xl font-semibold mb-4">Log a New Story / Memento</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Log Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Write your story entry..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 font-medium rounded-lg transition-colors"
        >
          Add to Timeline
        </button>
      </form>

      {/* Story Logs List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">Story History</h2>
        {logs.map((log) => (
          <div key={log.id} className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/30">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-lg text-emerald-400">{log.title}</h3>
              <span className="text-xs text-zinc-500">{log.date}</span>
            </div>
            <p className="text-zinc-300">{log.content}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
