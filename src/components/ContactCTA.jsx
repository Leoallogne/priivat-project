import { motion } from 'framer-motion'
import { Mail, MessageCircle, User } from 'lucide-react'
import { useState } from 'react'

function ContactCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

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
        <h2 className="text-lg font-semibold text-white/90 mb-4">Get Started Today</h2>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-2.5 text-sm text-white placeholder-white/40 backdrop-blur-md transition focus:border-electric/50 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-2.5 text-sm text-white placeholder-white/40 backdrop-blur-md transition focus:border-electric/50 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full rounded-xl border border-electric/50 bg-electric/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-electric/20 hover:border-electric/60 focus:outline-none focus:ring-2 focus:ring-electric/30"
            >
              Request Access
            </button>
          </form>
        ) : (
          <div className="text-center py-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-electric/50 bg-electric/10">
              <MessageCircle className="h-6 w-6 text-electric" />
            </div>
            <p className="mt-3 text-sm text-white/90">Request received! We'll contact you within 24 hours.</p>
          </div>
        )}
        
        <div className="mt-4 text-center">
          <p className="text-xs text-white/60">
            Already a member?{' '}
            <a
              href="https://t.me/OdfTrade"
              target="_blank"
              rel="noreferrer"
              className="text-electric hover:text-electric/80 transition"
            >
              Join VIP Signal
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default ContactCTA
