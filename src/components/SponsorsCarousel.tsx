import React from 'react'
import './SponsorsCarousel.css'

type Props = {
  title?: string
  speedMs?: number
}

const SponsorsCarousel: React.FC<Props> = ({ title = 'OUR SPONSORS', speedMs = 20000 }) => {
  const modules = import.meta.glob('../logo/*.{png,jpg,jpeg,svg,webp}', { eager: true }) as Record<string, { default: string }>
  const images = Object.values(modules).map((m) => m.default)

  if (images.length === 0) return null

  const scrollingList = [...images, ...images]

  return (
    <section className="sponsors-section">
      <h2 className="section-title reveal">{title}</h2>
      <div className="sponsors-marquee">
        <div className="sponsors-track" style={{ animationDuration: `${speedMs}ms` }}>
          {scrollingList.map((src, idx) => (
            <div className="sponsor-item" key={idx}>
              <img src={src} alt="Sponsor logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SponsorsCarousel
