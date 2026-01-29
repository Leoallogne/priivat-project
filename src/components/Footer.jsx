import { Instagram, Send, Youtube } from 'lucide-react'

function Footer() {
  return (
    <footer
      className="mt-8 pb-8"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <a
            href="https://t.me/OdfTrade"
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition hover:text-white hover:border-white/15"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition hover:text-white hover:border-white/15"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition hover:text-white hover:border-white/15"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <div className="text-xs text-white/45">© 2026 Ronss Traders Syndicate</div>
      </div>
    </footer>
  )
}

export default Footer
