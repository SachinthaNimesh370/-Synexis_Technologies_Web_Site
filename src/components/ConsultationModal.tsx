"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Server, Cpu, CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "software",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "consultation" }),
      });
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Failed to send request. Please check your connection and try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "software",
      message: "",
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#1B0133] shadow-glow-lg"
          >
            {/* Soft background glow */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <h3 className="text-xl font-semibold text-white">Request Consultation</h3>
              <button
                onClick={onClose}
                className="rounded-full p-1.5 text-white/50 hover:bg-white/5 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#CFC8D8] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#CFC8D8] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#CFC8D8] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#CFC8D8] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="Enterprise Inc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#CFC8D8] mb-1.5">
                      Solutions Required *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="software">Enterprise Software Solutions</option>
                      <option value="ai">Artificial Intelligence & ML</option>
                      <option value="engineering">Hardware & Industrial Engineering</option>
                      <option value="support">Support & Maintenance Contracts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#CFC8D8] mb-1.5">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-[#22023F] px-4 py-2.5 text-white placeholder-white/30 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                      placeholder="Briefly describe your objectives, timelines, and technology needs."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#A855F7] px-4 py-3 font-semibold text-white hover:bg-[#B36CFF] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Processing Request...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mb-4 text-[#22C55E]"
                  >
                    <CheckCircle2 className="h-16 w-16" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-2">Request Received</h4>
                  <p className="text-[#CFC8D8] max-w-sm mb-6">
                    Thank you, {formData.name}. An enterprise solutions engineer will reach out to you within the next 2 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="rounded-lg border border-white/10 bg-[#22023F] px-6 py-2.5 text-sm font-semibold text-white hover:border-[#A855F7] transition-all"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
