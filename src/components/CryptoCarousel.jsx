// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const coins = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    color: '#F7931A',
    path: (
      <path d="M23.94 14.17c.56-3.73-2.29-5.72-6.18-7.06l1.26-5.06-3.08-.77-.44 1.75c-1.14-.29-2.33-.56-3.51-.83l.44-1.78-3.08-.77-1.27 5.09c-.83-.2-1.68-.39-2.51-.59l.01.03-4.25-1.06-.82 3.29s2.28.52 2.23.55c1.24.31 1.47 1.13 1.43 1.78l-1.44 5.76c.09.02.2.05.32.1l-.33-.08-2.01 8.08c-.15.38-.54.95-1.41.74.05.07-2.23-.56-2.23-.56l-1.54 3.55 4.01 1c.93.23 1.84.47 2.73.69l-1.28 5.14 3.08.77.44-1.78c1.16.31 2.28.6 3.37.86l-.43 1.75 3.09.77 1.28-5.13c5.26 1 9.22.6 10.88-4.16 1.34-3.83-.07-6.05-2.84-7.49 2.02-.47 3.54-1.79 3.95-4.54zm-7.08 9.92c-.96 3.87-7.51 1.78-9.63 1.25l1.72-6.88c2.12.53 8.94 1.58 7.91 5.63zm.96-9.98c-.88 3.52-6.32 1.73-8.08 1.29l1.56-6.27c1.76.44 7.39 1.26 6.52 4.98z" />
    )
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    color: '#627EEA',
    path: (
      <path d="M11.94 0 3.75 13.62l8.19 4.84 8.2-4.84L11.94 0zM11.94 24l8.25-11.62-8.25 4.85-8.24-4.85L11.94 24z" />
    )
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    color: '#14F195',
    path: (
      <path d="M3.56 18.06a.75.75 0 0 1 .15-.79l2.76-3.14a.75.75 0 0 1 .56-.25h13.25a.75.75 0 0 1 .56 1.21l-2.73 3.1a.75.75 0 0 1-.56.25H4.28a.75.75 0 0 1-.72-.38zm.72-12.38a.75.75 0 0 0-.56.25l-2.73 3.1a.75.75 0 0 0 .56 1.21h13.25a.75.75 0 0 0 .56-.25l2.76-3.14a.75.75 0 0 0-.15-.79.75.75 0 0 0-.6-.38H4.28zm0 6.13a.75.75 0 0 0-.56.25l-2.73 3.1a.75.75 0 0 0 .56 1.21h13.25a.75.75 0 0 0 .56-.25l2.76-3.14a.75.75 0 0 0-.15-.79.75.75 0 0 0-.6-.38H4.28z" />
    )
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    color: '#FFFFFF',
    path: (
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21.6c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zM12 4.8L7.2 9.6l4.8 4.8 4.8-4.8L12 4.8zm0 14.4l4.8-4.8-4.8-4.8-4.8 4.8 4.8 4.8z" />
    )
  },
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    color: '#F3BA2F',
    path: (
      <path d="M12 0L3.5 8.5 12 17l8.5-8.5L12 0zm0 24l8.5-8.5-2.1-2.1L12 19.8l-6.4-6.4-2.1 2.1L12 24zm-6.4-15.5l2.1 2.1L12 5.8l4.3 4.8 2.1-2.1L12 1.6 5.6 8.5z" />
    )
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    color: '#C2A633',
    path: (
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3.3 17.6h-5.9V6.4h5.9c2.8 0 5.1 2.5 5.1 5.6s-2.3 5.6-5.1 5.6zm0-9.2h-3.9v7.2h3.9c1.7 0 3.1-1.6 3.1-3.6s-1.4-3.6-3.1-3.6z" />
    )
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    color: '#0033AD',
    path: (
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21.6c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm-1.2-4.8h2.4v-2.4h-2.4v2.4zm0-4.8h2.4V9.6h-2.4v2.4zm0-4.8h2.4V4.8h-2.4v2.4z" />
    )
  },
  {
    name: 'TRON',
    symbol: 'TRX',
    color: '#FF0013',
    path: (
      <path d="M12 0L1.7 5.1l3.4 17.8L12 24l6.9-1.1 3.4-17.8L12 0zm0 19.9l-4.5-2.2 2.3-12.1L12 3.8l2.2 1.8 2.3 12.1-4.5 2.2z" />
    )
  }
]

function CryptoCarousel() {
  return (
    <div className="w-full py-6 overflow-hidden">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#00050B] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#00050B] to-transparent z-10" />
        
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...coins, ...coins, ...coins].map((coin, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/5 px-4 py-3 backdrop-blur-sm min-w-[140px] shadow-lg shadow-black/20"
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10"
                style={{ color: coin.color }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  {coin.path}
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-none">{coin.symbol}</span>
                <span className="text-[10px] text-white/50 font-medium">{coin.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default CryptoCarousel