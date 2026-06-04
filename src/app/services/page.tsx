"use client";

import React, { useState } from "react";
import { Server, Cpu, Layers, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "software" | "ai" | "engineering">("all");

  const categories = [
    { id: "all", label: "All Solutions" },
    { id: "software", label: "Software Solutions" },
    { id: "ai", label: "AI & Automation" },
    { id: "engineering", label: "Engineering Solutions" },
  ];

  const softwareServices = [
    "Website Development",
    "Web Application Development",
    "Enterprise Systems",
    "ERP Solutions",
    "CRM Solutions",
    "HRM Systems",
    "Inventory Management Systems (IMS)",
    "Learning Management Systems (LMS)",
    "Point of Sale Systems (POS)",
    "Hospital Management Systems",
    "Pharmacy Management Systems",
    "School Management Systems",
    "Custom Software Development",
  ];

  const aiServices = [
    "AI Engineering",
    "Intelligent Automation",
    "AI Chatbots",
    "Predictive Analytics",
    "AI-Powered Business Systems",
    "Computer Vision Solutions",
    "Machine Learning Systems",
    "Recommendation Engines",
    "Business Intelligence",
    "Smart Monitoring Systems",
    "IoT Solutions",
  ];

  const engineeringServices = [
    "PLC Programming",
    "PCB Design",
    "Circuit Design",
    "Embedded Systems",
    "Industrial Automation",
    "Electrical System Design",
    "Smart Industrial Solutions",
    "Sensor Integrations",
    "Hardware Prototyping",
    "Technical Engineering Consultation",
  ];

  const triggerConsultation = () => {
    window.dispatchEvent(new Event("open-consultation"));
  };

  return (
    <div className="relative min-h-screen bg-[#120022] pt-12 pb-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      <div className="absolute top-[15%] left-[-10%] w-[450px] h-[450px] bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[550px] h-[550px] bg-purple-950/20 rounded-full blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D8B4FE]">
            SERVICES CATALOG
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Enterprise Technology Architecture
          </h1>
          <p className="text-[#CFC8D8] text-base sm:text-lg">
            Deploy scalable software systems, design custom electronics, and integrate machine intelligence tailored to your operational constraints.
          </p>
        </section>

        {/* Filters */}
        <section className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#A855F7] border-[#A855F7] text-white shadow-glow"
                  : "bg-[#1B0133] border-white/10 text-[#CFC8D8] hover:border-white/20 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </section>

        {/* Content catalog */}
        <section className="space-y-16">
          {/* Software Solutions */}
          {(activeTab === "all" || activeTab === "software") && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Server className="h-6 w-6 text-[#A855F7]" />
                <h2 className="text-2xl font-bold text-white tracking-wide uppercase text-sm">
                  Software Solutions
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {softwareServices.map((service, idx) => (
                  <div key={idx} className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#A855F7] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{service}</h4>
                      <p className="text-xs text-[#CFC8D8]/65 mt-1 leading-relaxed">
                        Secure, customizable, and integration-ready platforms designed to handle high transaction throughput.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI & Automation */}
          {(activeTab === "all" || activeTab === "ai") && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Cpu className="h-6 w-6 text-[#C084FC]" />
                <h2 className="text-2xl font-bold text-white tracking-wide uppercase text-sm">
                  AI & Automation Services
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aiServices.map((service, idx) => (
                  <div key={idx} className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-6 hover:border-[#C084FC]/30 transition-all duration-300 flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#C084FC] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{service}</h4>
                      <p className="text-xs text-[#CFC8D8]/65 mt-1 leading-relaxed">
                        Implementing state-of-the-art machine models, automation nodes, and smart dashboards to analyze operations.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Solutions */}
          {(activeTab === "all" || activeTab === "engineering") && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Layers className="h-6 w-6 text-[#D8B4FE]" />
                <h2 className="text-2xl font-bold text-white tracking-wide uppercase text-sm">
                  Engineering Solutions
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {engineeringServices.map((service, idx) => (
                  <div key={idx} className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-6 hover:border-[#D8B4FE]/30 transition-all duration-300 flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#D8B4FE] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{service}</h4>
                      <p className="text-xs text-[#CFC8D8]/65 mt-1 leading-relaxed">
                        Physical circuit designing, board assembly prototyping, and PLC logic coding built to industrial specifications.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="text-center py-12 space-y-6 bg-[#1B0133]/40 border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Need a Specialized Custom Solution?</h2>
          <p className="text-sm text-[#CFC8D8] max-w-lg mx-auto">
            Discuss your detailed specification requirements with our engineering team for complex hybrid projects.
          </p>
          <div className="pt-2">
            <button
              onClick={triggerConsultation}
              className="bg-[#A855F7] hover:bg-[#B36CFF] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-glow"
            >
              Consult Solutions Engineer
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
