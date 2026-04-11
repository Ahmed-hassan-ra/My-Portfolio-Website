import { GraduationCap, MapPin, Calendar, Code2 } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Section heading */}
          <div className="space-y-3">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest">About</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Who I Am
            </h2>
            <div className="h-1 w-16 bg-purple-500 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Education card */}
            <div className="glass rounded-2xl p-6 space-y-4 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                  <GraduationCap className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Education</h3>
              </div>
              <div className="space-y-1.5">
                <p className="text-foreground font-medium">Bachelor of Computer Science (HONS.)</p>
                <p className="text-muted-foreground text-sm">Management and Science University (MSU)</p>
                <p className="text-muted-foreground text-xs flex items-center gap-1.5 mt-2">
                  <Calendar className="h-3.5 w-3.5" />
                  Feb 2023 – Feb 2026
                </p>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Relevant Courses</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Data Structures & Algorithms · OOP · Web Development · API Development · Database Management ·
                  Operating Systems · AI · Distributed Systems · Software Engineering · Computer Architecture ·
                  System Analysis & Design · Network & Data Security · Computer Vision · Linux Programming
                </p>
              </div>
            </div>

            {/* Location card */}
            <div className="glass rounded-2xl p-6 space-y-4 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Location</h3>
              </div>
              <div className="space-y-2">
                <p className="text-foreground font-medium">Shah Alam, Selangor, Malaysia</p>
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium">
                  Open to remote & on-site opportunities
                </span>
              </div>
              <div className="pt-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Contact</p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-zinc-600">Email: </span>
                    <a href="mailto:ahmedhassan.ramdn@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      ahmedhassan.ramdn@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-zinc-600">Phone: </span>
                    <span className="text-foreground/80">+601161516681</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background story */}
          <div className="glass rounded-2xl p-8 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                <Code2 className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-xl">Background</h3>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Computer Science undergraduate at Management and Science University (MSU), with
                6 months of professional internship experience at <span className="text-purple-400 font-medium">HIJAU TECH SDN. BHD.</span> where
                I led the backend development of <span className="text-yellow-400 font-medium">CybaSquad</span> — a live SaaS platform serving real users.
              </p>
              <p>
                I&apos;m a <span className="text-foreground font-medium">full-stack developer with a backend focus</span> — comfortable building
                across the entire stack, but strongest on the server side: architecting secure REST APIs,
                designing PostgreSQL schemas, implementing RBAC and Row-Level Security, and integrating
                third-party services like Xendit payments and Slack Web API.
              </p>
              <p>
                On the frontend I work fluently with Next.js 15, React, and Tailwind CSS. I&apos;m particularly
                passionate about the intersection of backend architecture, AI integration, and cybersecurity —
                shipping products that are robust and secure from the ground up.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
