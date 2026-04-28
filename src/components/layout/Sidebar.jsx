import { NavLink } from 'react-router-dom'
import useDashboardStore from '../../store/dashboardStore'

const NAV = [
  { to: '/dashboard', icon: '▦',  label: 'Overview'   },
  { to: '/analytics', icon: '⬡',  label: 'Analytics'  },
  { to: '/revenue',   icon: '◈',  label: 'Revenue'     },
  { to: '/users',     icon: '◉',  label: 'Users'       },
]

export default function Sidebar() {
  const { sidebarOpen } = useDashboardStore()

  return (
    <aside
      className={`
        flex flex-col bg-surface-800 border-r border-slate-700/50
        transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'w-56' : 'w-16'}
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-slate-700/50">
        <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          PA
        </div>
        {sidebarOpen && (
          <span className="font-semibold text-slate-100 text-sm whitespace-nowrap">
            ProductAnalytics
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 p-3 flex-1">
        {NAV.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150
               ${isActive
                 ? 'bg-primary-600/20 text-primary-400'
                 : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/40'}`
            }
          >
            <span className="text-base w-5 text-center flex-shrink-0">{icon}</span>
            {sidebarOpen && <span className="whitespace-nowrap">{label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-slate-700/50">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex-shrink-0" />
          {sidebarOpen && (
            <div>
              <p className="text-xs font-medium text-slate-200">Admin</p>
              <p className="text-xs text-slate-500">admin@product.io</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
