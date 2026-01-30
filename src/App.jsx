import { useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { initGA, trackPageView } from './utils/analytics.js'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Links from './components/Links.jsx'
import MarketStats from './components/MarketStats.jsx'
import Philosophy from './components/Philosophy.jsx'
import ShareButton from './components/ShareButton.jsx'
import Ticker from './components/Ticker.jsx'
import SignalPreview from './components/SignalPreview.jsx'
import BackgroundEffect from './components/BackgroundEffect.jsx'
import { useSwipeGestures } from './hooks/useSwipeGestures.js'
import { useNotifications } from './hooks/useNotifications.js'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

function App() {
  const swipeRef = useSwipeGestures(
    () => console.log('swiped left'),
    () => console.log('swiped right')
  )
  const { sendSignalNotification } = useNotifications()

  useEffect(() => {
    initGA()
    trackPageView()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      sendSignalNotification({
        pair: 'EUR/USD',
        type: 'BUY',
        entry: '1.0842'
      })
    }, 60000)

    return () => clearInterval(interval)
  }, [sendSignalNotification])

  return (
    <div className="min-h-dvh w-full bg-ink text-white relative">
      <BackgroundEffect />
      <div className="bg-live animate-gradient relative z-10">
        <Ticker />
        <div className="min-h-dvh w-full px-4 py-6">
          <div className="mx-auto w-full max-w-120">
            <motion.div
              ref={swipeRef}
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Header />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Philosophy />
              </motion.div>

              <motion.div variants={itemVariants}>
                <SignalPreview />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Links />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <MarketStats />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Footer />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <ShareButton />
    </div>
  )
}

export default App
