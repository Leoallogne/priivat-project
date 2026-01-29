import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 'client1',
    name: 'Alex Chen',
    role: 'Day Trader',
    content: 'Signal accuracy is insane. Risk management guidance saved my portfolio during the last correction.',
    rating: 5,
  },
  {
    id: 'client2',
    name: 'Sarah Williams',
    role: 'Swing Trader',
    content: 'Order flow analysis here is next level. Finally found a team that actually delivers consistent results.',
    rating: 5,
  },
  {
    id: 'client3',
    name: 'Marcus Johnson',
    role: 'Position Trader',
    content: 'VIP signals changed the game. Clear entries, exits, and position sizing—no more guesswork.',
    rating: 5,
  },
]

function TestimonialCard({ item, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.08,
          },
        },
      }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(0, 122, 255, 0.25)' }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-[border-color,transform] duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5">
          <Quote className="h-4 w-4 text-electric" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-white/85 leading-relaxed">{item.content}</p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-white">{item.name}</div>
              <div className="text-xs text-white/60">{item.role}</div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-electric text-electric" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Testimonials() {
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
        <h2 className="text-lg font-semibold text-white/90 mb-4">Client Success Stories</h2>
        <div className="grid grid-cols-1 gap-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonials
