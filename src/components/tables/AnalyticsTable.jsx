import { useState, useMemo } from 'react'
import {
  useReactTable, getCoreRowModel, getSortedRowModel,
  getPaginationRowModel, getFilteredRowModel, flexRender,
  createColumnHelper,
} from '@tanstack/react-table'
import { useUsers } from '../../hooks/useAnalytics'
import FilterBar from '../ui/FilterBar'

const helper = createColumnHelper()

const STATUS_BADGE = {
  Active:  'badge-green',
  Churned: 'badge-red',
  Trial:   'badge-yellow',
}

const PLAN_COLOR = {
  Starter:    'text-slate-400',
  Pro:        'text-primary-400',
  Enterprise: 'text-amber-400',
}

const columns = [
  helper.accessor('id', {
    header: 'User ID',
    cell: info => (
      <span className="font-mono text-xs text-slate-400">{info.getValue()}</span>
    ),
  }),
  helper.accessor('name', {
    header: 'Name',
    cell: info => (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
          {info.getValue().charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-200">{info.getValue()}</p>
          <p className="text-xs text-slate-500">{info.row.original.email}</p>
        </div>
      </div>
    ),
  }),
  helper.accessor('plan', {
    header: 'Plan',
    cell: info => (
      <span className={`text-xs font-semibold ${PLAN_COLOR[info.getValue()]}`}>
        {info.getValue()}
      </span>
    ),
  }),
  helper.accessor('mrr', {
    header: 'MRR',
    cell: info => (
      <span className="font-mono text-sm text-slate-300">${info.getValue()}</span>
    ),
  }),
  helper.accessor('status', {
    header: 'Status',
    cell: info => (
      <span className={`badge ${STATUS_BADGE[info.getValue()]}`}>
        {info.getValue()}
      </span>
    ),
  }),
  helper.accessor('joined', {
    header: 'Joined',
    cell: info => (
      <span className="text-xs text-slate-500">{info.getValue()}</span>
    ),
  }),
]

export default function AnalyticsTable() {
  const { data = [], isLoading } = useUsers()
  const [sorting, setSorting] = useState([])
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 8 } },
  })

  return (
    <div className="card">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-sm font-semibold text-slate-200">Users</h2>
        <div className="flex items-center gap-3 flex-wrap">
          <FilterBar />
          <input
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            placeholder="Search users…"
            className="bg-surface-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary-500 w-40"
          />
        </div>
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="space-y-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-12 bg-slate-700/30 rounded-lg animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              {table.getHeaderGroups().map(hg => (
                <tr key={hg.id}>
                  {hg.headers.map(header => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider pb-3 pr-4 cursor-pointer select-none hover:text-slate-200 transition-colors"
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() === 'asc' && ' ↑'}
                      {header.column.getIsSorted() === 'desc' && ' ↓'}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-slate-700/40">
              {table.getRowModel().rows.map(row => (
                <tr key={row.id} className="hover:bg-slate-700/20 transition-colors">
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="py-3 pr-4">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-700/50">
        <p className="text-xs text-slate-500">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()} · {data.length} users
        </p>
        <div className="flex items-center gap-2">
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="btn-ghost disabled:opacity-30">← Prev</button>
          <button onClick={() => table.nextPage()}     disabled={!table.getCanNextPage()}     className="btn-ghost disabled:opacity-30">Next →</button>
        </div>
      </div>
    </div>
  )
}
