import { useLocation } from 'react-router-dom'
import useDashboardStore from '../../store/dashboardStore'

const PAGE_TITLES = {
  '/dashboard': 'Overview',
  '/analytics': 'Analytics',
  '/revenue':   'Revenue',
  '/users':     'Users',
}

const DATE_OPTIONS = ['1M', '3M', '6M', '12M']

export default function Header() {
  const { pathname } = useLocation()
  const { toggleSidebar, dateRange, setDateRange } = useDashboardStore()
  const title = PAGE_TITLES[pathname] ?? 'Dashboard'

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-slate-700/50 bg-surface-900/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="text-slate-400 hover:text-slate-200 transition-colors p-1"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        <h1 className="text-lg font-semibold text-slate-100">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Date Range Filter */}
        <div className="flex items-center bg-surface-800 border border-slate-700/50 rounded-lg p-1 gap-1">
          {DATE_OPTIONS.map(opt => (
            <button
              key={opt}
              onClick={() => setDateRange(opt)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors duration-150 ${
                dateRange === opt
                  ? 'bg-primary-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Export Button */}
        <button className="btn-primary text-xs">
          ↓ Export
        </button>
      </div>
    </header>
  )
}
