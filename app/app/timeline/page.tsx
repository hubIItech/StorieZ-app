export default function TimelinePage() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">My Timeline</h1>
      <p className="text-gray-400 mb-8">
        Track your recovery trajectory, log mementos, and monitor your 3eco progress.
      </p>

      <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 mb-6">
        <h2 className="text-xl font-semibold mb-2">Active Trajectory</h2>
        <div className="w-full bg-zinc-800 h-4 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full w-[82%]" />
        </div>
        <span className="text-sm text-zinc-400 mt-2 block">82% Recovery Milestone Reached</span>
      </div>
    </main>
  )
}
