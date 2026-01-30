// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'

const pairs = [
  { pair: 'XAU/USD', price: '2,341.50', change: '+1.2%', up: true },
  { pair: 'EUR/USD', price: '1.0845', change: '-0.4%', up: false },
  { pair: 'BTC/USD', price: '67,890', change: '+2.5%', up: true },
  { pair: 'GBP/JPY', price: '195.40', change: '+0.8%', up: true },
  { pair: 'US30', price: '39,120', change: '-0.2%', up: false },
  { pair: 'ETH/USD', price: '3,450', change: '+1.8%', up: true },
  { pair: 'NAS100', price: '18,240', change: '+0.5%', up: true },
]

function Ticker() {
  return (
    <div className="w-full overflow-hidden bg-white/5 border-y border-white/5 backdrop-blur-sm py-2">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {[...pairs, ...pairs, ...pairs].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-medium">
            <span className="text-white/80">{item.pair}</span>
            <span className="text-white">{item.price}</span>
            <span className={`flex items-center gap-0.5 ${item.up ? 'text-green-400' : 'text-red-400'}`}>
              {item.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {item.change}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Ticker
