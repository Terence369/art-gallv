"use client"
import Image from "next/image"
import React, { useState } from "react"
import { cn } from "@/lib/utils"

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 sm:h-72 md:h-80 lg:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      )}
    >
      <Image src={card.src || "/placeholder.svg"} alt={card.title} fill className="object-cover absolute inset-0" />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-4 sm:py-6 md:py-8 px-3 sm:px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="text-white w-full">
          <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 leading-tight">
            {card.title}
          </div>
          {card.year && (
            <div className="text-xs sm:text-sm md:text-base text-neutral-300 mb-1 sm:mb-2">
              {card.year} • {card.medium}
            </div>
          )}
          {card.dimensions && <div className="text-xs md:text-sm text-neutral-400 mb-2 sm:mb-3">{card.dimensions}</div>}
          {card.description && (
            <div className="text-xs sm:text-sm text-neutral-200 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-3">
              {card.description}
            </div>
          )}
          {card.price && (
            <div className="text-xs sm:text-sm font-semibold text-neutral-100 bg-white/10 backdrop-blur-sm rounded px-2 py-1 inline-block">
              {card.price}
            </div>
          )}
        </div>
      </div>
    </div>
  ),
)

Card.displayName = "Card"

type CardType = {
  title: string
  src: string
  year?: string
  medium?: string
  dimensions?: string
  description?: string
  price?: string
}

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  )
}
