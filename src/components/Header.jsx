import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function Header() {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <header className="pt-8 pb-4">
      <div className="flex flex-col items-center text-center">
        <motion.div 
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Animated Glow */}
          <motion.div 
            className="absolute -inset-8 rounded-full bg-gradient-to-tr from-red-600/30 via-red-500/10 to-transparent blur-2xl"
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
            }}
            transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear" 
            }}
          />
          
          {/* Logo Container */}
          <motion.div 
            className="relative rounded-[2rem] p-1.5 ring-1 ring-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl shadow-2xl"
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
             {/* Shine Effect */}
             <motion.div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] skew-x-12 z-20 pointer-events-none"
                animate={{ translateX: ['200%'] }}
                transition={{ repeat: Infinity, duration: 4, repeatDelay: 3, ease: "easeInOut" }}
             />

            {imageError ? (
              <div className="h-32 w-32 rounded-[1.7rem] bg-black/40 flex items-center justify-center border border-white/5">
                <div className="text-red-500 text-4xl font-bold tracking-tighter">ODF</div>
              </div>
            ) : (
              <img
                src="/logo.jpeg"
                alt="odfTrade"
                className="h-32 w-32 rounded-[1.7rem] object-cover shadow-inner relative z-10"
                onError={handleImageError}
                onLoad={() => setImageError(false)}
              />
            )}
            
            {/* Border Gradient Overlay */}
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 z-30" />
          </motion.div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 relative"
        >
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                OdfTrade
              </span>
            </h1>
            <motion.div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full opacity-80"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 64, opacity: 0.8 }}
                transition={{ delay: 0.5, duration: 1, type: "spring" }}
            />
        </motion.div>
      </div>
    </header>
  )
}

export default Header
