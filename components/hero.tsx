import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Background glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 py-28 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for new opportunities
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <p className="text-muted-foreground text-lg font-medium tracking-wide">Hello, I&apos;m</p>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
                  Ahmed Hassan
                </h1>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-emerald-500">
                  Ramadan
                </h1>
              </div>

              {/* Role */}
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-emerald-500" />
                <p className="text-muted-foreground font-semibold text-lg">
                  Full-Stack Developer &nbsp;·&nbsp; Backend-Focused
                </p>
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
                Full-stack developer with 6 months of hands-on internship experience, specialized in
                backend engineering — architecting secure APIs, database systems, and authentication flows.
                Comfortable across the full stack, with a strong focus on backend performance and security.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-border bg-transparent hover:bg-muted transition-all hover:-translate-y-0.5 text-foreground"
                >
                  Get In Touch
                </Link>
                <Link
                  href="https://www.cybasquad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-yellow-600 dark:text-yellow-300 border border-yellow-500/30 bg-yellow-500/10 hover:bg-yellow-500/20 transition-all hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-4 w-4" />
                  CybaSquad Live
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-muted-foreground text-xs uppercase tracking-widest font-medium">Find me on</span>
                <div className="h-px flex-1 bg-border" />
                <div className="flex items-center gap-2">
                  <Link
                    href="https://github.com/ahmedhassanra57-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border bg-background text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ahmed-hassan-58582a331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border bg-background text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link
                    href="mailto:ahmedhassan.ramdn@gmail.com"
                    className="p-2.5 rounded-xl border border-border bg-background text-muted-foreground hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center items-center order-1 lg:order-2">
              <div className="relative animate-float">
                {/* Outer glow */}
                <div className="absolute -inset-4 rounded-full bg-emerald-600/20 blur-2xl" />

                <div className="relative w-72 h-80 md:w-80 md:h-96">
                  {/* Solid purple border ring */}
                  <div className="absolute -inset-[3px] rounded-3xl bg-emerald-500 opacity-80 animate-spin-slow" />

                  {/* Photo */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-background">
                    <Image
                      src="/ahmed-profile.jpg"
                      alt="Ahmed Hassan Ramadan"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>

                {/* Floating badge — role */}
                <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl border border-border bg-background/90 dark:bg-black/80 backdrop-blur-xl shadow-xl">
                  <p className="text-foreground text-xs font-semibold">Full-Stack Developer</p>
                  <p className="text-emerald-500 text-xs">Backend Focused</p>
                </div>

                {/* Floating badge — live product */}
                <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-xl shadow-xl">
                  <p className="text-yellow-600 dark:text-yellow-300 text-xs font-semibold">Live Product</p>
                  <p className="text-muted-foreground text-xs">CybaSquad.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
