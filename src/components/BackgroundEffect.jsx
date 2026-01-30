import { useEffect, useRef } from 'react'

function BackgroundEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resize)
    resize()

    // Define particle class outside or use simple objects
    const createParticle = () => {
      const particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        
        reset: function() {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.vx = (Math.random() - 0.5) * 0.5
          this.vy = (Math.random() - 0.5) * 0.5
          this.size = Math.random() * 2 + 1
        },

        update: function() {
          this.x += this.vx
          this.y += this.vy

          // Wrap around screen
          if (this.x < 0) this.x = canvas.width
          if (this.x > canvas.width) this.x = 0
          if (this.y < 0) this.y = canvas.height
          if (this.y > canvas.height) this.y = 0
        },

        draw: function() {
          // Calculate color based on Y position (0 = top = red, height = bottom = blue)
          const ratio = this.y / canvas.height
          // Interpolate between Red (255, 50, 50) and Blue (0, 122, 255)
          const r = Math.round(255 * (1 - ratio))
          const g = Math.round(50 * (1 - ratio) + 122 * ratio)
          const b = Math.round(50 * (1 - ratio) + 255 * ratio)
          
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.3 + Math.random() * 0.2})`
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      // Initial randomization of Y to fill screen
      particle.y = Math.random() * canvas.height
      return particle
    }

    const particles = []
    const particleCount = 40

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((particle, i) => {
        particle.update()
        particle.draw()

        // Draw connections with gradient
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            
            // Create gradient for line
            const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
            
            // Color for start point
            const ratio1 = particles[i].y / canvas.height
            const r1 = Math.round(255 * (1 - ratio1))
            const g1 = Math.round(50 * (1 - ratio1) + 122 * ratio1)
            const b1 = Math.round(50 * (1 - ratio1) + 255 * ratio1)
            
            // Color for end point
            const ratio2 = particles[j].y / canvas.height
            const r2 = Math.round(255 * (1 - ratio2))
            const g2 = Math.round(50 * (1 - ratio2) + 122 * ratio2)
            const b2 = Math.round(50 * (1 - ratio2) + 255 * ratio2)

            const opacity = 0.15 - distance / 1000

            grad.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, ${opacity})`)
            grad.addColorStop(1, `rgba(${r2}, ${g2}, ${b2}, ${opacity})`)

            ctx.strokeStyle = grad
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-60"
    />
  )
}

export default BackgroundEffect
