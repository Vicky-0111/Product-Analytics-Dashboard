import AnalyticsChart from '../components/charts/AnalyticsChart'
import UserGrowthChart from '../components/charts/UserGrowthChart'

export default function Analytics() {
  return (
    <div className="space-y-6">
      <AnalyticsChart />
      <UserGrowthChart />
    </div>
  )
}
