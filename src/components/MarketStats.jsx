import { TrendingUp, Target, Activity } from 'lucide-react'

const stats = [
  {
    id: 'winrate',
    label: 'Win Rate',
    value: '87.3%',
    icon: Target,
    description: 'Last 30 days',
  },
  {
    id: 'return',
    label: 'Avg Return',
    value: '+42.8%',
    icon: TrendingUp,
    description: 'Monthly average',
  },
  {
    id: 'signals',
    label: 'Signals Sent',
    value: '1,247',
    icon: Activity,
    description: 'Total delivered',
  },
]

function StatCard({ item }) {
  const Icon = item.icon

  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-[border-color,transform] duration-300 hover:scale-1.02 hover:border-electric/30"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
          <Icon className="h-5 w-5 text-electric" />
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-white">{item.value}</div>
          <div className="text-xs text-white/60">{item.description}</div>
        </div>
      </div>
      <div className="mt-3 text-sm font-medium text-white/90">{item.label}</div>
    </div>
  )
}

function MarketStats() {
  return (
    <section
      className="mt-8"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
        <h2 className="text-lg font-semibold text-white/90 mb-4">Performance Metrics</h2>
        <div className="grid grid-cols-1 gap-3">
          {stats.map((item) => (
            <StatCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketStats
