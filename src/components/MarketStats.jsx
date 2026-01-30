import { TrendingUp, Target, Activity } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  {
    id: 'winrate',
    label: 'Win Rate',
    value: 87.3,
    suffix: '%',
    icon: Target,
    description: 'Last 30 days',
  },
  {
    id: 'return',
    label: 'Avg Return',
    value: 42.8,
    prefix: '+',
    suffix: '%',
    icon: TrendingUp,
    description: 'Monthly average',
  },
  {
    id: 'signals',
    label: 'Signals Sent',
    value: 1247,
    suffix: '',
    icon: Activity,
    description: 'Total delivered',
  },
]

function Counter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000
  })

  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  // eslint-disable-next-line no-unused-vars
  const displayValue = useSpring(springValue)

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Handle integers vs decimals
        const formatted = Number.isInteger(value) 
          ? Math.floor(latest).toLocaleString() 
          : latest.toFixed(1)
        ref.current.textContent = `${prefix}${formatted}${suffix}`
      }
    })
  }, [springValue, value, prefix, suffix])

  return <span ref={ref} />
}

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
          <div className="text-lg font-semibold text-white">
            <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} />
          </div>
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
