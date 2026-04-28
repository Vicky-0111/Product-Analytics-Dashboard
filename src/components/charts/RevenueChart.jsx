import {
  ComposedChart, Bar, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { useRevenue } from '../../hooks/useAnalytics'

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-surface-800 border border-slate-700 rounded-xl p-3 shadow-xl">
      <p className="text-xs text-slate-400 mb-2">{label}</p>
      {payload.map(p => (
        <p key={p.name} className="text-sm font-medium" style={{ color: p.color }}>
          {p.name}: ${(p.value / 1000).toFixed(0)}K
        </p>
      ))}
    </div>
  )
}

export default function RevenueChart() {
  const { data, isLoading } = useRevenue()

  if (isLoading) return (
    <div className="card">
      <div className="h-4 bg-slate-700 rounded w-28 mb-4 animate-pulse" />
      <div className="h-64 bg-slate-700/30 rounded-xl animate-pulse" />
    </div>
  )

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-semibold text-slate-200">Revenue (MRR vs Target)</h2>
        <span className="badge badge-green">$194K MRR</span>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" strokeOpacity={0.5} />
          <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${v/1000}K`} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }} />
          <Bar    dataKey="mrr"    name="MRR"    fill="#6366f1" radius={[4,4,0,0]} opacity={0.9} />
          <Line   dataKey="target" name="Target" stroke="#f59e0b" strokeWidth={2} dot={false} strokeDasharray="4 4" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
