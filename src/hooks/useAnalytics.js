import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import useDashboardStore from '../store/dashboardStore'

export function useKpiStats() {
  return useQuery({
    queryKey: ['kpi-stats'],
    queryFn: api.getKpiStats,
  })
}

export function useUserGrowth() {
  const dateRange = useDashboardStore(s => s.dateRange)
  return useQuery({
    queryKey: ['user-growth', dateRange],
    queryFn: api.getUserGrowth,
    select: (data) => {
      const sliceMap = { '1M': 1, '3M': 3, '6M': 6, '12M': 12 }
      const n = sliceMap[dateRange] ?? 12
      return data.slice(-n)
    },
  })
}

export function useRevenue() {
  const dateRange = useDashboardStore(s => s.dateRange)
  return useQuery({
    queryKey: ['revenue', dateRange],
    queryFn: api.getRevenue,
    select: (data) => {
      const sliceMap = { '1M': 1, '3M': 3, '6M': 6, '12M': 12 }
      const n = sliceMap[dateRange] ?? 12
      return data.slice(-n)
    },
  })
}

export function useFunnel() {
  return useQuery({
    queryKey: ['funnel'],
    queryFn: api.getFunnel,
  })
}

export function useTrafficSources() {
  return useQuery({
    queryKey: ['traffic-sources'],
    queryFn: api.getTrafficSources,
  })
}

export function useUsers() {
  const planFilter   = useDashboardStore(s => s.planFilter)
  const statusFilter = useDashboardStore(s => s.statusFilter)
  return useQuery({
    queryKey: ['users', planFilter, statusFilter],
    queryFn: () => api.getUsers({ plan: planFilter, status: statusFilter }),
  })
}
