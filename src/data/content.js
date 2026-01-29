import { ExternalLink, Instagram, Send, Youtube } from 'lucide-react'

export const links = [
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

export const testimonials = [
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

export const recentWins = [
  {
    id: 'win1',
    pair: 'EUR/USD',
    type: 'BUY',
    entry: 1.0842,
    exit: 1.0898,
    profit: '+45.8 pips',
    profitPercent: '+2.3%',
    time: '12 min ago',
    status: 'closed'
  },
  {
    id: 'win2',
    pair: 'GBP/JPY',
    type: 'SELL',
    entry: 195.67,
    exit: 195.12,
    profit: '+55.0 pips',
    profitPercent: '+3.1%',
    time: '28 min ago',
    status: 'closed'
  },
  {
    id: 'win3',
    pair: 'XAU/USD',
    type: 'BUY',
    entry: 2342.15,
    exit: 2351.80,
    profit: '+96.5 pips',
    profitPercent: '+4.1%',
    time: '45 min ago',
    status: 'closed'
  },
  {
    id: 'win4',
    pair: 'USD/JPY',
    type: 'SELL',
    entry: 157.23,
    exit: 156.88,
    profit: '+35.0 pips',
    profitPercent: '+2.2%',
    time: '1 hour ago',
    status: 'closed'
  },
  {
    id: 'win5',
    pair: 'BTC/USD',
    type: 'BUY',
    entry: 67842,
    exit: 68235,
    profit: '+393 pts',
    profitPercent: '+5.8%',
    time: '2 hours ago',
    status: 'closed'
  }
]
