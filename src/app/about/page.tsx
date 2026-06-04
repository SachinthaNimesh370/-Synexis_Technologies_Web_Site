"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, Trophy, Milestone, Code2, ShieldAlert } from "lucide-react";

export default function AboutPage() {
  const triggerConsultation = () => {
    window.dispatchEvent(new Event("open-consultation"));
  };

  const values = [
    {
      title: "Global Reach",
      desc: "Architecting systems for multinational compliance, distributed networks, and localized availability.",
      icon: Globe,
    },
    {
      title: "Elite Engineering",
      desc: "We hire only top-tier software engineers and hardware designers, maintaining a culture of rigor.",
      icon: Code2,
    },
    {
      title: "Client-First Support",
      desc: "Delivering continuous proactive maintenance, immediate incident resolution, and database support.",
      icon: Users,
    },
    {
      title: "Operational Excellence",
      desc: "Pioneering industry benchmarks through compliance, zero-downtime upgrades, and security standards.",
      icon: Trophy,
    },
  ];

  const milestones = [
    { year: "2018", title: "Synexis Inception", desc: "Founded with a focus on custom ERP engineering and PLC automation modules." },
    { year: "2020", title: "AI Division Established", desc: "Launched predictive analytics engines and custom computer vision systems for factories." },
    { year: "2022", title: "Global Expansion", desc: "Opened secondary office hubs and expanded support operations to 24/7 coverage." },
    { year: "2025", title: "Enterprise Leadership", desc: "Reached 100+ successfully delivered global software and hardware deployments." },
  ];

  const leaders = [
    {
      name: "Dr. Alistair Vance",
      role: "Chief Executive Officer",
      bio: "Former Enterprise Architect at IBM and Siemens with 20+ years of industrial hardware-software experience.",
    },
    {
      name: "Sarah Jenkins, MSc",
      role: "Chief Technology Officer",
      bio: "Expert in distributed cloud architecture, database concurrency, and high-frequency AI models.",
    },
    {
      name: "David K. Cho",
      role: "VP of Engineering Solutions",
      bio: "20+ years designing custom embedded boards, PCB layouts, and automated PLC control systems.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#120022] pt-12 pb-24 overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D8B4FE]"
          >
            WHO WE ARE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
          >
            Engineering the Future of Industry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[#CFC8D8] leading-relaxed"
          >
            Synexis Technologies partners with global companies to build, automate, and scale their digital operations. From enterprise resource planners to AI systems and specialized hardware, we create robust technology that lasts.
          </motion.p>
        </section>

        {/* Mission & Vision cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glow-card p-8 space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Our Mission</h3>
            <p className="text-sm text-[#CFC8D8]/80 leading-relaxed">
              To deliver ultra-reliable, high-performance software systems, computer intelligence, and industrial hardware automation that empowers enterprises to operate safely, efficiently, and at global scale.
            </p>
          </div>
          <div className="glow-card p-8 space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Our Vision</h3>
            <p className="text-sm text-[#CFC8D8]/80 leading-relaxed">
              To remain the primary strategic engineering partner for industries undergoing digital transformation, bridging physical circuits and cloud intelligence.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Core Pillars of Excellence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-6 space-y-4">
                  <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#A855F7]" />
                  </div>
                  <h4 className="text-white font-bold">{v.title}</h4>
                  <p className="text-xs text-[#CFC8D8]/70 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Milestones timeline */}
        <section className="space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Our Milestone Timeline</h2>
          <div className="relative border-l border-white/10 pl-6 space-y-8 max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[31px] top-1.5 h-4.5 w-4.5 rounded-full bg-[#120022] border border-[#A855F7] flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[#C084FC] group-hover:scale-125 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#A855F7] tracking-widest">{m.year}</span>
                  <h4 className="text-white font-bold text-sm mt-0.5">{m.title}</h4>
                  <p className="text-xs text-[#CFC8D8]/70 mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Board of Directors */}
        <section className="space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Executive Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="glow-card p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <h4 className="text-white font-bold text-base">{leader.name}</h4>
                  <span className="text-xs font-semibold text-[#A855F7] tracking-wider uppercase">{leader.role}</span>
                  <p className="text-xs text-[#CFC8D8]/70 leading-relaxed pt-2">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 space-y-6 bg-[#1B0133]/40 border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let&apos;s Build Something Incredible Together</h2>
          <p className="text-sm text-[#CFC8D8] max-w-lg mx-auto">
            Talk to an architect about custom software integrations, machinery automation, or deep predictive analytics solutions.
          </p>
          <div className="pt-2">
            <button
              onClick={triggerConsultation}
              className="bg-[#A855F7] hover:bg-[#B36CFF] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-glow"
            >
              Get Corporate Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
