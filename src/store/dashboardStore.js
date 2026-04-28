import { create } from 'zustand'

const useDashboardStore = create((set) => ({
  //  Filters 
  dateRange: '12M',     // '1M' | '3M' | '6M' | '12M'
  planFilter: 'All',    // 'All' | 'Starter' | 'Pro' | 'Enterprise'
  statusFilter: 'All',  // 'All' | 'Active' | 'Churned' | 'Trial'

  setDateRange:    (dateRange)    => set({ dateRange }),
  setPlanFilter:   (planFilter)   => set({ planFilter }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),

  //  Sidebar 
  sidebarOpen: true,
  toggleSidebar: () => set(s => ({ sidebarOpen: !s.sidebarOpen })),
}))

export default useDashboardStore
