"use client"

import { Mail, MapPin, Linkedin, Github, Send, Phone } from "lucide-react"
import Link from "next/link"
import { submitContactForm } from "@/app/actions/contact"
import { useActionState } from "react"

export function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmedhassan.ramdn@gmail.com",
      href: "mailto:ahmedhassan.ramdn@gmail.com",
      gradient: "from-blue-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+601161516681",
      href: "tel:+601161516681",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Shah Alam, Selangor, Malaysia",
      href: null,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ahmed-hassan-58582a331",
      href: "https://www.linkedin.com/in/ahmed-hassan-58582a331/",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ahmedhassanra57-design",
      href: "https://github.com/ahmedhassanra57-design",
      gradient: "from-zinc-500 to-zinc-400",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyan-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Section heading */}
          <div className="space-y-3">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Get In Touch
            </h2>
            <div className="h-1 w-16 bg-blue-500 rounded-full" />
            <p className="text-muted-foreground text-base max-w-xl pt-1">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-4 p-4 glass rounded-xl transition-all duration-300 group w-full text-left">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.label}</p>
                      <p className={`text-sm font-medium mt-0.5 ${item.href ? "text-foreground/80 group-hover:text-foreground transition-colors" : "text-muted-foreground"}`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-7">
              <h3 className="text-foreground font-semibold text-lg mb-6">Send a Message</h3>
              <form action={formAction} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] transition-all disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] transition-all disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] transition-all disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={4}
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/[0.03] transition-all resize-none disabled:opacity-50"
                  />
                </div>

                {state?.success && (
                  <div className="px-4 py-3 rounded-xl border border-green-500/25 bg-green-500/10 text-green-400 text-sm">
                    {state.message}
                  </div>
                )}

                {state?.error && (
                  <div className="px-4 py-3 rounded-xl border border-red-500/25 bg-red-500/10 text-red-400 text-sm">
                    {state.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-foreground bg-blue-600 hover:opacity-90 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
