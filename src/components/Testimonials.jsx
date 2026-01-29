import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/content'

function TestimonialCard({ item }) {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-[border-color,transform] duration-300 hover:scale-1.02 hover:border-electric/25"
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
    </div>
  )
}

function Testimonials() {
  return (
    <section
      className="mt-8"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
        <h2 className="text-lg font-semibold text-white/90 mb-4">Client Success Stories</h2>
        <div className="grid grid-cols-1 gap-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
