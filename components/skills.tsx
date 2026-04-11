import { Code2, Database, Brain, Wrench, Users, Globe, MapPin, Shield, Calendar } from "lucide-react"

export function Skills() {
  const technicalSkills = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL (PostgreSQL)", "Java", "HTML5", "CSS3"],
      icon: Code2,
      gradient: "from-blue-500 to-cyan-400",
      glow: "shadow-blue-500/20",
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Next.js 15", "React", "Express.js", "Prisma ORM", "Tailwind CSS", "Zod", "next-intl"],
      icon: Wrench,
      gradient: "from-purple-500 to-pink-500",
      glow: "shadow-purple-500/20",
    },
    {
      category: "Backend & Cloud",
      skills: ["Node.js", "Supabase", "PostgreSQL", "MongoDB", "Redis", "DigitalOcean", "RESTful APIs", "SMTP"],
      icon: Database,
      gradient: "from-indigo-500 to-blue-400",
      glow: "shadow-indigo-500/20",
    },
    {
      category: "Cybersecurity",
      skills: ["JWT", "OAuth", "RBAC", "Row-Level Security", "Input Sanitization", "HSTS", "CSP", "Rate Limiting"],
      icon: Shield,
      gradient: "from-red-500 to-rose-400",
      glow: "shadow-red-500/20",
    },
    {
      category: "AI & ML",
      skills: ["OpenAI API", "Groq SDK", "Google Vision API", "Tesseract.js", "AI Integration", "Prompt Engineering"],
      icon: Brain,
      gradient: "from-pink-500 to-fuchsia-400",
      glow: "shadow-pink-500/20",
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "Linux (Ubuntu/Debian)", "Postman", "Zoho Mail", "SMTP Config", "NPM", "Bun"],
      icon: Wrench,
      gradient: "from-orange-500 to-amber-400",
      glow: "shadow-orange-500/20",
    },
  ]

  const personalSkills = [
    "Problem Solving", "Team Collaboration", "Leadership", "Communication",
    "Time Management", "Adaptability", "Critical Thinking", "Project Management",
  ]

  const languages = [
    { language: "Arabic", level: "Native", flag: "🇸🇦" },
    { language: "English", level: "Fluent", flag: "🇬🇧" },
  ]

  const experience = [
    {
      title: "Software Developer Intern",
      organization: "HIJAU TECH SDN. BHD.",
      location: "Malaysia",
      period: "October 2025 – February 2026",
      isCurrent: false,
      points: [
        "Led development of CybaSquad, a full-stack SaaS platform using Next.js 15 and Supabase, managing B2C mentorship workflows and B2B hiring use cases",
        "Architected a gamified ranking system and automated RBAC using PostgreSQL triggers and JWT-based authentication",
        "Implemented database hardening and cybersecurity protocols (RLS, rate limiting, security headers: HSTS, CSP, X-Frame-Options)",
        "Executed comprehensive QA for the Mekaniku Marketplace, identifying critical bugs ensuring high-performance stability",
        "Integrated Xendit for automated payments and Slack Web API to dynamically generate private mentor-student channels",
        "Developed 20+ REST API endpoints using Zod for schema validation ensuring type safety and robust data handling",
      ],
    },
    {
      title: "Event Presenter and Organizer",
      organization: "Management and Science University",
      location: "Shah Alam, Malaysia",
      period: "27 February 2025",
      isCurrent: false,
      points: [
        "Organized 'Entry to Computer Science' event for 10 high school batches, explaining the CS student journey",
        "Delivered an engaging performance illustrating real-life challenges of Computer Science students",
        "Represented the department in honoring participants and encouraging student involvement",
      ],
    },
    {
      title: "Warehouse Associate (Volunteer)",
      organization: "The Lost Food Project",
      location: "Kuala Lumpur, Malaysia",
      period: "16 May 2024",
      isCurrent: false,
      points: [
        "Sorted, packed, and transported surplus food from markets to those in need",
        "Improved problem-solving and adaptability in a dynamic volunteering environment",
      ],
    },
    {
      title: "Humanitarian Aid Volunteer",
      organization: "Syria Care Malaysia & MSU Cares Club",
      location: "Shah Alam, Malaysia",
      period: "24 October 2024",
      isCurrent: false,
      points: [
        "Participated in the Warm Their Winter initiative to support Syrian families",
        "Sorted, prepared, and packed donated clothes for distribution",
        "Enhanced organizational and time management skills through coordinated operations",
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-[#09090b] relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Section heading */}
          <div className="space-y-3">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Skills & Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              What I Bring
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
          </div>

          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-zinc-300">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.category} className="glass rounded-2xl p-5 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shrink-0 shadow-lg ${category.glow}`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-white text-sm">{category.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-lg border border-white/[0.07] bg-white/[0.03] text-zinc-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Personal Skills + Languages row */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Personal Skills */}
            <div className="glass rounded-2xl p-6 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-semibold text-white text-lg">Personal Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full border border-green-500/20 bg-green-500/8 text-green-400 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass rounded-2xl p-6 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-semibold text-white text-lg">Languages</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.language} className="flex items-center justify-between p-3 rounded-xl border border-white/[0.05] bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-white font-medium text-sm">{lang.language}</span>
                    </div>
                    <span className="px-2.5 py-1 text-xs rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-400 font-medium">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-zinc-300">Experience</h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 transition-all duration-300 ${
                    exp.isCurrent
                      ? "border border-purple-500/30 bg-purple-500/[0.04] shadow-lg shadow-purple-500/10"
                      : "glass"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-white text-base">{exp.title}</h4>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 text-xs rounded-full bg-green-500/15 border border-green-500/25 text-green-400 font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <p className={`text-sm mt-0.5 ${exp.isCurrent ? "text-purple-400" : "text-zinc-400"}`}>
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="px-3 py-1 text-xs rounded-lg border border-white/[0.07] bg-white/[0.03] text-zinc-400 flex items-center gap-1.5 whitespace-nowrap">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <span className="text-xs text-zinc-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                        <span className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${exp.isCurrent ? "bg-purple-500" : "bg-zinc-600"}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
