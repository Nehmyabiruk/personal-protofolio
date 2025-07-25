"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Code,
  Smartphone,
  Globe,
  Database,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
  Instagram,
  Twitter,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { category: "Mobile Development", items: ["React Native", "Flutter", "iOS", "Android"] },
    { category: "Web Development", items: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript"] },
    {
      category: "Data Structures & Algorithms",
      items: ["Problem Solving", "Optimization", "Complexity Analysis", "Algorithm Design"],
    },
    { category: "Backend", items: ["Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"] },
    { category: "Tools & Technologies", items: ["Git", "Docker", "AWS", "Firebase", "Vercel"] },
  ]

  const projects = [
    {
      title: "Spiritual Tracker Web Application",
      description:
        "A spiritual tracker aimed to help individuals grow in their faith journey. It's a full-stack web application built with modern technologies, featuring user authentication, real-time data processing, and responsive design.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://web-based-app-production.up.railway.app",
      type: "Web Application",
    },
    {
      title: "Weather Application",
      description:
        "A JavaScript-based weather application that provides real-time weather information with a clean, user-friendly interface.",
      tech: ["JavaScript", "API Integration", "HTML", "CSS"],
      link: "https://github.com/Nehmyabiruk/weather",
      type: "Web Application",
    },
    {
      title: "Customer Analytics Platform",
      description:
        "A Python-based fintech customer analytics platform for analyzing customer behavior and generating insights for business decisions.",
      tech: ["Python", "Data Analysis", "Machine Learning"],
      link: "https://github.com/Nehmyabiruk/fintech-customer-analytics",
      type: "Data Analytics",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NB
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? "text-purple-400" : "text-white hover:text-purple-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-4 py-2 space-y-2">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-white hover:text-purple-300 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Nehmya Biruk
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-6">Computer Science Student & Full-Stack Developer</p>
              <p className="text-lg text-gray-400 max-w-2xl">
                Passionate about creating innovative mobile and web applications with expertise in data structures,
                algorithms, and modern development technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <Link
                href="https://github.com/Nehmyabiruk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/nehmya_biruk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://x.com/M37658Mimneh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Twitter size={24} />
              </Link>
              <Link href="mailto:mimneh@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <img
                    src="/nehmya.jpg"
                    alt="Nehmya Biruk"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
                <Code className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn more about my journey, education, and passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">My Journey</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                  <p>
                    I'm a dedicated Computer Science student with a passion for creating innovative solutions through
                    code. My journey in technology started with curiosity about how applications work, which led me to
                    dive deep into programming.
                  </p>
                  <p>
                    I specialize in both mobile and web development, with strong foundations in data structures and
                    algorithms. I believe in writing clean, efficient code and creating user experiences that make a
                    difference.
                  </p>
                  <p>
                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                    sharing knowledge with fellow developers.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code className="text-purple-400" size={20} />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="font-semibold">Computer Science Student</p>
                  <p className="text-gray-400">
                    Currently pursuing my degree with focus on software engineering and algorithms
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Globe className="text-purple-400" size={20} />
                    Specializations
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Smartphone className="text-pink-400" size={16} />
                      <span>Mobile Apps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="text-purple-400" size={16} />
                      <span>Web Development</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Database className="text-green-400" size={16} />
                      <span>Data Structures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="text-yellow-400" size={16} />
                      <span>Algorithms</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-white">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Explore some of my recent work and personal projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-purple-400 text-purple-400 mb-2">
                      {project.type}
                    </Badge>
                    <Link
                      href={project.link}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-pink-500/20 text-pink-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss opportunities, collaborations, or just have a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Mail className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-400">mimneh@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                      <Phone className="text-pink-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-gray-400">+251 901723123</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-green-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Location</h3>
                      <p className="text-gray-400">Ethiopia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-white text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full mt-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">© 2024 Nehmya Biruk. All rights reserved.</div>
            <div className="flex space-x-6">
              <Link
                href="https://github.com/Nehmyabiruk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/nehmya_biruk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://x.com/M37658Mimneh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link href="mailto:mimneh@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
