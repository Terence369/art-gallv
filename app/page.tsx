"use client"

import { StaggeredMenu } from "@/components/staggered-menu"
import { ScrollFloat } from "@/components/scroll-float"
import { FocusCards } from "@/components/ui/focus-cards"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import FlyingPosters from "@/components/flying-posters"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menuItems = [
  { label: "Gallery", link: "#gallery", ariaLabel: "View artwork gallery" },
  { label: "About", link: "#about", ariaLabel: "Learn about the artist" },
  { label: "Contact", link: "#contact", ariaLabel: "Contact the artist" },
]

const socialItems = [
  { label: "Instagram", link: "#" },
  { label: "Facebook", link: "#" },
]

const artworks = [
  {
    title: "Erotic Nature V",
    src: "/images/erotic-nature-v.png",
    year: "2023",
    medium: "Oil on Canvas",
    dimensions: '36" × 48"',
    description:
      "The culmination of the Erotic Nature series, this piece explores the sensual curves and intimate textures found in botanical forms. The interplay of light and shadow creates a dialogue between the observer and nature's most private moments.",
    price: "Available on Request",
  },
  {
    title: "Erotic Nature IV",
    src: "/images/erotic-nature-iv.png",
    year: "2023",
    medium: "Oil on Canvas",
    dimensions: '30" × 40"',
    description:
      "A meditation on the feminine aspects of nature, where organic forms dance between abstraction and representation. The warm palette evokes the golden hour when nature reveals its most vulnerable beauty.",
    price: "Available on Request",
  },
  {
    title: "Erotic Nature III",
    src: "/images/erotic-nature-iii.png",
    year: "2022",
    medium: "Oil on Canvas",
    dimensions: '24" × 36"',
    description:
      "Inspired by the delicate petals of orchids, this painting captures the moment of blooming as a metaphor for awakening consciousness. The vibrant yellows and deep shadows create an intimate viewing experience.",
    price: "Available on Request",
  },
  {
    title: "Erotic Nature",
    src: "/images/erotic-nature.png",
    year: "2022",
    medium: "Oil on Canvas",
    dimensions: '32" × 44"',
    description:
      "The genesis of the series, exploring the primal connection between human sensuality and natural forms. Bold brushstrokes and earthy tones invite contemplation of our deepest relationship with the natural world.",
    price: "Available on Request",
  },
  {
    title: "Erotic Nature II",
    src: "/images/erotic-nature-ii.png",
    year: "2022",
    medium: "Oil on Canvas",
    dimensions: '28" × 38"',
    description:
      "A study in contrasts, where soft organic curves meet bold geometric shadows. This piece examines the tension between civilization and wild nature, finding beauty in their intersection.",
    price: "Available on Request",
  },
  {
    title: "Urban Wilderness",
    src: "/images/urban-dogs.png",
    year: "2021",
    medium: "Acrylic on Canvas",
    dimensions: '40" × 52"',
    description:
      "Street dogs navigate the concrete jungle with ancient wisdom. This powerful composition speaks to resilience, adaptation, and the wild spirit that persists even in urban environments.",
    price: "Available on Request",
  },
  {
    title: "The Waste Land",
    src: "/images/wasteland.png",
    year: "2021",
    medium: "Mixed Media on Canvas",
    dimensions: '48" × 60"',
    description:
      "Inspired by T.S. Eliot's modernist masterpiece, this haunting landscape reflects on environmental degradation and spiritual emptiness. The muted palette and fragmented forms echo themes of loss and renewal.",
    price: "Available on Request",
  },
]

const flyingPosterItems = [
  "/images/erotic-nature-v.png",
  "/images/erotic-nature-iv.png",
  "/images/erotic-nature-iii.png",
  "/images/erotic-nature.png",
  "/images/erotic-nature-ii.png",
  "/images/urban-dogs.png",
  "/images/wasteland.png",
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <StaggeredMenu
        items={menuItems}
        socialItems={socialItems}
        colors={["#2563eb", "#f1f5f9", "#ffffff"]}
        accentColor="#2563eb"
        logoUrl="/jay-karun-gallery-logo.jpg"
        menuButtonColor="#1a1a1a"
        openMenuButtonColor="#1a1a1a"
      />

      <SmoothScrollHero
        scrollHeight={2000}
        desktopImage="/images/cityscape.jpg"
        mobileImage="/images/dancer-sold.webp"
        initialClipPercentage={20}
        finalClipPercentage={80}
      />

      <section className="relative -mt-screen h-screen flex items-center justify-center z-20 px-4">
        <div className="text-center text-white px-6 sm:px-8 md:px-12 bg-black/60 backdrop-blur-sm rounded-2xl py-8 sm:py-10 md:py-12 max-w-4xl mx-auto">
          <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 sm:mb-6 text-balance leading-tight">
            Jay Karun
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Impressionistic paintings exploring nature and human consciousness
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-3 text-base sm:text-lg"
          >
            Explore Gallery
          </Button>
        </div>
      </section>

      <section className="h-screen relative bg-background overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
          <div className="text-center text-foreground max-w-4xl mx-auto">
            <ScrollFloat containerClassName="mb-6 sm:mb-8">
              <span className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance leading-tight">
                Immersive Gallery
              </span>
            </ScrollFloat>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-4">
              Experience Jay Karun's artwork in a dynamic 3D space. Scroll to navigate through the floating gallery.
            </p>
          </div>
        </div>
        <FlyingPosters
          items={flyingPosterItems}
          planeWidth={400}
          planeHeight={400}
          distortion={4}
          scrollEase={0.08}
          cameraFov={50}
          cameraZ={25}
          className="absolute inset-0"
        />
      </section>

      <section id="gallery" className="py-16 sm:py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollFloat containerClassName="text-center mb-12 sm:mb-16">
            <span className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-card-foreground text-balance leading-tight">
              Featured Collection
            </span>
          </ScrollFloat>

          <div className="mb-8 sm:mb-12 text-center">
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed px-4">
              Each painting in this collection represents Jay Karun's deep exploration of nature's sensual beauty and
              the mystical connection between organic forms and human consciousness. The "Erotic Nature" series
              celebrates the intimate dialogue between observer and the natural world.
            </p>
          </div>

          <FocusCards cards={artworks} />
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollFloat containerClassName="text-center mb-12 sm:mb-16">
            <span className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-foreground text-balance leading-tight">
              About the Artist
            </span>
          </ScrollFloat>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="bg-card border-border">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="font-sans font-bold text-xl sm:text-2xl mb-4 sm:mb-6 text-card-foreground text-balance leading-tight">
                    "Each new day, each new experience inspires me"
                  </h3>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                    <p>
                      The painterly instinct in Jay showed up early in life. After graduating from Fine Arts College,
                      Thrippunithura, he took to painting avidly and with passion. Thrippunithura, the land of temples,
                      arts, and royal heritage, nourished the painter in him well.
                    </p>
                    <p>
                      Art is a conversation for Jay Karun. The canvas is where his mind makes its most eloquent remarks.
                      His observations on the canvas are a window to his forthright and thoughtful mind, reflecting his
                      profound observation, passion and compassion for nature and human predicament.
                    </p>
                    <p>
                      Drawing inspiration from nature's most commonplace sights, Jay Karun weaves profound stories on
                      his canvas. His style has a strong leaning towards impressionism, with depth of colors attributed
                      to his enthusiastic perspective towards life and art.
                    </p>
                    <p>
                      Nature has been the biggest inspiration and medium for his work at all times. Elements from nature
                      often form his language, and when a thought strikes him, he lets it settle for a day and then
                      gives it form on his canvas.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full order-1 lg:order-2">
              <img
                src="/images/erotic-nature-iv.png"
                alt="Jay Karun's artistic vision - Erotic Nature IV"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollFloat containerClassName="mb-8 sm:mb-12">
            <span className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-foreground text-balance leading-tight">
              Artistic Philosophy
            </span>
          </ScrollFloat>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-5 sm:p-6">
                <h4 className="font-sans font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-card-foreground text-balance leading-tight">
                  Nature as Language
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Elements from nature form the vocabulary of Jay's artistic expression, translating the profound beauty
                  of organic forms into visual poetry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-5 sm:p-6">
                <h4 className="font-sans font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-card-foreground text-balance leading-tight">
                  Impressionistic Vision
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  His work captures not just the visual appearance but the emotional essence of subjects, creating depth
                  through color and passionate brushwork.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border sm:col-span-2 lg:col-span-1">
              <CardContent className="p-5 sm:p-6">
                <h4 className="font-sans font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-card-foreground text-balance leading-tight">
                  Human Connection
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Each painting seeks to connect with humanity at a deeper, emotional and psychic level, exploring the
                  collective consciousness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <ScrollFloat containerClassName="text-center mb-12 sm:mb-16">
            <span className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-foreground text-balance leading-tight">
              Get in Touch
            </span>
          </ScrollFloat>

          <Card className="bg-card border-border">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 sm:mb-8 text-center">
                <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
                  Interested in commissioning a piece or learning more about Jay Karun's artistic journey? I'd love to
                  hear from you and discuss how art can create meaningful connections.
                </p>
              </div>

              <form className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="commission">Commission Inquiry</option>
                    <option value="purchase">Purchase Artwork</option>
                    <option value="exhibition">Exhibition Opportunity</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm sm:text-base"
                    placeholder="Tell me about your interest in my artwork, commission ideas, or any questions you have..."
                  />
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card py-10 sm:py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-sans font-black text-xl sm:text-2xl mb-3 sm:mb-4 text-card-foreground">Jay Karun</h3>
          <p className="text-muted-foreground mb-4 sm:mb-6 text-pretty text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Impressionistic artist exploring the depths of nature and human consciousness through passionate brushwork
            and profound observation
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
              Email
            </a>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-border">
            <p className="text-xs sm:text-sm text-muted-foreground text-pretty leading-relaxed">
              © 2024 Jay Karun. All rights reserved. | Artwork available for purchase and commission.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
