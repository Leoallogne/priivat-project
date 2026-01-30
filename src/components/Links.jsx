import { ExternalLink } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { links } from '../data/content'
import { trackEvent } from '../utils/analytics'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function LinkCard({ item }) {
  const Icon = item.icon

  const base =
    'group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-[filter,background-color,border-color,transform] duration-300'

  if (item.variant === 'vip') {
    return (
      <motion.a
        variants={itemVariants}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent('Link', 'Click VIP', item.title)}
        className={`${base} shimmer-overlay hover:brightness-110 ring-1 ring-electric/35 shadow-[0_0_0_1px_rgba(0,122,255,0.22),0_0_40px_rgba(0,122,255,0.18)] hover:shadow-[0_0_60px_rgba(0,122,255,0.28)] transition-transform hover:scale-[1.03]`}
        aria-label={`${item.title} - VIP Access`}
      >
        <div className="absolute inset-0 bg-linear-to-b from-electric/15 via-transparent to-transparent" />
        <div className="relative flex items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
              <Icon className="h-5 w-5 text-electric" />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold tracking-wide text-white">
                {item.title}
              </div>
              <div className="mt-1 text-xs text-white/60">Telegram access • Limited</div>
            </div>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
            <ExternalLink className="h-4 w-4 text-white/70 transition group-hover:text-white" />
          </div>
        </div>
      </motion.a>
    )
  }

  return (
    <motion.a
      variants={itemVariants}
      href={item.href}
      target={item.href === '#' ? undefined : '_blank'}
      rel={item.href === '#' ? undefined : 'noreferrer'}
      onClick={() => trackEvent('Link', 'Click Standard', item.title)}
      className={`${base} hover:brightness-110 hover:bg-white/7 hover:border-white/15 transition-transform hover:scale-1.02`}
      aria-label={item.title}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
            <Icon className="h-5 w-5 text-white/75" />
          </div>
          <div className="text-left text-sm font-medium tracking-wide text-white/90">
            {item.title}
          </div>
        </div>
        <ExternalLink className="h-4 w-4 text-white/50 transition group-hover:text-white/80" />
      </div>
    </motion.a>
  )
}

function Links() {
  return (
    <section className="mt-7">
      <motion.div 
        className="flex flex-col gap-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {links.map((link) => (
          <LinkCard key={link.id} item={link} />
        ))}
      </motion.div>
    </section>
  )
}

export default Links
