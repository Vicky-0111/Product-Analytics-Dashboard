import RevenueChart from '../components/charts/RevenueChart'
import { useRevenue } from '../hooks/useAnalytics'

export default function Revenue() {
  const { data } = useRevenue()
  const latest = data?.[data.length - 1]

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Current MRR', value: latest ? `$${(latest.mrr/1000).toFixed(0)}K` : '–', color: 'text-primary-400' },
          { label: 'ARR Run-rate', value: latest ? `$${(latest.arr/1000000).toFixed(2)}M` : '–', color: 'text-emerald-400' },
          { label: 'vs Target',   value: latest ? `+${(((latest.mrr - latest.target)/latest.target)*100).toFixed(1)}%` : '–', color: 'text-amber-400' },
        ].map(({ label, value, color }) => (
          <div key={label} className="card text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">{label}</p>
            <p className={`text-3xl font-bold font-mono ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      <RevenueChart />
    </div>
  )
}
