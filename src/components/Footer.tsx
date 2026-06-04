"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 2000);
    }
  };

  return (
    <footer className="bg-[#120022] border-t border-white/5 pt-16 pb-8 text-[#CFC8D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Intro & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#A855F7] to-[#C084FC] flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold tracking-wider text-white">SYNEXIS</span>
            </Link>
            <p className="text-sm text-[#CFC8D8]/70 leading-relaxed">
              Engineering the future through intelligent software solutions, advanced AI engineering, and industrial automation technology.
            </p>

            {/* Newsletter signup */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Subscribe to Intel</h4>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter corporate email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow rounded-lg border border-white/10 bg-[#22023F]/50 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-[#A855F7] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#A855F7] hover:bg-[#B36CFF] text-white p-2.5 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-xs text-[#22C55E] bg-[#22C55E]/10 p-2 rounded-lg">
                  <CheckCircle2 className="h-4 w-4" />
                  Subscription active. Welcome to Intel.
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-sm text-[#CFC8D8]/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h4>
            <ul className="space-y-2 text-sm text-[#CFC8D8]/70">
              <li><Link href="/services#erp" className="hover:text-white transition-colors">ERP Systems</Link></li>
              <li><Link href="/products#hrm" className="hover:text-white transition-colors">Synexis HRM</Link></li>
              <li><Link href="/products#ims" className="hover:text-white transition-colors">Synexis IMS</Link></li>
              <li><Link href="/products#pos" className="hover:text-white transition-colors">Synexis POS</Link></li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Services</h4>
            <ul className="space-y-2 text-sm text-[#CFC8D8]/70">
              <li><Link href="/ai-solutions" className="hover:text-white transition-colors">AI Engineering</Link></li>
              <li><Link href="/engineering-solutions" className="hover:text-white transition-colors">Industrial Automation</Link></li>
              <li><Link href="/services#website-dev" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Technical Support</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h4>
            <ul className="space-y-2 text-sm text-[#CFC8D8]/70">
              <li><Link href="/support#plans" className="hover:text-white transition-colors">Maintenance Plans</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Enterprise Inquiry</Link></li>
              <li>
                <button onClick={onOpenConsultation} className="text-[#C084FC] hover:text-[#B36CFF] text-left transition-colors font-medium">
                  Request Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#CFC8D8]/50">
            &copy; 2026 Synexis Technologies. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#CFC8D8]/50 hover:text-white transition-colors p-1 hover:bg-white/5 rounded">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#CFC8D8]/50 hover:text-white transition-colors p-1 hover:bg-white/5 rounded">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#CFC8D8]/50 hover:text-white transition-colors p-1 hover:bg-white/5 rounded">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
