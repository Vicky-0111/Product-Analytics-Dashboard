import StatCard from '../components/ui/StatCard'
import UserGrowthChart from '../components/charts/UserGrowthChart'
import RevenueChart from '../components/charts/RevenueChart'
import { useKpiStats } from '../hooks/useAnalytics'

export default function Dashboard() {
  const { data: stats, isLoading } = useKpiStats()

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {isLoading
          ? [...Array(4)].map((_, i) => <StatCard key={i} loading />)
          : stats?.map(s => <StatCard key={s.label} {...s} />)
        }
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <UserGrowthChart />
        <RevenueChart />
      </div>
    </div>
  )
}
