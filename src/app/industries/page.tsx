"use client";

import React, { useState } from "react";
import { 
  Activity, BookOpen, ShoppingBag, Settings, Truck, 
  Landmark, Building2, Layers, Coffee, Briefcase, ArrowRight, CheckCircle2 
} from "lucide-react";

interface Industry {
  id: string;
  name: string;
  icon: any;
  desc: string;
  useCase: string;
  solutions: string[];
}

export default function IndustriesPage() {
  const [selectedInd, setSelectedInd] = useState<string>("manufacturing");

  const industries: Industry[] = [
    {
      id: "healthcare",
      name: "Healthcare & Biotech",
      icon: Activity,
      desc: "Delivering secure, HIPAA-compliant patient management, digital pharmacy networks, and laboratory information systems.",
      useCase: "Pharmacy and hospital scheduling automation platforms.",
      solutions: ["Hospital Management Systems", "Pharmacy Inventory Networks", "HL7/FHIR Integration Support"]
    },
    {
      id: "education",
      name: "Education & E-Learning",
      icon: BookOpen,
      desc: "Architecting interactive virtual academies, gradebooks tracking engines, and custom student data centers.",
      useCase: "LMS systems hosting certification logs for large technical institutions.",
      solutions: ["Synexis LMS Engine", "Interactive Grading Dashboards", "SCORM Compliant Assets"]
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      icon: ShoppingBag,
      desc: "Building offline-capable Point of Sale terminals and synchronized inventory databases across multiple physical branches.",
      useCase: "Live checkout and inventory syncing across a chain of department stores.",
      solutions: ["Synexis POS Terminals", "Multi-Warehouse Inventory Sync", "Custom Loyalty Engines"]
    },
    {
      id: "manufacturing",
      name: "Advanced Manufacturing",
      icon: Settings,
      desc: "Integrating edge telemetry, PLC programs, PCB logic boards, and predictive analytics to prevent factory line stoppages.",
      useCase: "Machine vision system identifying defect rates on a high-speed automotive assembly line.",
      solutions: ["PLC Logic & PCB Prototyping", "Computer Vision Defect Inspection", "Predictive Operations Analysis"]
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      icon: Truck,
      desc: "Tracking assets from port to final warehouse. Automated dispatch schedulers, vehicle sensors, and vendor portals.",
      useCase: "Real-time fleet tracking and multi-warehouse supply chain dashboards.",
      solutions: ["Synexis IMS Warehousing", "Automated Fleet Telemetry Modules", "Vendor Ordering Portals"]
    },
    {
      id: "finance",
      name: "Banking & Finance",
      icon: Landmark,
      desc: "Secure banking ledgers, risk analytics dashboards, and custom client portfolios designed with strict encryption.",
      useCase: "High-frequency transactional logging database with zero data corruption.",
      solutions: ["Double-entry Ledger Systems", "Corporate Risk Analytics", "Compliance Auditing Suites"]
    },
    {
      id: "government",
      name: "Government & Public Sector",
      icon: Building2,
      desc: "Highly available portals, record-keeping databases, and public portal platforms conforming to federal accessibility mandates.",
      useCase: "Municipal portal for digital filing, record verification, and fee collections.",
      solutions: ["Citizen Portal Frameworks", "Encrypted Data Repositories", "Section 508 ADA Compliance"]
    },
    {
      id: "automation",
      name: "Industrial Automation",
      icon: Layers,
      desc: "Bespoke circuits, PCB system designs, and sensor configurations communicating over standard industrial protocols.",
      useCase: "SCADA systems controlling water purification or factory flow meters.",
      solutions: ["Modbus/EtherNetIP Integrations", "Custom Sensor Telemetry Boards", "Control Room Dashboards"]
    },
    {
      id: "hospitality",
      name: "Hospitality & Tourism",
      icon: Coffee,
      desc: "Centralized reservation channels, dining POS checkouts, and staff schedule schedulers keeping guest satisfaction high.",
      useCase: "Multi-hotel booking channels with live room cleaning trackers.",
      solutions: ["Room Booking Channels", "F&B Billing Integration POS", "Staff Scheduling Portals"]
    },
    {
      id: "smb",
      name: "Small & Medium Businesses",
      icon: Briefcase,
      desc: "Budget-friendly ERP and HRM configurations that support growing enterprises during their digital transition.",
      useCase: "ERP launch with modules for invoicing, HR, and sales trackers.",
      solutions: ["Modular ERP Configuration", "SaaS Transition Guidance", "Cloud Hosting Management"]
    }
  ];

  const currentInd = industries.find((i) => i.id === selectedInd) || industries[3];

  return (
    <div className="relative min-h-screen bg-[#120022] pt-12 pb-24 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      <div className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[550px] h-[550px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D8B4FE]">
            MARKET FOCUS
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Enterprise Sectors We Serve
          </h1>
          <p className="text-[#CFC8D8] text-base sm:text-lg">
            Deploying domain-specific hardware, robust database models, and artificial intelligence configurations across industrial frontiers.
          </p>
        </section>

        {/* Directory Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar selector */}
          <div className="lg:col-span-4 space-y-2">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = ind.id === selectedInd;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedInd(ind.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all ${
                    isActive
                      ? "bg-[#22023F] border-[#A855F7] text-white shadow-glow"
                      : "bg-[#1B0133]/40 border-white/5 text-[#CFC8D8]/70 hover:border-white/15 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center border ${
                      isActive ? "bg-[#120022] border-[#A855F7]/30 text-[#A855F7]" : "bg-[#22023F] border-white/5 text-[#CFC8D8]"
                    }`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-semibold text-sm">{ind.name}</span>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? "translate-x-1 text-[#A855F7]" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Details Content card */}
          <div className="lg:col-span-8 bg-[#1B0133]/80 border border-white/10 rounded-2xl p-8 space-y-8 shadow-glow-lg min-h-[400px]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-[#22023F] border border-[#A855F7] flex items-center justify-center text-[#A855F7]">
                  {React.createElement(currentInd.icon, { className: "h-6 w-6" })}
                </div>
                <h2 className="text-2xl font-bold text-white">{currentInd.name}</h2>
              </div>
              <p className="text-sm text-[#CFC8D8] leading-relaxed">
                {currentInd.desc}
              </p>
            </div>

            <div className="border-t border-white/5 pt-6 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Example Implementation</h4>
              <p className="text-xs text-[#CFC8D8]/70 italic leading-relaxed">
                &ldquo;{currentInd.useCase}&rdquo;
              </p>
            </div>

            <div className="border-t border-white/5 pt-6 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Target Deployments</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#CFC8D8]/95">
                {currentInd.solutions.map((sol, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#A855F7] shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 space-y-6 bg-[#1B0133]/40 border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Need Domain-Specific Architecture?</h2>
          <p className="text-sm text-[#CFC8D8] max-w-lg mx-auto">
            Discuss your sector compliance guidelines and integration protocols with our solutions specialists.
          </p>
          <div className="pt-2">
            <button
              onClick={() => window.dispatchEvent(new Event("open-consultation"))}
              className="bg-[#A855F7] hover:bg-[#B36CFF] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-glow"
            >
              Get Custom Consultation
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
