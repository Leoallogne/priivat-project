import { TrendingUp, TrendingDown, BarChart3, Activity, DollarSign, Clock } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

function PerformanceChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('1D')
  const [hoveredBar, setHoveredBar] = useState(null)
  const [chartData, setChartData] = useState([
    { time: '00:00', open: 1.0842, high: 1.0856, low: 1.0838, close: 1.0848, volume: 1240, winRate: 82.3 },
    { time: '04:00', open: 1.0848, high: 1.0862, low: 1.0841, close: 1.0855, volume: 1680, winRate: 87.8 },
    { time: '08:00', open: 1.0855, high: 1.0871, low: 1.0849, close: 1.0863, volume: 1550, winRate: 85.1 },
    { time: '12:00', open: 1.0863, high: 1.0884, low: 1.0858, close: 1.0876, volume: 1890, winRate: 89.4 },
    { time: '16:00', open: 1.0876, high: 1.0898, low: 1.0869, close: 1.0892, volume: 2010, winRate: 91.2 },
    { time: '20:00', open: 1.0892, high: 1.0901, low: 1.0881, close: 1.0887, volume: 1770, winRate: 87.3 },
  ])

  const containerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev]
        const lastItem = { ...newData[newData.length - 1] }
        
        // Simulate price movement
        const change = (Math.random() - 0.5) * 0.001
        lastItem.close = Number((lastItem.close + change).toFixed(4))
        
        // Update high/low if close moves outside
        if (lastItem.close > lastItem.high) lastItem.high = lastItem.close
        if (lastItem.close < lastItem.low) lastItem.low = lastItem.close
        
        lastItem.volume = Math.max(1000, lastItem.volume + Math.floor((Math.random() - 0.5) * 50))
        
        newData[newData.length - 1] = lastItem
        return newData
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const maxPrice = Math.max(...chartData.map(d => d.high))
  const minPrice = Math.min(...chartData.map(d => d.low))
  const maxVolume = Math.max(...chartData.map(d => d.volume))
  const avgWinRate = chartData.reduce((sum, d) => sum + d.winRate, 0) / chartData.length
  const currentData = chartData[chartData.length - 1]

  const periods = ['1H', '4H', '1D', '1W', '1M']

  const formatPrice = (price) => price.toFixed(4)
  const formatPercent = (value) => `${value > 0 ? '+' : ''}${value.toFixed(2)}%`

  const CandlestickBar = ({ item, index }) => {
    const isGreen = item.close > item.open
    const priceRange = maxPrice - minPrice
    const bodyHeight = Math.abs(item.close - item.open) / priceRange * 100
    const wickTop = ((maxPrice - item.high) / priceRange) * 100
    const wickBottom = ((maxPrice - item.low) / priceRange) * 100
    const bodyTop = ((maxPrice - Math.max(item.open, item.close)) / priceRange) * 100

    return (
      <div
        key={item.time}
        className="relative group cursor-pointer flex-1 min-w-0"
        onMouseEnter={() => setHoveredBar(index)}
        onMouseLeave={() => setHoveredBar(null)}
      >
        <div className="relative h-32 w-full flex items-center justify-center">
          <div 
            className="absolute w-px bg-electric/40"
            style={{ 
              top: `${wickTop}%`, 
              height: `${Math.max(wickBottom - wickTop, 1)}%` 
            }}
          />
          <div 
            className={`absolute rounded-sm transition-all duration-300 ${
              isGreen ? 'bg-green-400' : 'bg-red-400'
            } ${hoveredBar === index ? 'opacity-100 shadow-sm' : 'opacity-90'}`}
            style={{ 
              top: `${bodyTop}%`, 
              height: `${Math.max(bodyHeight, 3)}%`,
              width: '50%',
              left: '25%'
            }}
          />
        </div>

        {hoveredBar === index && (
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-black/95 border border-white/20 rounded-lg p-3 z-30 min-w-36 shadow-xl">
            <div className="text-xs space-y-1">
              <div className="text-white/60 font-medium">{item.time}</div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                <div className="flex justify-between">
                  <span className="text-white/70 text-xs">O:</span>
                  <span className={`text-xs font-medium ${isGreen ? 'text-green-400' : 'text-red-400'}`}>
                    {formatPrice(item.open)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-xs">H:</span>
                  <span className="text-white/90 text-xs font-medium">{formatPrice(item.high)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-xs">L:</span>
                  <span className="text-white/90 text-xs font-medium">{formatPrice(item.low)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70 text-xs">C:</span>
                  <span className={`text-xs font-medium ${isGreen ? 'text-green-400' : 'text-red-400'}`}>
                    {formatPrice(item.close)}
                  </span>
                </div>
              </div>
              <div className="flex justify-between pt-1 border-t border-white/20">
                <span className="text-white/70 text-xs">WR:</span>
                <span className="text-electric text-xs font-semibold">{item.winRate.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  const VolumeBar = ({ item }) => (
    <div
      key={`volume-${item.time}`}
      className="relative group cursor-pointer flex-1 min-w-0 h-full"
    >
      <div 
        className="absolute bottom-0 left-0 w-full bg-electric/30 rounded-t-sm transition-colors hover:bg-electric/40"
        style={{ height: `${(item.volume / maxVolume) * 100}%` }}
      />
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-lg">
        {item.volume.toLocaleString()}
      </div>
    </div>
  )

  return (
    <section className="mt-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-lg font-semibold text-white/90 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-electric" />
              EUR/USD Performance
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-sm">
                {currentData.winRate > 85 ? (
                  <TrendingUp className="h-4 w-4 text-green-400" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-400" />
                )}
                <span className="text-white/90">{currentData.winRate.toFixed(1)}%</span>
              </div>
              <span className="text-xs text-white/60">Win Rate</span>
            </div>
          </div>

          <div className="flex gap-1 mt-4 overflow-x-auto">
            {periods.map(period => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 py-1 text-xs rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                  selectedPeriod === period
                    ? 'bg-electric/20 text-electric border border-electric/50 shadow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-5 space-y-4" ref={containerRef}>
          <div className="relative">
            <div className="bg-black/20 rounded-lg border border-white/5 p-3">
              <div className="relative h-32 sm:h-40">
                <div className="absolute inset-0">
                  <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
                  <div className="absolute left-1/4 top-0 h-full w-px bg-white/5" />
                  <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />
                  <div className="absolute left-3/4 top-0 h-full w-px bg-white/5" />
                  <div className="absolute right-0 top-0 h-full w-px bg-white/10" />
                  
                  <div className="absolute left-0 top-0 w-full h-px bg-white/10" />
                  <div className="absolute left-0 top-1/4 w-full h-px bg-white/5" />
                  <div className="absolute left-0 top-1/2 w-full h-px bg-white/5" />
                  <div className="absolute left-0 top-3/4 w-full h-px bg-white/5" />
                  <div className="absolute left-0 bottom-0 w-full h-px bg-white/10" />
                </div>

                <div className="absolute inset-0 flex justify-between px-2 gap-1">
                  {chartData.map((item, index) => (
                    <CandlestickBar key={item.time} item={item} index={index} />
                  ))}
                </div>

                <div className="absolute left-2 top-1 text-xs text-white/40">
                  {formatPrice(maxPrice)}
                </div>
                <div className="absolute left-2 bottom-1 text-xs text-white/40">
                  {formatPrice(minPrice)}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-black/20 rounded-lg border border-white/5 p-3">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="h-3 w-3 text-electric" />
                <span className="text-xs text-white/40">Volume</span>
              </div>
              <div className="relative h-16">
                <div className="absolute inset-0 flex items-end justify-between gap-1">
                  {chartData.map(item => (
                    <VolumeBar key={item.time} item={item} />
                  ))}
                </div>
              </div>
              <div className="flex justify-between text-xs text-white/40 mt-1">
                {chartData.map(item => (
                  <span key={item.time} className="font-medium">{item.time}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-4 border-t border-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Activity className="h-3 w-3 text-electric" />
                <span className="text-sm font-semibold text-white">
                  {formatPrice(currentData.close)}
                </span>
              </div>
              <div className="text-xs text-white/60 mt-0.5">Current Price</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-green-400">
                {formatPercent(((currentData.close - chartData[0].open) / chartData[0].open * 100))}
              </div>
              <div className="text-xs text-white/60 mt-0.5">24h Change</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-white">
                {chartData.reduce((sum, d) => sum + d.volume, 0).toLocaleString()}
              </div>
              <div className="text-xs text-white/60 mt-0.5">Total Volume</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-electric">
                {avgWinRate.toFixed(1)}%
              </div>
              <div className="text-xs text-white/60 mt-0.5">Avg Win Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceChart
