"use client";

import React, { useState } from "react";
import { Users, Package, BookOpen, CreditCard, Shield, Activity, Cpu, ArrowRight, X } from "lucide-react";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: any;
  details: string[];
}

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: "erp",
      title: "Synexis ERP",
      subtitle: "Enterprise Resource Planning Engine",
      desc: "Streamline accounting, procurement, project management, and supply chain processes in a unified framework.",
      icon: Shield,
      details: [
        "Global multi-currency financial ledger consolidation",
        "Automated supply chain workflow triggers",
        "Comprehensive resource planning dashboards",
        "Real-time corporate compliance auditing tools"
      ]
    },
    {
      id: "hrm",
      title: "Synexis HRM",
      subtitle: "Human Resource Management Platform",
      desc: "Unify payroll, attendance tracking, compliance, performance appraisal, and digital onboarding on one dashboard.",
      icon: Users,
      details: [
        "Interactive employee profiles and career tracking",
        "Automated regional tax calculation and payroll",
        "AI-assisted talent onboarding pipeline",
        "Time tracking and shift rotation scheduler"
      ]
    },
    {
      id: "ims",
      title: "Synexis IMS",
      subtitle: "Inventory Management Platform",
      desc: "Track stock, automate warehouse refilling alerts, manage vendors, and analyze dispatch history instantly.",
      icon: Package,
      details: [
        "Real-time multi-location warehouse synchronization",
        "Predictive stock depletion warning parameters",
        "QR and barcode scanner mobile integration",
        "Automated wholesale purchase order generator"
      ]
    },
    {
      id: "lms",
      title: "Synexis LMS",
      subtitle: "Learning Management Platform",
      desc: "Deliver training modules, track completion certifications, and host digital courses for employees.",
      icon: BookOpen,
      details: [
        "Scorm compliance learning modules compatibility",
        "Automated corporate compliance certification issues",
        "Detailed employee skill gap analytic charts",
        "Interactive course builders and live seminar support"
      ]
    },
    {
      id: "pos",
      title: "Synexis POS",
      subtitle: "Modern Retail Point of Sale",
      desc: "Fast, intuitive checkouts with real-time sync to inventory. Designed for offline capability and card readers.",
      icon: CreditCard,
      details: [
        "Hybrid offline/online local terminal databases",
        "Instant credit card and digital wallet integrations",
        "Automated retail store transaction logs upload",
        "Optimized touchscreen terminal layouts"
      ]
    },
    {
      id: "monitoring",
      title: "Synexis Smart Monitoring",
      subtitle: "IoT Infrastructure & Systems Analytics",
      desc: "Gain deep operational visibility. Monitor machinery status, temperature sensors, and remote deployments.",
      icon: Activity,
      details: [
        "Live sensor telemetry streams rendering graphs",
        "Dynamic alerting rules via webhooks and SMS",
        "PLC control loops automation interfaces",
        "Historian time-series database architecture"
      ]
    },
    {
      id: "assistant",
      title: "Synexis AI Assistant",
      subtitle: "Intelligent Corporate Copilot",
      desc: "Inject natural language intelligence. Query reports, drafts, documents, and support channels using custom LLMs.",
      icon: Cpu,
      details: [
        "On-premise LLM fine-tuning options for safety",
        "Vector search querying across internal network files",
        "Automated ticketing system incident answers",
        "Natural language dashboard data querying"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#120022] pt-12 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[550px] h-[550px] bg-purple-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D8B4FE]">
            PRODUCT SUITE
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Proprietary Enterprise Software
          </h1>
          <p className="text-[#CFC8D8] text-base sm:text-lg">
            High-tech digital systems engineered for security, speed, and continuous operation in demanding corporate environments.
          </p>
        </section>

        {/* Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div key={prod.id} className="glow-card p-8 flex flex-col justify-between min-h-[300px]">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-[#1B0133] border border-white/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[#A855F7]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{prod.title}</h3>
                    <span className="text-xs font-medium text-[#CFC8D8]/50">{prod.subtitle}</span>
                  </div>
                  <p className="text-sm text-[#CFC8D8]/70 leading-relaxed">{prod.desc}</p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="flex items-center gap-1.5 text-sm font-semibold text-[#C084FC] hover:text-[#B36CFF] transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </section>

        {/* Modal detail drawer */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
            <div className="relative w-full max-w-lg bg-[#1B0133] border border-white/10 rounded-2xl p-8 shadow-glow-lg overflow-hidden">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/5"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl bg-[#22023F] border border-white/10 flex items-center justify-center shrink-0">
                    {React.createElement(selectedProduct.icon, { className: "h-7 w-7 text-[#A855F7]" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedProduct.title}</h3>
                    <p className="text-xs text-[#CFC8D8]/50">{selectedProduct.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-[#CFC8D8] leading-relaxed">
                  {selectedProduct.desc}
                </p>
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Key Capabilities</h4>
                  <ul className="space-y-2 text-sm text-[#CFC8D8]/80">
                    {selectedProduct.details.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7] shrink-0 mt-2" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      window.dispatchEvent(new Event("open-consultation"));
                    }}
                    className="w-full bg-[#A855F7] hover:bg-[#B36CFF] text-white py-3 rounded-lg font-semibold text-center transition-colors"
                  >
                    Request Demo / Deployment Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
