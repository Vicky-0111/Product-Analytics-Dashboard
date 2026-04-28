import {
  userGrowthData,
  revenueData,
  funnelData,
  trafficData,
  kpiStats,
  usersTableData,
} from '../data/mockData'

// Simulate async network delay
const delay = (ms = 400) => new Promise(res => setTimeout(res, ms))

export const api = {
  async getKpiStats() {
    await delay()
    return kpiStats
  },

  async getUserGrowth() {
    await delay()
    return userGrowthData
  },

  async getRevenue() {
    await delay()
    return revenueData
  },

  async getFunnel() {
    await delay()
    return funnelData
  },

  async getTrafficSources() {
    await delay()
    return trafficData
  },

  async getUsers({ plan, status } = {}) {
    await delay()
    let data = [...usersTableData]
    if (plan   && plan   !== 'All') data = data.filter(u => u.plan   === plan)
    if (status && status !== 'All') data = data.filter(u => u.status === status)
    return data
  },
}
