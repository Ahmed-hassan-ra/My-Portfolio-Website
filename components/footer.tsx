"use client"

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-foreground font-bold text-sm">AH</span>
              </div>
              <span className="text-foreground font-bold text-lg">Ahmed Hassan</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full-Stack Developer building production SaaS platforms. Currently at HIJAU TECH SDN. BHD.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/ahmedhassanra57-design"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-muted/20 text-muted-foreground hover:text-foreground hover:border-purple-500/30 hover:bg-purple-500/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-hassan-58582a331/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border bg-muted/20 text-muted-foreground hover:text-foreground hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:ahmedhassan.ramdn@gmail.com"
                className="p-2 rounded-lg border border-border bg-muted/20 text-muted-foreground hover:text-foreground hover:border-purple-500/30 hover:bg-purple-500/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left w-fit flex items-center gap-1 group"
                >
                  {item}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:ahmedhassan.ramdn@gmail.com"
                className="block text-sm text-muted-foreground hover:text-purple-400 transition-colors"
              >
                ahmedhassan.ramdn@gmail.com
              </a>
              <a
                href="tel:+601161516681"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                +601161516681
              </a>
              <p className="text-sm text-zinc-600">Shah Alam, Selangor, Malaysia</p>
            </div>
            <a
              href="https://www.cybasquad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              CybaSquad — Live Product
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-zinc-600">
            © {currentYear} Ahmed Hassan Ramadan. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">Licensed under the MIT License</p>
        </div>
      </div>
    </footer>
  )
}
