"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Code2, Smartphone, Database, Cloud, Settings, Shield, ArrowRight } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  technologies: string[]
}

const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with cutting-edge technologies and best practices for optimal performance and user experience.",
    icon: <Globe className="w-8 h-8" />,
    features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Cross-browser Compatibility"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Custom desktop applications and robust APIs designed to streamline your business processes and enhance productivity.",
    icon: <Code2 className="w-8 h-8" />,
    features: ["Desktop Applications", "RESTful APIs", "Database Integration", "Third-party Integrations"],
    technologies: ["Node.js", "Python", "Electron", "PostgreSQL"],
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Solutions",
    description:
      "Scalable cloud infrastructure and automated deployment pipelines to ensure your applications run smoothly and securely.",
    icon: <Cloud className="w-8 h-8" />,
    features: ["CI/CD Pipelines", "Cloud Architecture", "Container Orchestration", "Monitoring & Analytics"],
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
]

export function ServicesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive development solutions tailored to your business needs, from concept to deployment and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="relative p-8">
                {/* Service Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-heading font-semibold text-2xl text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full group-hover:bg-accent/20 group-hover:text-accent-foreground transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <Button
                  variant="ghost"
                  className="w-full justify-between text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all duration-300"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-muted/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-heading font-semibold text-2xl lg:text-3xl text-foreground mb-4">
              Additional Expertise
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond core development services, we offer specialized solutions to meet your unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Smartphone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Mobile Development</h4>
              <p className="text-sm text-muted-foreground">React Native & Flutter apps</p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Database className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Database Design</h4>
              <p className="text-sm text-muted-foreground">Optimized data architecture</p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Settings className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">API Integration</h4>
              <p className="text-sm text-muted-foreground">Third-party service connections</p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Shield className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-2">Security Audits</h4>
              <p className="text-sm text-muted-foreground">Code & infrastructure review</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="font-heading font-semibold text-2xl lg:text-3xl text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with modern, scalable solutions.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group"
          >
            Start a Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
