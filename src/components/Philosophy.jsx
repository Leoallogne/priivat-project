import { motion } from 'framer-motion'

function Philosophy() {
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
      <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur-md">
        <p className="font-serif italic tracking-wide text-white/85">
          Without Data, You’re Just Another Person with an Opinion.
        </p>
        <p className="mt-3 font-sans text-sm font-bold tracking-wide text-electric">
          Berbasis Order Flow &amp; Diperkuat Risk Management Matang.
        </p>
      </div>
    </motion.section>
  )
}

export default Philosophy
