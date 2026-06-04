"use client";

import React, { useState } from "react";
import { Folder, ArrowUpRight, BarChart2, Cpu, Smartphone, Layers } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: "enterprise" | "mobile" | "ai" | "engineering" | "erp" | "industrial";
  categoryLabel: string;
  client: string;
  summary: string;
  metrics: string;
  icon: any;
}

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filters = [
    { id: "all", label: "All Cases" },
    { id: "enterprise", label: "Enterprise Systems" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI Projects" },
    { id: "engineering", label: "Engineering Projects" },
    { id: "erp", label: "ERP Systems" },
    { id: "industrial", label: "Industrial Solutions" },
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: "cs-1",
      title: "Private Cloud ERP Transition",
      category: "erp",
      categoryLabel: "ERP Systems",
      client: "Bremen Logistics AG",
      summary: "Migrated on-premises logistics ledger databases to a private cloud architecture with sub-second synchronization.",
      metrics: "99.99% Availability & 40% Query Speedup",
      icon: Folder
    },
    {
      id: "cs-2",
      title: "Warehouse QR Dispatch Mobile",
      category: "mobile",
      categoryLabel: "Mobile Apps",
      client: "Vance Retail Group",
      summary: "Created offline-capable QR scanner mobile application for inventory updates and warehouse dispatch logs.",
      metrics: "12,000+ Active Daily Terminals",
      icon: Smartphone
    },
    {
      id: "cs-3",
      title: "Defect Analysis Machine Vision",
      category: "ai",
      categoryLabel: "AI Projects",
      client: "Helix Parts Corp",
      summary: "Programmed high-speed camera sensors to analyze parts on conveyor lines and automatically flag defects.",
      metrics: "0.03% False-Positive Defect Rate",
      icon: Cpu
    },
    {
      id: "cs-4",
      title: "Custom Sensor Actuator PCB",
      category: "engineering",
      categoryLabel: "Engineering Projects",
      client: "Sino Energy Group",
      summary: "Designed multi-layer sensor interface PCB for oil temperature and pressure logging in chemical plants.",
      metrics: "FCC & CE Compliance Approved",
      icon: Layers
    },
    {
      id: "cs-5",
      title: "Water Station PLC Automation",
      category: "industrial",
      categoryLabel: "Industrial Solutions",
      client: "Metro Utilities Dist.",
      summary: "Programmed PLC logic blocks controlling multi-stage water pumps and backwash filter pneumatic loops.",
      metrics: "Zero incident logs reported in 12 months",
      icon: BarChart2
    },
    {
      id: "cs-6",
      title: "Intelligent HRM Platform Upgrade",
      category: "enterprise",
      categoryLabel: "Enterprise Systems",
      client: "AeroSpace Tech Group",
      summary: "Re-engineered payroll systems and employee tracking for a workforce spread across four time zones.",
      metrics: "Reduced payroll preparation by 4 days",
      icon: Folder
    }
  ];

  const filteredStudies = selectedFilter === "all" 
    ? caseStudies 
    : caseStudies.filter((cs) => cs.category === selectedFilter);

  return (
    <div className="relative min-h-screen bg-[#120022] pt-12 pb-24 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[550px] h-[550px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D8B4FE]">
            CASE STUDIES
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Proven Engineering Milestones
          </h1>
          <p className="text-[#CFC8D8] text-base sm:text-lg">
            Review how our software developers, AI engineers, and hardware designers solve complex problems for enterprise clients.
          </p>
        </section>

        {/* Filter Navigation */}
        <section className="flex flex-wrap items-center justify-center gap-2.5">
          {filters.map((filt) => (
            <button
              key={filt.id}
              onClick={() => setSelectedFilter(filt.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all duration-200 ${
                selectedFilter === filt.id
                  ? "bg-[#A855F7] border-[#A855F7] text-white shadow-glow"
                  : "bg-[#1B0133] border-white/5 text-[#CFC8D8]/70 hover:border-white/15 hover:text-white"
              }`}
            >
              {filt.label}
            </button>
          ))}
        </section>

        {/* Cases Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((cs) => {
            const Icon = cs.icon;
            return (
              <div key={cs.id} className="glow-card p-8 flex flex-col justify-between min-h-[320px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#A855F7] uppercase tracking-widest bg-[#A855F7]/10 px-2 py-0.5 rounded border border-[#A855F7]/25">
                      {cs.categoryLabel}
                    </span>
                    <ArrowUpRight className="h-4.5 w-4.5 text-white/30" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">{cs.title}</h3>
                  <span className="block text-xs text-[#CFC8D8]/45">Client: {cs.client}</span>
                  <p className="text-sm text-[#CFC8D8]/70 leading-relaxed">{cs.summary}</p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-6">
                  <span className="text-[10px] text-white/40 uppercase block tracking-wider">Verified Achievement</span>
                  <span className="text-xs font-bold text-[#22C55E] mt-0.5 block">{cs.metrics}</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 space-y-6 bg-[#1B0133]/40 border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Have a Similar Project in Mind?</h2>
          <p className="text-sm text-[#CFC8D8] max-w-lg mx-auto">
            Contact us to request a detailed NDA, feasibility study, or structural engineering plan.
          </p>
          <div className="pt-2">
            <button
              onClick={() => window.dispatchEvent(new Event("open-consultation"))}
              className="bg-[#A855F7] hover:bg-[#B36CFF] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-glow"
            >
              Get Solution Proposal
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
