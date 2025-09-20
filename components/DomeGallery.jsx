"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"

const clamp = (n, min, max) => Math.max(min, Math.min(max, n))

const DomeGallery = ({
  items = [],
  radius = 520,
  tilt = -12,
  friction = 0.92,
  dragSpeed = 0.35,
  autoRotate = true,
  autoSpeed = 0.04,
  className = "",
}) => {
  const stageRef = useRef(null)
  const wrapperRef = useRef(null)
  const [isDown, setIsDown] = useState(false)
  const posRef = useRef({ x: 0, y: 0, startX: 0, startRot: 0 })
  const rotRef = useRef(0)
  const velRef = useRef(0)

  const normalized = useMemo(() => items.filter(Boolean), [items])

  useEffect(() => {
    const raf = () => {
      if (!isDown) {
        if (autoRotate) velRef.current += autoSpeed
        rotRef.current += velRef.current
        velRef.current *= friction
      }
      if (stageRef.current) {
        stageRef.current.style.transform = `translateZ(-${radius}px) rotateX(${tilt}deg) rotateY(${rotRef.current}deg)`
      }
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    return () => cancelAnimationFrame(id)
  }, [isDown, autoRotate, autoSpeed, radius, tilt, friction])

  useEffect(() => {
    const onDown = (e) => {
      setIsDown(true)
      const x = e.touches ? e.touches[0].clientX : e.clientX
      posRef.current.startX = x
      posRef.current.startRot = rotRef.current
      velRef.current = 0
    }
    const onMove = (e) => {
      if (!isDown) return
      const x = e.touches ? e.touches[0].clientX : e.clientX
      const dx = x - posRef.current.startX
      const delta = dx * dragSpeed * 0.2
      rotRef.current = posRef.current.startRot + delta
      velRef.current = delta - (posRef.current.lastDelta || 0)
      posRef.current.lastDelta = delta
    }
    const onUp = () => {
      setIsDown(false)
      posRef.current.lastDelta = 0
    }

    const wrap = wrapperRef.current
    if (!wrap) return

    wrap.addEventListener("mousedown", onDown)
    wrap.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)

    wrap.addEventListener("touchstart", onDown, { passive: true })
    wrap.addEventListener("touchmove", onMove, { passive: false })
    window.addEventListener("touchend", onUp)

    return () => {
      wrap.removeEventListener("mousedown", onDown)
      wrap.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)

      wrap.removeEventListener("touchstart", onDown)
      wrap.removeEventListener("touchmove", onMove)
      window.removeEventListener("touchend", onUp)
    }
  }, [isDown, dragSpeed])

  const count = normalized.length
  const angleStep = 360 / (count || 1)

  return (
    <div ref={wrapperRef} className={`relative w-full h-full overflow-hidden ${className}`} aria-roledescription="interactive 3D gallery">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/10" aria-hidden="true" />
      <div
        className="dg-perspective absolute inset-0"
        style={{ perspective: "1600px", transformStyle: "preserve-3d" }}
      >
        <div
          ref={stageRef}
          className="dg-stage absolute inset-0 will-change-transform"
          style={{ transform: `translateZ(-${radius}px) rotateX(${tilt}deg) rotateY(0deg)`, transformStyle: "preserve-3d" }}
        >
          {normalized.map((src, i) => {
            const ry = i * angleStep
            const z = radius
            return (
              <figure
                key={src + i}
                className="dg-card absolute top-1/2 left-1/2 w-[min(48vw,420px)] h-[min(30vw,280px)] -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden shadow-2xl bg-neutral-100 dark:bg-neutral-900"
                style={{ transform: `rotateY(${ry}deg) translateZ(${z}px)` }}
              >
                <img src={src} alt="Gallery item" className="w-full h-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-sm text-white/90 bg-gradient-to-t from-black/60 to-transparent">
                  &nbsp;
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center select-none">
        <p className="text-xs text-foreground/60 bg-background/70 backdrop-blur px-3 py-1 rounded-full border border-border">
          Drag to rotate
        </p>
      </div>
    </div>
  )
}

export default DomeGallery
export { DomeGallery }
