"use client";

import React, { useState } from "react";
import { Mail, Phone, MessageSquare, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

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
            CONTACT US
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Start Your Digital Transformation
          </h1>
          <p className="text-[#CFC8D8] text-base sm:text-lg">
            Connect with our systems architects, AI consultants, or support executives to schedule a project brief.
          </p>
        </section>

        {/* Layout Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Coordinates Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-6 flex gap-4">
              <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center text-[#A855F7]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Corporate Inquiry</h4>
                <p className="text-xs text-[#CFC8D8]/70 mt-1">inquire@synexis.com</p>
                <p className="text-xs text-[#CFC8D8]/70">partners@synexis.com</p>
              </div>
            </div>

            <div className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-6 flex gap-4">
              <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center text-[#C084FC]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Telephony Hotline</h4>
                <p className="text-xs text-[#CFC8D8]/70 mt-1">+1 (800) 555-0199 (HQ Toll-Free)</p>
                <p className="text-xs text-[#CFC8D8]/70">+94 11 234 5678 (Asia Support Hub)</p>
              </div>
            </div>

            <div className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-6 flex gap-4">
              <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center text-[#D8B4FE]">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Instant Chat Messenger</h4>
                <p className="text-xs text-[#CFC8D8]/70 mt-1">WhatsApp Business: +1 (800) 555-0190</p>
              </div>
            </div>

            <div className="bg-[#1B0133]/60 border border-white/5 rounded-xl p-6 flex gap-4">
              <div className="h-10 w-10 rounded-lg bg-[#22023F] border border-white/10 flex items-center justify-center text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Offices Location</h4>
                <p className="text-xs text-[#CFC8D8]/70 mt-1">Synexis Towers, Floor 14-16, Downtown Cyber City.</p>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="relative h-60 w-full bg-[#1B0133] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative z-10 text-center space-y-2">
                <MapPin className="h-8 w-8 text-[#A855F7] mx-auto animate-bounce" />
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">Downtown Cyber City</h5>
                <p className="text-[10px] text-[#CFC8D8]/50">34.0522&deg; N, 118.2437&deg; W</p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-[#1B0133]/80 border border-white/10 rounded-2xl p-8 shadow-glow-lg">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-[#CFC8D8] mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-sm text-white placeholder-white/20 focus:border-purple-500 focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#CFC8D8] mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-sm text-white placeholder-white/20 focus:border-purple-500 focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#CFC8D8] mb-1.5">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-sm text-white placeholder-white/20 focus:border-purple-500 focus:outline-none"
                    placeholder="Enterprise Inc."
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#CFC8D8] mb-1.5">Project Brief / Inquiry Details *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-sm text-white placeholder-white/20 focus:border-purple-500 focus:outline-none resize-none"
                    placeholder="Describe your solution timelines and technical specs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A855F7] hover:bg-[#B36CFF] text-white py-3.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-glow"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="mb-6 text-[#22C55E]">
                  <CheckCircle2 className="h-16 w-16" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Inquiry Submitted</h4>
                <p className="text-sm text-[#CFC8D8] max-w-sm mb-8">
                  We have received your business request. An enterprise representative will reach out to you within the next 2 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="rounded-lg border border-white/10 bg-[#22023F] px-6 py-2.5 text-sm font-semibold text-white hover:border-[#A855F7] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
