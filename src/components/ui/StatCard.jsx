export default function StatCard({ label, value, delta, trend, icon, loading }) {
  if (loading) {
    return (
      <div className="card animate-pulse">
        <div className="h-4 bg-slate-700 rounded w-24 mb-4" />
        <div className="h-8 bg-slate-700 rounded w-32 mb-2" />
        <div className="h-4 bg-slate-700 rounded w-16" />
      </div>
    )
  }

  const isUp = trend === 'up'

  return (
    <div className="card hover:border-primary-500/30 transition-colors duration-200">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</p>
        <span className="text-lg">{icon}</span>
      </div>
      <p className="text-2xl font-bold text-slate-100 font-mono mb-2">{value}</p>
      <span className={`badge ${isUp ? 'badge-green' : 'badge-red'}`}>
        {isUp ? '▲' : '▼'} {delta}
      </span>
    </div>
  )
}
