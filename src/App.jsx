import { useEffect } from 'react'
import { initGA, trackPageView } from './utils/analytics.js'
import ContactCTA from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Links from './components/Links.jsx'
import MarketStats from './components/MarketStats.jsx'
import Philosophy from './components/Philosophy.jsx'
import ShareButton from './components/ShareButton.jsx'
import { useSwipeGestures } from './hooks/useSwipeGestures.js'
import { useNotifications } from './hooks/useNotifications.js'

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
    <div className="min-h-dvh w-full bg-ink text-white">
      <div className="bg-live animate-gradient">
        <div className="min-h-dvh w-full px-4 py-6">
          <div className="mx-auto w-full max-w-120">
            <div
              ref={swipeRef}
              className="space-y-6"
            >
              <Header />
              
              <Philosophy />
              
              <Links />
              
              <MarketStats />
              
              <ContactCTA />
              
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <ShareButton />
    </div>
  )
}

export default App
