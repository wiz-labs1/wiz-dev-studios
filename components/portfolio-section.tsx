"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import Image from "next/image"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "./scroll-animations"

type ProjectCategory = "All" | "Web" | "Software" | "Fullstack"

interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A modern, scalable e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    category: "Fullstack",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    image: "/modern-ecommerce-dashboard.png",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
    category: "Web",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    image: "/task-management-interface.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Desktop Analytics Tool",
    description:
      "Cross-platform desktop application for data visualization and business intelligence with advanced reporting.",
    category: "Software",
    technologies: ["Electron", "React", "D3.js", "SQLite", "Chart.js"],
    image: "/analytics-dashboard-desktop-app.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare platform with patient records, appointment scheduling, and telemedicine features.",
    category: "Fullstack",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Bootstrap"],
    image: "/healthcare-management-system.png",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "5",
    title: "Portfolio Website Builder",
    description: "Drag-and-drop website builder specifically designed for creative professionals and agencies.",
    category: "Web",
    technologies: ["React", "Express.js", "AWS S3", "Redis", "Styled Components"],
    image: "/website-builder-interface.png",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "6",
    title: "API Gateway Service",
    description: "Microservices API gateway with rate limiting, authentication, monitoring, and load balancing.",
    category: "Software",
    technologies: ["Go", "Docker", "Kubernetes", "Redis", "Prometheus"],
    image: "/api-gateway-architecture.png",
    demoUrl: "#",
    githubUrl: "#",
  },
]

const categories: ProjectCategory[] = ["All", "Web", "Software", "Fullstack"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing innovative solutions across web development, software engineering, and
            full-stack applications.
          </p>
        </ScrollAnimation>

        {/* Filter Buttons */}
        <ScrollAnimation delay={0.2} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            </motion.div>
          ))}
        </ScrollAnimation>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card
                  className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card ${
                    project.featured ? "ring-2 ring-accent/20" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Featured</Badge>
                      </motion.div>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.demoUrl && (
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {project.githubUrl && (
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    {/* Project Title */}
                    <motion.h3
                      className="font-heading font-semibold text-xl text-card-foreground mb-3 group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Project Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Category Badge */}
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View More Button */}
        <ScrollAnimation delay={0.4} className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://ronoh-portfolio-14.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 bg-transparent"
              >
                View All Projects
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}