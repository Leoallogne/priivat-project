import { motion } from 'framer-motion'
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

function StatCard({ item, index }) {
  const Icon = item.icon

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.08,
          },
        },
      }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(0, 122, 255, 0.3)' }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-[border-color,transform] duration-300"
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
    </motion.div>
  )
}

function MarketStats() {
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className="mt-8"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
        <h2 className="text-lg font-semibold text-white/90 mb-4">Performance Metrics</h2>
        <div className="grid grid-cols-1 gap-3">
          {stats.map((item, index) => (
            <StatCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default MarketStats
