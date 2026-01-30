import { Share2, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { trackEvent } from '../utils/analytics'

function ShareButton() {
  const [copied, setCopied] = useState(false)
  const shareUrl = window.location.href
  const shareText = "Join odfTrade - Premium Trading Signals with 87%+ Win Rate"

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'odfTrade',
          text: shareText,
          url: shareUrl
        })
      } catch (error) {
        if (error.name !== 'AbortError') {
          copyToClipboard()
        }
      }
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = async () => {
    trackEvent('Share', 'Copy Link', 'Clipboard')
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const shareToSocial = (platform) => {
    trackEvent('Share', 'Click Social', platform)
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
    }
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400')
    }
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative group">
        <button
          onClick={handleShare}
          className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-electric/20 backdrop-blur-md shadow-lg transition hover:bg-electric/30"
          aria-label="Share this page"
        >
          {copied ? (
            <Check className="h-6 w-6 text-green-400" />
          ) : (
            <Share2 className="h-6 w-6 text-electric" />
          )}
        </button>

        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
          <button
            onClick={() => shareToSocial('telegram')}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
            aria-label="Share on Telegram"
          >
            Telegram
          </button>
          <button
            onClick={() => shareToSocial('twitter')}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
            aria-label="Share on Twitter"
          >
            Twitter
          </button>
          <button
            onClick={() => shareToSocial('facebook')}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
            aria-label="Share on Facebook"
          >
            Facebook
          </button>
          <button
            onClick={() => shareToSocial('linkedin')}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
            aria-label="Share on LinkedIn"
          >
            LinkedIn
          </button>
          <div className="border-t border-white/10 pt-2">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white/80 hover:bg-white/10 transition"
              aria-label="Copy link to clipboard"
            >
              <Copy className="h-3 w-3" />
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareButton
