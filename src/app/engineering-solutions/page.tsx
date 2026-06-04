"use client";

import React from "react";
import { Cpu, Terminal, Compass, Zap, Radio, Settings, LineChart, ShieldAlert } from "lucide-react";

export default function EngineeringSolutionsPage() {
  const triggerConsultation = () => {
    window.dispatchEvent(new Event("open-consultation"));
  };

  const solutions = [
    {
      title: "PLC Programming",
      desc: "Developing reliable ladder logic, structured text, and functional block diagrams for Siemens, Allen-Bradley, and Beckhoff controllers.",
      icon: Terminal,
      specs: ["IEC 61131-3 Compliant", "Safety-instrumented Systems", "SCADA Integration ready"]
    },
    {
      title: "PCB Design & Layout",
      desc: "Designing high-speed multi-layer printed circuit boards with controlled impedance, optimized thermal dissipation, and low noise profiles.",
      icon: Cpu,
      specs: ["Altium Designer Suite", "Multi-layer Impedance Sync", "DFM/DFA compliance validation"]
    },
    {
      title: "Embedded Systems Development",
      desc: "Writing low-level firmware in C/C++ for ARM Cortex-M processors, ESP32, and custom MCU architectures.",
      icon: Compass,
      specs: ["FreeRTOS kernels", "SPI, I2C, CAN Bus communication", "Ultra-low power sleep states"]
    },
    {
      title: "Circuit Design & Simulation",
      desc: "Simulating analog filters, power delivery networks, and high-frequency RF loops to minimize signal distortion.",
      icon: Zap,
      specs: ["SPICE transient simulation", "EMC/EMI shielding", "Active and passive filtration"]
    },
    {
      title: "IoT Systems Integration",
      desc: "Deploying remote sensor nodes that transmit telemetry securely over cellular, LoRaWAN, Wi-Fi, and Ethernet.",
      icon: Radio,
      specs: ["MQTT / CoAP secure protocols", "Battery powered nodes (5yr life)", "Over-The-Air (OTA) updates"]
    },
    {
      title: "Industrial Automation Systems",
      desc: "Orchestrating pneumatic cylinders, stepper actuators, frequency drives, and safety screens into unified assembly modules.",
      icon: Settings,
      specs: ["Pneumatic actuator loops", "Modbus & EtherCAT fieldbuses", "ISO 13849 machinery safety"]
    },
    {
      title: "Industrial Monitoring Telemetry",
      desc: "Collecting raw sensor data to map real-time pressure, torque, and power usage histograms.",
      icon: LineChart,
      specs: ["Time-series database ingest", "Real-time warning limits", "Historian database integration"]
    },
    {
      title: "Hardware & Prototype Consultation",
      desc: "Providing design-for-manufacturability studies, component sourcing strategy, and pre-compliance review.",
      icon: ShieldAlert,
      specs: ["BOM cost optimization", "Regulatory testing review (CE/FCC)", "Sourcing risk audits"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#120022] pt-12 pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-950/20 rounded-full blur-[125px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-6 pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D8B4FE]">
            HARDWARE SYSTEMS
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Advanced Hardware & Automation Engineering
          </h1>
          <p className="text-[#CFC8D8] text-base sm:text-lg">
            Custom electronics, firmware, and PLC control programming built to withstand rugged industrial environments.
          </p>
        </section>

        {/* Grid */}
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
                <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[9px] text-[#CFC8D8]/60 uppercase font-mono font-semibold">
                  {sol.specs.map((spec, idx) => (
                    <span key={idx} className="bg-[#120022] border border-white/5 px-2 py-1 rounded text-center truncate">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Prototyping Section */}
        <section className="bg-[#1B0133]/40 border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <h3 className="text-xl font-bold text-white font-poppins">Compliance & Validation Review</h3>
            <p className="text-xs text-[#CFC8D8] leading-relaxed">
              Our hardware engineers assist you from initial schematic drafting up through EMI chamber testing, helping ensure successful FCC, CE, and industrial machinery safety audits.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <button
              onClick={triggerConsultation}
              className="bg-[#A855F7] hover:bg-[#B36CFF] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-glow text-sm"
            >
              Consult Hardware Engineer
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
