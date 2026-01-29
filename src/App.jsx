import { motion } from 'framer-motion'
import ContactCTA from './components/ContactCTA.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Links from './components/Links.jsx'
import MarketStats from './components/MarketStats.jsx'
import Philosophy from './components/Philosophy.jsx'
import Testimonials from './components/Testimonials.jsx'

function App() {
  return (
    <div className="min-h-dvh w-full bg-ink text-white">
      <div className="bg-live animate-gradient">
        <div className="min-h-dvh w-full px-4 py-10">
          <div className="mx-auto w-full max-w-120">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.14,
                  },
                },
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <Header />
              <Links />
              <Philosophy />
              <MarketStats />
              <Testimonials />
              <ContactCTA />
              <Footer />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
