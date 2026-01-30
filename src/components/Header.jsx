import { useState } from 'react'

function Header() {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <header className="pt-4">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-red-500/25 blur-xl" />
          <div className="relative rounded-full p-1 animate-pulseGlow ring-2 ring-red-500/30">
            {imageError ? (
              <div className="h-28 w-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center">
                <div className="text-electric text-4xl font-bold">ODF</div>
              </div>
            ) : (
              <img
                src="/logo.jpeg"
                alt="odfTrade"
                className="h-28 w-28 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md object-cover"
                onError={handleImageError}
                onLoad={() => setImageError(false)}
              />
            )}
          </div>
        </div>

        <h1 className="mt-5 text-2xl font-semibold tracking-tight bg-linear-to-b from-white to-white/65 bg-clip-text text-transparent">
          OdfTrade
        </h1>

        

        
      </div>
    </header>
  )
}

export default Header
