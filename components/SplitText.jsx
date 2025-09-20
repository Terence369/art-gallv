"use client"

import React, { useEffect, useMemo, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SplitText = ({
  text,
  as: Tag = "h2",
  mode = "chars",
  containerClassName = "",
  textClassName = "",
  stagger = 0.02,
  duration = 0.8,
  ease = "power3.out",
  start = "top 80%",
  end = "bottom 50%",
  scrub = false,
}) => {
  const rootRef = useRef(null)

  const parts = useMemo(() => {
    const safe = typeof text === "string" ? text : ""
    if (mode === "words") {
      return safe.split(/(\s+)/).map((w, i) => (
        <span key={i} className={w.trim() ? "st-part inline-block" : "st-space inline-block"}>
          {w === " " ? "\u00A0" : w}
        </span>
      ))
    }
    return safe.split("").map((c, i) => (
      <span key={i} className="st-part inline-block">
        {c === " " ? "\u00A0" : c}
      </span>
    ))
  }, [text, mode])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const targets = el.querySelectorAll(".st-part")

    gsap.fromTo(
      targets,
      { opacity: 0, yPercent: 110, rotateX: -35 },
      {
        opacity: 1,
        yPercent: 0,
        rotateX: 0,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub,
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [stagger, duration, ease, start, end, scrub])

  return (
    <Tag ref={rootRef} className={`overflow-hidden ${containerClassName}`}>
      <span className={`inline-block leading-[1.3] ${textClassName}`}>{parts}</span>
    </Tag>
  )
}

export default SplitText
export { SplitText }
