import useDashboardStore from '../../store/dashboardStore'

const PLANS    = ['All', 'Starter', 'Pro', 'Enterprise']
const STATUSES = ['All', 'Active', 'Churned', 'Trial']

export default function FilterBar() {
  const { planFilter, statusFilter, setPlanFilter, setStatusFilter } = useDashboardStore()

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {/* Plan Filter */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500 font-medium">Plan:</span>
        <div className="flex items-center bg-surface-800 border border-slate-700/50 rounded-lg p-1 gap-1">
          {PLANS.map(p => (
            <button
              key={p}
              onClick={() => setPlanFilter(p)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors duration-150 ${
                planFilter === p
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500 font-medium">Status:</span>
        <div className="flex items-center bg-surface-800 border border-slate-700/50 rounded-lg p-1 gap-1">
          {STATUSES.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors duration-150 ${
                statusFilter === s
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
