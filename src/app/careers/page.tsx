"use client";

import React, { useState } from "react";
import { Briefcase, HeartPulse, GraduationCap, Code, Rocket, CheckCircle2, X } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  requirements: string[];
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const jobs: Job[] = [
    {
      id: "job-1",
      title: "Senior Embedded Firmware Engineer",
      department: "Hardware Engineering",
      location: "On-site / Hybrid",
      requirements: [
        "5+ years C/C++ development for ARM Cortex MCUs",
        "Experience with RTOS kernel tasks & CAN bus communication",
        "Ability to read schematic board drawings"
      ]
    },
    {
      id: "job-2",
      title: "Lead Artificial Intelligence Architect",
      department: "AI & Automation",
      location: "Hybrid (Colombo / Remote)",
      requirements: [
        "PhD or MSc in Computer Science or Mathematics",
        "Expertise in PyTorch, CUDA optimizations, and Vector databases",
        "Experience designing localized, high-speed on-premise model pipelines"
      ]
    },
    {
      id: "job-3",
      title: "Senior Full Stack Engineer",
      department: "Software Solutions",
      location: "Remote",
      requirements: [
        "4+ years with Next.js, TypeScript, and SQL database architecture",
        "Deep understanding of concurrent connection scaling and cache stores",
        "Familiarity with containerized Kubernetes deployment environments"
      ]
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", resume: "" });
    setIsSuccess(false);
    setSelectedJob(null);
  };

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
            CAREERS
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Build the Future With Zynovra
          </h1>
          <p className="text-[#CFC8D8] text-base sm:text-lg">
            Join an elite engineering culture dedicated to designing next-generation software, embedded hardware circuits, and AI models.
          </p>
        </section>

        {/* Why Join Us */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-8 space-y-4">
            <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center text-[#A855F7]">
              <HeartPulse className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Health & Wellbeing</h3>
            <p className="text-xs text-[#CFC8D8]/70 leading-relaxed">
              Comprehensive medical insurance plans, fitness allowances, and flexible remote work setups to support your health.
            </p>
          </div>
          <div className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-8 space-y-4">
            <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center text-[#C084FC]">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Continuous Growth</h3>
            <p className="text-xs text-[#CFC8D8]/70 leading-relaxed">
              Generous education stipends for professional course certifications, tech conferences, and specialized lab components.
            </p>
          </div>
          <div className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-8 space-y-4">
            <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center text-[#D8B4FE]">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Elite Tech Stack</h3>
            <p className="text-xs text-[#CFC8D8]/70 leading-relaxed">
              Skip legacy red tape. Work with Next.js, Rust, Go, Python models, high-speed Altium boards, and modern PLC platforms.
            </p>
          </div>
        </section>

        {/* Culture Mindset */}
        <section className="bg-[#1B0133]/40 border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <h3 className="text-xl font-bold text-white">Engineering Culture & Innovation</h3>
            <p className="text-xs text-[#CFC8D8] leading-relaxed">
              We maintain a rigorous culture focused on test coverage, clean code parameters, circuit logic check loops, and scalable server models. We believe in collaborative reviews and continuous system tuning.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <div className="h-14 w-14 rounded-full bg-[#22023F] border border-purple-500/30 flex items-center justify-center text-[#A855F7] animate-float">
              <Rocket className="h-6 w-6" />
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Open Positions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#1B0133]/70 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#A855F7]/30 transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                  <div className="flex gap-4 text-xs text-[#CFC8D8]/50 mt-1">
                    <span>Dept: {job.department}</span>
                    <span>&bull;</span>
                    <span>Loc: {job.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="bg-[#22023F] hover:bg-[#A855F7] text-[#D8B4FE] hover:text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all border border-[#A855F7]/20"
                >
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={() => setSelectedJob(null)} />
            <div className="relative w-full max-w-lg bg-[#1B0133] border border-white/10 rounded-2xl p-8 shadow-glow-lg overflow-hidden">
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/5"
              >
                <X className="h-5 w-5" />
              </button>

              {!isSuccess ? (
                <form onSubmit={handleApply} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedJob.title}</h3>
                    <p className="text-xs text-[#CFC8D8]/50 mt-0.5">{selectedJob.department} &bull; {selectedJob.location}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Requirements</h4>
                    <ul className="space-y-1.5 text-xs text-[#CFC8D8]/80">
                      {selectedJob.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7] shrink-0 mt-1.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-white/5 pt-4 space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#CFC8D8] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#22023F] px-3.5 py-2 text-xs text-white placeholder-white/20 focus:border-purple-500 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#CFC8D8] mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#22023F] px-3.5 py-2 text-xs text-white placeholder-white/20 focus:border-purple-500 focus:outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#CFC8D8] mb-1">LinkedIn Profile or Resume Link *</label>
                      <input
                        type="url"
                        required
                        value={formData.resume}
                        onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#22023F] px-3.5 py-2 text-xs text-white placeholder-white/20 focus:border-purple-500 focus:outline-none"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#A855F7] hover:bg-[#B36CFF] text-white py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border border-white border-t-transparent" />
                        Submitting Application...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-6">
                  <div className="mb-4 text-[#22C55E]">
                    <CheckCircle2 className="h-14 w-14" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Application Submitted</h4>
                  <p className="text-xs text-[#CFC8D8] max-w-xs mb-6">
                    Thank you, {formData.name}. Our recruitment coordinator has received your details and will contact you shortly if there is a match.
                  </p>
                  <button
                    onClick={handleReset}
                    className="rounded-lg border border-white/10 bg-[#22023F] px-6 py-2.5 text-xs font-bold text-white hover:border-[#A855F7] transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
