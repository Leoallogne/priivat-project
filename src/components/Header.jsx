import { TrendingUp, Users, Send } from 'lucide-react'
import { useState, useEffect } from 'react'

function Header() {
  const [signalsToday, setSignalsToday] = useState(47)
  const [activeMembers, setActiveMembers] = useState(1247)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const signalInterval = setInterval(() => {
      setSignalsToday(prev => prev + Math.floor(Math.random() * 3))
    }, 45000)

    const memberInterval = setInterval(() => {
      setActiveMembers(prev => prev + Math.floor(Math.random() * 2))
    }, 120000)

    return () => {
      clearInterval(signalInterval)
      clearInterval(memberInterval)
    }
  }, [])

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <header className="pt-4">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-electric/25 blur-xl" />
          <div className="relative rounded-full p-1 animate-pulseGlow">
            {imageError ? (
              <div className="h-28 w-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center">
                <div className="text-electric text-4xl font-bold">RT</div>
              </div>
            ) : (
              <img
                src="/logo.jpeg"
                alt="Ronss Traders Syndicate"
                className="h-28 w-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md object-cover"
                onError={handleImageError}
                onLoad={() => setImageError(false)}
              />
            )}
          </div>
        </div>

        <h1 className="mt-5 text-2xl font-semibold tracking-tight bg-linear-to-b from-white to-white/65 bg-clip-text text-transparent">
          Ronss Traders Syndicate
        </h1>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_14px_rgba(0,122,255,0.75)]" />
          <span>Active Market Analyst</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 text-center">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
            <div className="flex items-center justify-center gap-1">
              <Send className="h-3 w-3 text-electric" />
              <span className="text-lg font-bold text-white">{signalsToday}</span>
            </div>
            <div className="text-xs text-white/60">Signals Today</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
            <div className="flex items-center justify-center gap-1">
              <Users className="h-3 w-3 text-electric" />
              <span className="text-lg font-bold text-white">{activeMembers.toLocaleString()}</span>
            </div>
            <div className="text-xs text-white/60">Active Members</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
