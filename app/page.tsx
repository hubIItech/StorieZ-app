iimport Link from 'next/link'

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-5xl mx-auto">
      <header className="flex justify-between items-center pb-6 mb-8 border-b border-zinc-800">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Timeline</h1>
          <p className="text-zinc-400 text-sm mt-1">Track your recovery trajectory, milestones, and story mementos.</p>
        </div>
        <Link
          href="/"
          className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-sm rounded-lg border border-zinc-700 text-zinc-200 transition"
        >
          ← Back to Home
        </Link>
      </header>
      <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">Active Trajectory</span>
          <span className="text-sm text-zinc-400">Recovery Status: <strong className="text-white">82%</strong></span>
        </div>
        <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full w-[82%]"></div>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-xl font-semibold border-b border-zinc-800 pb-2">Timeline Milestones</h2>
        <div className="border border-zinc-800 bg-zinc-950 p-5 rounded-xl space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-0.5 rounded-full">
              Milestone Reached
            </span>
            <span className="text-xs text-zinc-500">2 days ago</span>
          </div>
          <h3 className="text-lg font-medium text-white">Registered Business Node</h3>
          <p className="text-sm text-zinc-400">Successfully completed the transition step and logged credential artifact.</p>
        </div>
        <div className="border border-zinc-800 bg-zinc-950 p-5 rounded-xl space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-700 px-2.5 py-0.5 rounded-full">
              Masked Log
            </span>
            <span className="text-xs text-zinc-500">1 week ago</span>
          </div>
          <h3 className="text-lg font-medium text-white">Initial Situation Masked</h3>
          <p className="text-sm text-zinc-400">Logged raw entry privately and matched with peer trajectory guides.</p>
        </div>
      </section>
    </main>
  )
