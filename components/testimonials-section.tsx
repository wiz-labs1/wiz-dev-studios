"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amara Okafor",
    role: "CEO",
    company: "TechStart Africa",
    content:
      "Working with Wiz Dev Studios was an absolute game-changer for our business. They delivered a scalable e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is unmatched.",
    rating: 5,
    avatar: "/kenyan-woman-ceo.png",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow Solutions",
    content:
      "The team's expertise in full-stack development helped us modernize our entire infrastructure. Their DevOps solutions reduced our deployment time by 80% and significantly improved our system reliability.",
    rating: 5,
    avatar: "/asian-man-cto.png",
  },
  {
    id: "3",
    name: "Fatima Al-Rashid",
    role: "Product Manager",
    company: "InnovateLab",
    content:
      "From concept to deployment, the development process was seamless. They understood our vision perfectly and delivered a mobile app that our users absolutely love. Highly recommend their services!",
    rating: 5,
    avatar: "/middle-eastern-woman-pm.png",
  },
  {
    id: "4",
    name: "James Mwangi",
    role: "Founder",
    company: "GreenTech Kenya",
    content:
      "Exceptional work on our healthcare management system. The security implementation and user experience design were top-notch. They truly care about delivering quality solutions.",
    rating: 5,
    avatar: "/kenyan-man-founder.png",
  },
  {
    id: "5",
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "Creative Agency Co.",
    content:
      "The portfolio website they built for us has generated more leads than we ever imagined. The design is stunning and the performance is incredible. Best investment we've made!",
    rating: 5,
    avatar: "/indian-woman-marketing.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders and satisfied clients have to say about working
            with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-card overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <blockquote className="text-lg lg:text-xl text-card-foreground leading-relaxed mb-6 font-medium">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={currentTestimonial.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-primary/20"
                  />
                  <div className="text-left">
                    <div className="font-heading font-semibold text-lg text-card-foreground">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-muted-foreground">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg bg-transparent"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg bg-transparent"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-4xl text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to join these satisfied clients?</p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  )
}