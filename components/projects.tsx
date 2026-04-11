import { Github, Globe, Star, ArrowUpRight, Code2, Bot, Scan, Brain, Shield, Palette, Database, Users, Zap, CreditCard, Lock, Languages } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const featuredProject = {
    title: "CybaSquad",
    subtitle: "Full-Stack SaaS Platform",
    company: "HIJAU TECH SDN. BHD.",
    period: "Oct 2025 – Feb 2026",
    description:
      "A comprehensive ecosystem bridging the industry gap by providing structured learning, hands-on project experience, and a direct pathway to professional hiring and earning opportunities. Supports B2C mentorship programs and B2B client hiring workflows.",
    features: [
      { icon: Users, text: "End-to-end SaaS supporting B2C mentorship programs and B2B client hiring workflows" },
      { icon: Zap, text: "Gamified rank progression (Rookie → Elite) auto-updated via PostgreSQL triggers on approved project count" },
      { icon: Lock, text: "RBAC with JWT across four roles: student, mentor, admin, and super-admin" },
      { icon: Bot, text: "20+ REST API endpoints with Zod schema validation covering mentorship, payments, and Slack integration" },
      { icon: CreditCard, text: "Xendit payment gateway for invoice generation and Slack Web API to auto-provision private channels" },
      { icon: Shield, text: "Secured with RLS, rate limiting, input sanitization, and security headers (HSTS, CSP, X-Frame-Options)" },
      { icon: Languages, text: "Multilingual support (English, Arabic, Malay) with full RTL layout for Arabic via next-intl" },
    ],
    technologies: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Slack API", "Xendit", "Turbo SMTP", "JWT", "RBAC", "RLS", "next-intl", "Zod"],
    github: null,
    live: "https://www.cybasquad.com",
  }

  const otherProjects = [
    {
      title: "MASARI-AI",
      period: "Mar 2025 – Jun 2025",
      description:
        "A web-based personal finance manager powered by AI. Track income, expenses, and budgets; upload and OCR receipts; generate rich reports and charts.",
      features: [
        { icon: Bot, text: "AI chatbot via Groq SDK for trend analysis and natural language Q&A" },
        { icon: Scan, text: "OCR to extract receipt data automatically using Tesseract.js and Google Vision API" },
        { icon: Brain, text: "Intelligent expense tracking with personalized financial insights" },
        { icon: Shield, text: "Secure authentication with NextAuth (Google OAuth and JWT)" },
        { icon: Palette, text: "Clean UI with Tailwind CSS and shadcn/ui" },
        { icon: Database, text: "Scalable backend using Prisma and PostgreSQL" },
      ],
      technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Groq SDK", "Google Vision API", "Tesseract.js", "NextAuth", "Tailwind CSS"],
      github: "https://github.com/ahmedhassanra57-design/MASARI-AI",
      live: null,
    },
  ]

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Section heading */}
          <div className="space-y-3">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Projects</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              What I&apos;ve Built
            </h2>
            <div className="h-1 w-16 bg-purple-500 rounded-full" />
          </div>

          {/* CybaSquad — Featured */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Featured Project</span>
            </div>

            <div className="relative rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/[0.05] via-transparent to-orange-500/[0.03] p-8 overflow-hidden group hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_60px_rgba(234,179,8,0.08)]">
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

              <div className="grid lg:grid-cols-[1fr_auto] gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-3xl font-bold text-foreground">{featuredProject.title}</h3>
                    <span className="px-3 py-1 text-xs rounded-full border border-yellow-500/40 bg-yellow-500/15 text-yellow-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live Product
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {featuredProject.subtitle} &nbsp;·&nbsp;
                    <span className="text-yellow-500/80">{featuredProject.company}</span>
                    &nbsp;·&nbsp; {featuredProject.period}
                  </p>
                  <p className="text-foreground/80 leading-relaxed max-w-2xl">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Live site link */}
                {featuredProject.live && (
                  <div className="flex items-start lg:items-center">
                    <Link
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 transition-all shadow-lg shadow-yellow-500/20 hover:-translate-y-0.5 whitespace-nowrap"
                    >
                      <Globe className="h-4 w-4" />
                      Visit Site
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Features grid */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600 mb-4">Key Features</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {featuredProject.features.map((feature, idx) => {
                    const Icon = feature.icon
                    return (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="h-3.5 w-3.5 text-yellow-400" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600 mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-lg border border-yellow-500/20 bg-yellow-500/[0.07] text-yellow-300/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Code2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">Other Projects</span>
            </div>
            <div className="space-y-5">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-7 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-3 py-1 text-xs rounded-lg border border-border bg-muted/30 text-muted-foreground whitespace-nowrap">
                        {project.period}
                      </span>
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-500/25 bg-purple-500/10 text-purple-400 text-xs font-semibold hover:bg-purple-500/20 transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {project.features.map((feature, idx) => {
                        const Icon = feature.icon
                        return (
                          <div key={idx} className="flex gap-2.5 items-start">
                            <div className="w-6 h-6 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                              <Icon className="h-3 w-3 text-purple-400" />
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.text}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-lg border border-border bg-muted/20 text-muted-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="text-center pt-4">
            <Link
              href="https://github.com/ahmedhassanra57-design"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-border bg-muted/30 text-foreground/80 text-sm font-semibold hover:border-purple-500/30 hover:bg-purple-500/8 hover:text-foreground transition-all"
            >
              <Github className="h-4 w-4" />
              See all projects on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
