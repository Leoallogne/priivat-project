import { Send, CheckCheck, MoreVertical } from 'lucide-react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function SignalPreview() {
  return (
    <section className="mt-8 px-2">
      <motion.div 
        className="max-w-sm mx-auto bg-[#1c2436] rounded-2xl border border-white/5 overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Telegram Header */}
        <div className="bg-[#242f42] p-3 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-electric to-purple-600 flex items-center justify-center text-white font-bold text-xs">
              ODF
            </div>
            <div>
              <div className="text-sm font-semibold text-white">odfTrade VIP Signals</div>
              <div className="text-[10px] text-white/50">12,450 subscribers</div>
            </div>
          </div>
          <MoreVertical className="w-4 h-4 text-white/50" />
        </div>

        {/* Message Area */}
        <div className="p-4 bg-[url('https://w.wallhaven.cc/full/vg/wallhaven-vg8k15.jpg')] bg-cover relative">
          <div className="absolute inset-0 bg-[#0e1621]/95"></div>
          
          <div className="relative space-y-4">
            {/* Date Badge */}
            <div className="flex justify-center">
              <span className="bg-[#000000]/40 text-white/60 text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
                Today
              </span>
            </div>

            {/* Signal Bubble */}
            <motion.div 
              className="bg-[#2b5278] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none p-3 max-w-[85%] shadow-sm relative ml-0"
              initial={{ scale: 0.9, opacity: 0, x: -20 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#64b5f6] font-bold text-sm">GOLD (XAUUSD) BUY NOW</span>
                <span className="bg-green-500/20 text-green-400 text-[10px] px-1.5 rounded font-medium">Active</span>
              </div>
              
              <div className="text-white/90 text-sm space-y-1 font-mono">
                <div className="flex justify-between">
                  <span>Entry:</span>
                  <span className="font-bold">2341.50 - 2343.00</span>
                </div>
                <div className="flex justify-between text-red-300">
                  <span>SL:</span>
                  <span>2335.00</span>
                </div>
                <div className="flex justify-between text-green-300">
                  <span>TP1:</span>
                  <span>2346.00</span>
                </div>
                <div className="flex justify-between text-green-300">
                  <span>TP2:</span>
                  <span>2352.00</span>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-end gap-1">
                <span className="text-[10px] text-white/50">14:32</span>
                <CheckCheck className="w-3 h-3 text-electric" />
              </div>
            </motion.div>

             {/* TP Hit Bubble */}
             <motion.div 
              className="bg-[#2b5278] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none p-3 max-w-[85%] shadow-sm relative ml-0"
              initial={{ scale: 0.9, opacity: 0, x: -20 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-white/90 text-sm">
                <span className="text-[#64b5f6] font-bold">TP1 Hit! ✅</span> +45 Pips Profit secured. Move SL to Breakeven.
              </div>
              <div className="mt-1 flex items-center justify-end gap-1">
                <span className="text-[10px] text-white/50">14:58</span>
                <CheckCheck className="w-3 h-3 text-electric" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Join Button Mockup */}
        <div className="bg-[#242f42] p-3 text-center border-t border-white/5">
          <div className="text-xs text-electric font-medium uppercase tracking-wider">Join Channel</div>
        </div>
      </motion.div>
    </section>
  )
}

export default SignalPreview
