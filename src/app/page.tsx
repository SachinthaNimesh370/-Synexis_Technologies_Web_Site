"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Cpu, Layers, HelpCircle, HardDrive,
  Activity, Star, User2, MessageSquare, BookOpen, ShoppingBag,
  Settings, Truck, Landmark, Building2, Briefcase, Coffee
} from "lucide-react";

// Animated stat counter component
function AnimatedStat({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Parse numeric part and suffix (e.g. "10+" => num=10, suffix="+")
  const match = value.match(/^([\d.]+)(\/.*|[^\d.]*)$/);
  const isSpecial = !match || value === "24/7";
  const targetNum = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || isSpecial) return;
    const duration = 1400;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += 1;
        const progress = current / steps;
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setCount(Math.round(eased * targetNum));
        if (current >= steps) {
          setCount(targetNum);
          clearInterval(interval);
        }
      }, stepTime);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, isSpecial, targetNum, delay]);

  const displayValue = isSpecial
    ? value
    : `${Number.isInteger(targetNum) ? count : count.toFixed(1)}${suffix}`;

  return (
    <div ref={ref} className="space-y-1">
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: delay / 1000 }}
        className="text-4xl md:text-5xl font-bold text-white tracking-tight"
      >
        {displayValue}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay / 1000 + 0.15 }}
        className="text-xs md:text-sm text-[#CFC8D8]/70 font-semibold uppercase tracking-wider"
      >
        {label}
      </motion.p>
    </div>
  );
}

export default function HomePage() {
  const triggerConsultation = () => {
    window.dispatchEvent(new Event("open-consultation"));
  };

  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "20+", label: "Business Solutions" },
    { value: "10+", label: "Technology Domains" },
    { value: "24/7", label: "Support" },
  ];

  const whyChooseUs = [
    {
      title: "Enterprise Quality",
      desc: "Robust, scalable architectures engineered for high-performance enterprise workloads.",
      icon: Shield,
    },
    {
      title: "AI-Driven Innovation",
      desc: "Harnessing the power of custom machine learning, computer vision, and automation.",
      icon: Cpu,
    },
    {
      title: "Engineering Expertise",
      desc: "Deep domain knowledge in PCB design, PLC programming, and embedded systems.",
      icon: Layers,
    },
    {
      title: "Long-Term Support",
      desc: "Round-the-clock proactive monitoring, maintenance, and technical optimization.",
      icon: HelpCircle,
    },
    {
      title: "Scalable Systems",
      desc: "Cloud-native designs that seamlessly adapt as your transactional volume expands.",
      icon: HardDrive,
    },
    {
      title: "Secure Technologies",
      desc: "Zero-trust models and advanced encryption protecting critical corporate assets.",
      icon: Activity,
    },
  ];

  const industries = [
    { name: "Healthcare", icon: Activity },
    { name: "Education", icon: BookOpen },
    { name: "Retail", icon: ShoppingBag },
    { name: "Manufacturing", icon: Settings },
    { name: "Logistics", icon: Truck },
    { name: "Finance", icon: Landmark },
    { name: "Government", icon: Building2 },
    { name: "Industrial Automation", icon: Layers },
    { name: "Hospitality", icon: Coffee },
    { name: "Small & Medium Businesses", icon: Briefcase },
  ];

  const testimonials = [
    {
      quote: "ZYNOVRA TECHNOLOGIES (PVT) LTD transformed our legacy systems into a modern, cloud-native ERP. Their technical precision and support are unmatched.",
      author: "Robert Chen",
      role: "Chief Technology Officer",
      company: "Apex Global Logistics",
    },
    {
      quote: "The AI-driven predictive maintenance monitoring system designed by Zynovra has decreased our factory downtime by over 34% this fiscal year.",
      author: "Elena Rostova",
      role: "Director of Operations",
      company: "Siemen Manufacturing Corp",
    },
    {
      quote: "Their team designed and built our custom PCB modules and programmed the PLCs flawlessly. They are truly elite engineering partners.",
      author: "Marcus Vance",
      role: "VP of Product Development",
      company: "AeroSpace Dynamics Ltd",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#120022] overflow-hidden pt-10">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-violet-950/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D8B4FE]"
            >
              <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
              INTELLIGENT TECHNOLOGY FOR GLOBAL ENTERPRISES
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] font-poppins"
            >
              Transforming Businesses Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#D8B4FE]">
                Intelligent Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#CFC8D8] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Enterprise Software, AI Solutions, Engineering Innovation, and Long-Term Technology Support for Future-Ready Organizations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/services"
                className="flex items-center gap-2 bg-[#A855F7] hover:bg-[#B36CFF] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-glow hover:shadow-glow-lg group w-full sm:w-auto justify-center"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={triggerConsultation}
                className="border border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all w-full sm:w-auto justify-center"
              >
                Book Consultation
              </button>
            </motion.div>
          </div>

          {/* Technology Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[400px] aspect-square rounded-2xl border border-white/10 bg-[#1B0133]/60 backdrop-blur-md shadow-glow-lg p-8 flex items-center justify-center overflow-hidden"
            >
              {/* Nodes and Lines layout */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/50 animate-spin" style={{ animationDuration: "40s" }} />
                <div className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-white/70 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
              </div>

              {/* Central Glowing Core */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-[#22023F] border border-[#A855F7] shadow-glow-lg animate-pulse-glow mb-4">
                  <Cpu className="h-10 w-10 text-[#C084FC]" />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold tracking-wide">ZYNOVRA CORE</h4>
                  <p className="text-[10px] text-[#CFC8D8]/50">SECURE NODE ACTIVE</p>
                </div>
              </div>

              {/* Floating Orbiting Nodes */}
              <div className="absolute top-[15%] left-[20%] animate-float">
                <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center shadow-md">
                  <Shield className="h-5 w-5 text-[#A855F7]" />
                </div>
              </div>

              <div className="absolute bottom-[20%] left-[15%] animate-float-delayed">
                <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center shadow-md">
                  <Layers className="h-5 w-5 text-[#C084FC]" />
                </div>
              </div>

              <div className="absolute top-[25%] right-[15%] animate-float-delayed">
                <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center shadow-md">
                  <Activity className="h-5 w-5 text-[#D8B4FE]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative border-y border-white/5 bg-[#1B0133]/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedStat
                key={i}
                value={stat.value}
                label={stat.label}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why Corporate Leaders Choose ZYNOVRA TECHNOLOGIES (PVT) LTD</h2>
          <p className="text-[#CFC8D8] max-w-xl mx-auto text-sm leading-relaxed">
            We bridge the gap between complex software, cutting-edge intelligence, and high-performance physical hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glow-card p-8 flex flex-col justify-between min-h-[220px]">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-[#1B0133] border border-white/10 flex items-center justify-center shadow-sm">
                    <Icon className="h-6 w-6 text-[#A855F7]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-[#CFC8D8]/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Products Callout */}
      <section className="bg-[#1B0133]/30 border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Enterprise Platforms Engineered to Scale
            </h2>
            <p className="text-[#CFC8D8]/80 text-sm leading-relaxed">
              Explore our proprietary suite of software engines—designed to optimize inventory, streamline human resources, accelerate points of sale, and monitor IoT infrastructure instantly.
            </p>
            <div className="pt-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#A855F7] hover:bg-[#B36CFF] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-glow"
              >
                Browse Products catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glow-card p-6">
              <h4 className="text-white font-bold mb-1">Zynovra ERP</h4>
              <p className="text-[#CFC8D8]/60 text-xs mb-4">Core Enterprise Resource Planning engine.</p>
              <Link href="/products#erp" className="text-xs text-[#C084FC] hover:text-white font-semibold">Explore Plan &rarr;</Link>
            </div>
            <div className="glow-card p-6">
              <h4 className="text-white font-bold mb-1">Zynovra HRM</h4>
              <p className="text-[#CFC8D8]/60 text-xs mb-4">Human Resource Management Platform.</p>
              <Link href="/products#hrm" className="text-xs text-[#C084FC] hover:text-white font-semibold">Explore Plan &rarr;</Link>
            </div>
            <div className="glow-card p-6">
              <h4 className="text-white font-bold mb-1">Zynovra POS</h4>
              <p className="text-[#CFC8D8]/60 text-xs mb-4">Modern POS Solution for digital terminals.</p>
              <Link href="/products#pos" className="text-xs text-[#C084FC] hover:text-white font-semibold">Explore Plan &rarr;</Link>
            </div>
            <div className="glow-card p-6">
              <h4 className="text-white font-bold mb-1">Zynovra AI Assistant</h4>
              <p className="text-[#CFC8D8]/60 text-xs mb-4">Intelligent workflow and automation copilot.</p>
              <Link href="/products#assistant" className="text-xs text-[#C084FC] hover:text-white font-semibold">Explore Plan &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Industries We Serve</h2>
          <p className="text-[#CFC8D8] max-w-xl mx-auto text-sm leading-relaxed">
            Delivering high-tech solutions engineered to optimize specific industrial and commercial requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <Link
                href="/industries"
                key={index}
                className="group border border-white/5 bg-[#1B0133]/30 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-purple-500/30 hover:bg-[#22023F]/50 transition-all duration-300 shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-[#CFC8D8] group-hover:text-[#A855F7] transition-colors" />
                </div>
                <span className="text-sm font-semibold text-[#CFC8D8] group-hover:text-white transition-colors">
                  {ind.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1B0133]/20 border-t border-b border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Trusted by Industry Authorities</h2>
            <p className="text-[#CFC8D8] max-w-xl mx-auto text-sm leading-relaxed">
              Read how enterprise executives partner with us to transform, automate, and protect operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="relative glass-panel rounded-xl p-8 flex flex-col justify-between min-h-[250px] shadow-lg">
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#A855F7]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#CFC8D8] text-sm leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-white/5 pt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#22023F] border border-white/10 flex items-center justify-center">
                    <User2 className="h-5 w-5 text-[#CFC8D8]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">{t.author}</h5>
                    <p className="text-[11px] text-[#CFC8D8]/50">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-white max-w-3xl mx-auto tracking-tight">
          Ready to Modernize Your Enterprise Infrastructure?
        </h2>
        <p className="text-[#CFC8D8] max-w-xl mx-auto text-sm">
          Collaborate with our software engineers, AI system architects, and electrical designers today to build your future.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={triggerConsultation}
            className="bg-[#A855F7] hover:bg-[#B36CFF] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-glow hover:shadow-glow-lg"
          >
            Get Custom Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
