"use client";

import React from "react";
import { Check, ShieldCheck, HeartPulse, Clock, HelpCircle, HardDrive, MonitorCheck, AlertTriangle } from "lucide-react";

export default function SupportPage() {
  const triggerConsultation = () => {
    window.dispatchEvent(new Event("open-consultation"));
  };

  const supportServices = [
    { name: "Monthly Maintenance", desc: "Routine health diagnostics and platform patching." },
    { name: "Annual Support Contracts", desc: "Contractual SLA packages defining response window priorities." },
    { name: "Bug Fixing & Patches", desc: "Rapid deployment of code repairs under code review." },
    { name: "Feature Enhancements", desc: "Upgrading existing modules or integrating newer API calls." },
    { name: "System Monitoring", desc: "Continuous uptime checks and memory heap leak audits." },
    { name: "Cloud Deployment", desc: "Setting up secure VPCs and Docker microservice platforms." },
    { name: "Hosting Management", desc: "Handling nameservers, SSL setups, and edge hosting." },
    { name: "Security Updates", desc: "Vulnerability analysis and hotfixes protecting datasets." },
    { name: "Performance Tuning", desc: "Optimizing code execution and database indexing speeds." },
    { name: "Database Maintenance", desc: "Periodic backups, replica tests, and query audit logging." },
    { name: "Emergency Tech Support", desc: "Standby escalation engineering available on hotline." }
  ];

  const plans = [
    {
      name: "Basic Support",
      price: "Rs 15 000.00",
      period: "monthly",
      desc: "For non-critical websites needing standard maintenance, backup logs, and basic updates.",
      features: [
        "Business Hours Email Support",
        "Next Business Day response SLA",
        "Weekly database backups",
        "Security update patches",
        "4 hours allocated changes"
      ]
    },
    {
      name: "Professional Support",
      price: "Rs 50 000.00",
      period: "monthly",
      desc: "For active e-commerce and internal tools requiring fast response SLAs and active system monitoring.",
      features: [
        "12/5 Priority Email & Slack",
        "4-Hour critical response SLA",
        "Daily database replication check",
        "Active uptime dashboard",
        "12 hours allocated changes",
        "Monthly performance review"
      ],
      featured: true
    },
    {
      name: "Enterprise Support",
      price: "Custom",
      period: "annual contract",
      desc: "For critical factory automations, heavy ERP systems, and secure hospital databases.",
      features: [
        "24/7 Phone, Slack, & Email",
        "1-Hour critical response SLA",
        "Dedicated primary engineer",
        "Continuous log analytics monitoring",
        "Unlimited critical bug fixes",
        "On-premise hardware backup plans",
        "Regular disaster recovery trials"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#120022] pt-12 pb-24 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[550px] h-[550px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D8B4FE]">
            SUPPORT SERVICES
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Technology Support That Grows With Your Business
          </h1>
          <p className="text-[#CFC8D8] text-base sm:text-lg">
            Ensure your critical software and physical machinery maintain high availability, security updates, and performance.
          </p>
        </section>

        {/* 24/7 Banner */}
        <section className="bg-gradient-to-r from-[#22023F] to-[#1B0133] border border-[#A855F7]/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#120022] border border-[#A855F7] flex items-center justify-center text-[#A855F7] animate-pulse">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">24/7 Operations Command</h3>
              <p className="text-xs text-[#CFC8D8] max-w-md mt-0.5 leading-relaxed">
                Our support team actively monitors server loads, database connections, and hardware logs in real time. We resolve incidents before your staff notices.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-ping" />
            <span className="text-xs font-mono font-bold text-[#22C55E]">All Services Operational</span>
          </div>
        </section>

        {/* Support Services Checklist Grid */}
        <section className="space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Comprehensive Service Catalog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-6 hover:border-purple-500/20 transition-all duration-300 flex gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#22023F] border border-white/5 flex items-center justify-center shrink-0 text-[#A855F7]">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{service.name}</h4>
                  <p className="text-xs text-[#CFC8D8]/70 mt-1 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Plans Grid */}
        <section id="plans" className="space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Support SLA Plans</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border flex flex-col justify-between min-h-[500px] transition-all ${plan.featured
                    ? "bg-[#22023F] border-[#A855F7] shadow-glow"
                    : "bg-[#1B0133]/60 border-white/10"
                  }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A855F7] text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                    Recommended Plan
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-xs text-[#CFC8D8]/60 mt-1">{plan.desc}</p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-xs text-[#CFC8D8]/50">/ {plan.period}</span>
                  </div>

                  <ul className="space-y-3 text-xs text-[#CFC8D8] border-t border-white/5 pt-6">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#22C55E] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={triggerConsultation}
                    className={`w-full py-3 rounded-lg font-semibold text-center text-sm transition-all ${plan.featured
                        ? "bg-[#A855F7] hover:bg-[#B36CFF] text-white shadow-glow"
                        : "border border-white/10 bg-[#22023F]/50 text-white hover:border-[#A855F7]"
                      }`}
                  >
                    Select Plan SLA
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
