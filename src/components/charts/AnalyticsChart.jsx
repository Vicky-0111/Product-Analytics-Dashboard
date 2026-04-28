import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell, Legend,
} from 'recharts'
import { useFunnel, useTrafficSources } from '../../hooks/useAnalytics'

const PIE_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444']

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-surface-800 border border-slate-700 rounded-xl p-3 shadow-xl">
      <p className="text-sm font-medium text-slate-200">
        {payload[0].payload.stage ?? payload[0].name}: {payload[0].value?.toLocaleString()}
        {payload[0].payload.value != null ? '' : '%'}
      </p>
    </div>
  )
}

export default function AnalyticsChart() {
  const { data: funnel, isLoading: fLoading } = useFunnel()
  const { data: traffic, isLoading: tLoading } = useTrafficSources()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Funnel */}
      <div className="card">
        <h2 className="text-sm font-semibold text-slate-200 mb-6">Conversion Funnel</h2>
        {fLoading
          ? <div className="h-64 bg-slate-700/30 rounded-xl animate-pulse" />
          : (
            <ResponsiveContainer width="100%" height={260}>
              <BarChart layout="vertical" data={funnel} margin={{ left: 20, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" strokeOpacity={0.5} horizontal={false} />
                <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
                <YAxis type="category" dataKey="stage" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} width={70} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[0,6,6,0]}>
                  {funnel?.map((_, i) => (
                    <Cell key={i} fill={`rgba(99,102,241,${1 - i * 0.15})`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )
        }
      </div>

      {/* Traffic Sources Pie */}
      <div className="card">
        <h2 className="text-sm font-semibold text-slate-200 mb-6">Traffic Sources</h2>
        {tLoading
          ? <div className="h-64 bg-slate-700/30 rounded-xl animate-pulse" />
          : (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={traffic}
                  cx="50%"
                  cy="45%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {traffic?.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(val, name) => [`${val}%`, name]}
                  contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }} />
              </PieChart>
            </ResponsiveContainer>
          )
        }
      </div>
    </div>
  )
}
