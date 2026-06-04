"use client";

import React from "react";
import { Cpu, Brain, Eye, Search, Zap, Workflow, BarChart3, Database } from "lucide-react";

export default function AiSolutionsPage() {
  const triggerConsultation = () => {
    window.dispatchEvent(new Event("open-consultation"));
  };

  const solutions = [
    {
      title: "AI Engineering",
      desc: "Architecting on-premise pipeline workflows and large language model fine-tuning frameworks.",
      icon: Brain,
      points: ["Model selection & fine-tuning", "Pipeline scheduling & scaling", "Secure local server hosting"]
    },
    {
      title: "Machine Learning Systems",
      desc: "Deploying high-frequency mathematical modeling libraries and classifier algorithms.",
      icon: Cpu,
      points: ["Regression & classification models", "Feature engineering tools", "Automated model retraining"]
    },
    {
      title: "Predictive Intelligence",
      desc: "Analyzing time-series logs to predict stock depletion points and machinery maintenance schedules.",
      icon: Zap,
      points: ["Anomaly detection log analysis", "Machinery maintenance timers", "Supply demand forecasting"]
    },
    {
      title: "AI Business Automation",
      desc: "Replacing repetitive manual review tasks with intelligent robotic agent nodes.",
      icon: Workflow,
      points: ["Email classification bots", "Automated receipt data extraction", "System status triggers"]
    },
    {
      title: "Computer Vision",
      desc: "High-speed camera sensor analysis for object tracking and manufacturing defect detection.",
      icon: Eye,
      points: ["Real-time defect tracking", "Facial authorization modules", "Object count telemetry"]
    },
    {
      title: "Industrial AI",
      desc: "Optimizing electrical loop feedback networks and thermodynamic cooling equations.",
      icon: Database,
      points: ["Thermodynamic logic controls", "Machinery speed adjustment loops", "Telemetry history models"]
    },
    {
      title: "AI Assistants & Agents",
      desc: "Creating chatbots trained on custom internal databases for immediate customer help.",
      icon: Search,
      points: ["Vector DB knowledge sync", "Context-aware response logic", "Ticketing system integrations"]
    },
    {
      title: "Smart Analytics",
      desc: "Turning huge data tables into beautiful, readable dashboard graphs for decision makers.",
      icon: BarChart3,
      points: ["Operational throughput meters", "Real-time query terminals", "Revenue prediction analytics"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#120022] pt-12 pb-24 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[550px] h-[550px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D8B4FE]">
            INTELLIGENCE SYSTEMS
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Enterprise Artificial Intelligence
          </h1>
          <p className="text-[#CFC8D8] text-base sm:text-lg">
            Deploy secure, isolated, and high-performance machine learning models designed to automate complex calculations and workflows.
          </p>
        </section>

        {/* Solutions Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <div key={index} className="glow-card p-8 flex flex-col justify-between min-h-[250px]">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#1B0133] border border-white/10 flex items-center justify-center text-[#A855F7]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{sol.title}</h3>
                  </div>
                  <p className="text-sm text-[#CFC8D8]/70 leading-relaxed">{sol.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-[#CFC8D8]/60 uppercase font-semibold">
                  {sol.points.map((p, idx) => (
                    <span key={idx} className="bg-[#120022] border border-white/5 px-2 py-1 rounded text-center truncate">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Tech Stack Callout */}
        <section className="bg-[#1B0133]/40 border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <h3 className="text-xl font-bold text-white">On-Premises Data Security</h3>
            <p className="text-xs text-[#CFC8D8] leading-relaxed">
              We specialize in hosting AI models on your private networks, ensuring zero data leakage to public third-party model providers. Your telemetry remains entirely yours.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <button
              onClick={triggerConsultation}
              className="bg-[#A855F7] hover:bg-[#B36CFF] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-glow text-sm"
            >
              Consult AI Architect
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
