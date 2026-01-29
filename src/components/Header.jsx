import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.header
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className="pt-4"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-electric/25 blur-xl" />
          <div className="relative rounded-full p-1 animate-pulseGlow">
            <img
              src="/logo.jpeg"
              alt="Ronss Traders Syndicate"
              className="h-28 w-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md object-cover"
            />
          </div>
        </div>

        <h1 className="mt-5 text-2xl font-semibold tracking-tight bg-linear-to-b from-white to-white/65 bg-clip-text text-transparent">
          Ronss Traders Syndicate
        </h1>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_14px_rgba(0,122,255,0.75)]" />
          <span>Active Market Analyst</span>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
