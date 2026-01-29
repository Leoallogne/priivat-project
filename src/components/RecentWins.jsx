import { Trophy, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { useState, useEffect } from 'react'

const recentWins = [
  {
    id: 'win1',
    pair: 'EUR/USD',
    type: 'BUY',
    entry: 1.0842,
    exit: 1.0898,
    profit: '+45.8 pips',
    profitPercent: '+2.3%',
    time: '12 min ago',
    status: 'closed'
  },
  {
    id: 'win2',
    pair: 'GBP/JPY',
    type: 'SELL',
    entry: 195.67,
    exit: 195.12,
    profit: '+55.0 pips',
    profitPercent: '+3.1%',
    time: '28 min ago',
    status: 'closed'
  },
  {
    id: 'win3',
    pair: 'XAU/USD',
    type: 'BUY',
    entry: 2342.15,
    exit: 2351.80,
    profit: '+96.5 pips',
    profitPercent: '+4.1%',
    time: '45 min ago',
    status: 'closed'
  },
  {
    id: 'win4',
    pair: 'USD/JPY',
    type: 'SELL',
    entry: 157.23,
    exit: 156.88,
    profit: '+35.0 pips',
    profitPercent: '+2.2%',
    time: '1 hour ago',
    status: 'closed'
  },
  {
    id: 'win5',
    pair: 'BTC/USD',
    type: 'BUY',
    entry: 67842,
    exit: 68235,
    profit: '+393 pts',
    profitPercent: '+5.8%',
    time: '2 hours ago',
    status: 'closed'
  }
]

function WinCard({ item }) {
  const isBuy = item.type === 'BUY'
  
  return (
    <div
      className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition-[border-color,transform] duration-300 hover:scale-1.02 hover:border-electric/30"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">{item.pair}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              isBuy 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {item.type}
            </span>
          </div>
          
          <div className="mt-2 flex items-center gap-3 text-xs text-white/60">
            <div>Entry: {item.entry}</div>
            <div>Exit: {item.exit}</div>
          </div>
          
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-sm font-semibold text-green-400">{item.profit}</span>
              <span className="text-xs text-green-400">{item.profitPercent}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-white/50">
              <Clock className="h-3 w-3" />
              <span>{item.time}</span>
            </div>
          </div>
        </div>
        
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-green-500/30 bg-green-500/10">
          <Trophy className="h-4 w-4 text-green-400" />
        </div>
      </div>
    </div>
  )
}

function RecentWins() {
  const [wins, setWins] = useState(recentWins)

  useEffect(() => {
    const interval = setInterval(() => {
      const newWin = {
        id: `win${Date.now()}`,
        pair: ['EUR/USD', 'GBP/JPY', 'XAU/USD', 'USD/JPY', 'BTC/USD'][Math.floor(Math.random() * 5)],
        type: Math.random() > 0.5 ? 'BUY' : 'SELL',
        entry: (Math.random() * 1000 + 100).toFixed(2),
        exit: (Math.random() * 1000 + 100).toFixed(2),
        profit: `+${(Math.random() * 100 + 20).toFixed(1)} pips`,
        profitPercent: `+${(Math.random() * 5 + 1).toFixed(1)}%`,
        time: 'Just now',
        status: 'closed'
      }
      
      setWins(prev => [newWin, ...prev.slice(0, 4)])
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="mt-8"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white/90 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-400" />
            Recent Wins
          </h2>
          <div className="flex items-center gap-1 text-sm">
            <DollarSign className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-semibold">
              +{wins.reduce((sum, win) => sum + parseFloat(win.profitPercent), 0).toFixed(1)}%
            </span>
            <span className="text-white/60">today</span>
          </div>
        </div>

        <div className="space-y-3">
          {wins.map((item, index) => (
            <WinCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="mt-4 text-center">
          <a
            href="https://t.me/OdfTrade"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-electric/50 bg-electric/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-electric/20 hover:border-electric/60"
          >
            <Trophy className="h-4 w-4" />
            See All Performance
          </a>
        </div>
      </div>
    </section>
  )
}

export default RecentWins
