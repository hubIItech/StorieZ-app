'use client';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">My StorieZ Profile</h1>
          <p className="text-slate-400 text-sm">Masked Identity · Verified Node</p>
        </div>
        <div className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-4 py-2 rounded-lg font-bold">
          350 3eco
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Active Trajectory</h2>
          <p className="text-slate-300 text-sm mb-2">Recovery Status: <span className="text-emerald-400 font-bold">82%</span></p>
          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[82%]"></div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Earned Merit Badges</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">🛡️ Scared But Did It</li>
            <li className="flex items-center gap-2">⚡ Initiative Driver</li>
            <li className="flex items-center gap-2">🌱 Venture Spark</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
