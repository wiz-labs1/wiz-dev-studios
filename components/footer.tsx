"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="font-heading font-bold text-2xl text-primary mb-4 block"
              >
                Wiz Dev Studios
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Transforming ideas into digital products with modern technologies and best practices. 
                Building scalable web and software solutions for businesses worldwide.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a
                    href="https://github.com/wiz-studios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a
                    href="https://twitter.com/_wiz001"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href="mailto:wiz.dev.studios@gmail.com" aria-label="Email">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-4">
                Quick Links
              </h3>
              <nav className="space-y-3">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-4">
                Services
              </h3>
              <nav className="space-y-3">
                <div className="text-muted-foreground">Web Development</div>
                <div className="text-muted-foreground">Software Development</div>
                <div className="text-muted-foreground">DevOps & Cloud</div>
                <div className="text-muted-foreground">Mobile Development</div>
                <div className="text-muted-foreground">API Integration</div>
              </nav>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Wiz Dev Studios. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="hidden md:inline">•</span>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                Wiz Dev Studios <span className="text-xs">™</span>
              </div>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
