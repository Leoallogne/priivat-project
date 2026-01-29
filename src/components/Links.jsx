import { ExternalLink, Instagram, Send, Youtube } from 'lucide-react'

const links = [
  {
    id: 'vip',
    title: '🚀 JOIN VIP SIGNAL FREE',
    href: 'https://t.me/OdfTrade',
    variant: 'vip',
    icon: Send,
  },
  {
    id: 'gc',
    title: 'Grub Clipper & Daget',
    href: '#',
    variant: 'standard',
    icon: ExternalLink,
  },
  {
    id: 'yt',
    title: 'Ronss Syndicate YT',
    href: '#',
    variant: 'standard',
    icon: Youtube,
  },
  {
    id: 'ig-baron',
    title: 'Instagram Baron',
    href: '#',
    variant: 'standard',
    icon: Instagram,
  },
  {
    id: 'ig-dapeng',
    title: 'Instagram Dapeng',
    href: '#',
    variant: 'standard',
    icon: Instagram,
  },
]

function LinkCard({ item }) {
  const Icon = item.icon

  const base =
    'group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-[filter,background-color,border-color,transform] duration-300'

  if (item.variant === 'vip') {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`${base} shimmer-overlay hover:brightness-110 ring-1 ring-electric/35 shadow-[0_0_0_1px_rgba(0,122,255,0.22),0_0_40px_rgba(0,122,255,0.18)] transition-transform hover:scale-1.02`}
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
      </a>
    )
  }

  return (
    <a
      href={item.href}
      target={item.href === '#' ? undefined : '_blank'}
      rel={item.href === '#' ? undefined : 'noreferrer'}
      className={`${base} hover:brightness-110 hover:bg-white/7 hover:border-white/15 transition-transform hover:scale-1.02`}
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
    </a>
  )
}

function Links() {
  return (
    <section
      className="mt-7"
    >
      <div className="flex flex-col gap-3">
        {links.map((item) => (
          <LinkCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Links
