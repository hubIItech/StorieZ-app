export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
        Everyone has a story, will you tell Yours?
      </h1>
      <p className="text-zinc-400 text-lg mb-8 max-w-xl">
        Mask your input. Mute your outcome. Log your mementos and track your recovery journey securely.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#timeline"
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors"
        >
          My Timeline
        </a>
        <a
          href="#profile"
          className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg transition-colors border border-zinc-700"
        >
          Sign In / Profile
        </a>
      </div>
    </main>
  )
}
