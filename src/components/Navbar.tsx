"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Cpu, Shield, Server, Box, Layers, HelpCircle, Briefcase, Info, Mail, Settings } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", type: "mega_services" },
    { name: "Products", type: "mega_products" },
    { name: "AI Solutions", path: "/ai-solutions" },
    { name: "Industries", path: "/industries" },
    { name: "Engineering", path: "/engineering-solutions" },
    { name: "Support", path: "/support" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-[#120022]/80 backdrop-blur-md border-b border-white/5 shadow-glow"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Tagline */}
            <div className="flex flex-col">
              <Link href="/" className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Original.svg"
                  alt="ZYNOVRA TECHNOLOGIES (PVT) LTD"
                  className="h-[110px] w-auto object-contain"
                />
              </Link>
              {/* <span className="hidden md:inline-block text-[10px] text-[#CFC8D8]/60 mt-0.5 tracking-tight">
                Engineering the Future Through Intelligent Technology
              </span> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => {
                if (item.type) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.type || null)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-1 text-sm font-medium text-[#CFC8D8] hover:text-white py-2 transition-colors">
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.type ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  );
                }
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path || "/"}
                    className={`text-sm font-medium transition-colors ${isActive ? "text-[#C084FC] glow-text" : "text-[#CFC8D8] hover:text-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* <button
                onClick={onOpenConsultation}
                className="ml-4 bg-[#A855F7] hover:bg-[#B36CFF] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-glow hover:shadow-glow-lg"
              >
                Get Consultation
              </button> */}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#CFC8D8] hover:text-white p-2 rounded-lg"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menus */}
        <AnimatePresence>
          {activeDropdown === "mega_services" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveDropdown("mega_services")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 right-0 top-20 bg-[#1B0133]/95 backdrop-blur-xl border-b border-white/5 py-8 shadow-2xl z-30"
            >
              <div className="max-w-7xl mx-auto px-8 grid grid-cols-3 gap-8">
                {/* Column 1: Software Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                    <Server className="h-5 w-5 text-[#A855F7]" />
                    <h4 className="text-[#A855F7] font-semibold text-sm tracking-wider uppercase">
                      Software Solutions
                    </h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#CFC8D8]">
                    <li><Link href="/services#website-dev" className="hover:text-white transition-colors">Website Development</Link></li>
                    <li><Link href="/services#web-app-dev" className="hover:text-white transition-colors">Web Application Development</Link></li>
                    <li><Link href="/services#enterprise-sys" className="hover:text-white transition-colors">Enterprise Systems</Link></li>
                    <li><Link href="/services#erp" className="hover:text-white transition-colors">ERP Solutions</Link></li>
                    <li><Link href="/services#crm" className="hover:text-white transition-colors">CRM Solutions</Link></li>
                    <li><Link href="/services#hrm" className="hover:text-white transition-colors">HRM Systems</Link></li>
                    <li><Link href="/services#ims" className="hover:text-white transition-colors">Inventory Management (IMS)</Link></li>
                    <li><Link href="/services#lms" className="hover:text-white transition-colors">Learning Management (LMS)</Link></li>
                    <li><Link href="/services#pos" className="hover:text-white transition-colors">Point of Sale Systems (POS)</Link></li>
                    <li><Link href="/services#hospital-mgmt" className="hover:text-white transition-colors">Hospital Management Systems</Link></li>
                    <li><Link href="/services#custom-software" className="hover:text-white transition-colors">Custom Software Development</Link></li>
                  </ul>
                </div>

                {/* Column 2: AI & Automation */}
                <div>
                  <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                    <Cpu className="h-5 w-5 text-[#C084FC]" />
                    <h4 className="text-[#C084FC] font-semibold text-sm tracking-wider uppercase">
                      AI & Automation
                    </h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#CFC8D8]">
                    <li><Link href="/ai-solutions#ai-engineering" className="hover:text-white transition-colors">AI Engineering</Link></li>
                    <li><Link href="/ai-solutions#automation" className="hover:text-white transition-colors">Intelligent Automation</Link></li>
                    <li><Link href="/ai-solutions#chatbots" className="hover:text-white transition-colors">AI Chatbots</Link></li>
                    <li><Link href="/ai-solutions#predictive" className="hover:text-white transition-colors">Predictive Analytics</Link></li>
                    <li><Link href="/ai-solutions#computer-vision" className="hover:text-white transition-colors">Computer Vision Solutions</Link></li>
                    <li><Link href="/ai-solutions#ml" className="hover:text-white transition-colors">Machine Learning Systems</Link></li>
                    <li><Link href="/ai-solutions#recommendation" className="hover:text-white transition-colors">Recommendation Engines</Link></li>
                    <li><Link href="/ai-solutions#bi" className="hover:text-white transition-colors">Business Intelligence</Link></li>
                    <li><Link href="/ai-solutions#monitoring" className="hover:text-white transition-colors">Smart Monitoring Systems</Link></li>
                    <li><Link href="/ai-solutions#iot" className="hover:text-white transition-colors">IoT Solutions</Link></li>
                  </ul>
                </div>

                {/* Column 3: Engineering Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                    <Layers className="h-5 w-5 text-[#D8B4FE]" />
                    <h4 className="text-[#D8B4FE] font-semibold text-sm tracking-wider uppercase">
                      Engineering Solutions
                    </h4>
                  </div>
                  <ul className="space-y-2.5 text-sm text-[#CFC8D8]">
                    <li><Link href="/engineering-solutions#plc" className="hover:text-white transition-colors">PLC Programming</Link></li>
                    <li><Link href="/engineering-solutions#pcb" className="hover:text-white transition-colors">PCB Design</Link></li>
                    <li><Link href="/engineering-solutions#circuit" className="hover:text-white transition-colors">Circuit Design</Link></li>
                    <li><Link href="/engineering-solutions#embedded" className="hover:text-white transition-colors">Embedded Systems</Link></li>
                    <li><Link href="/engineering-solutions#industrial" className="hover:text-white transition-colors">Industrial Automation</Link></li>
                    <li><Link href="/engineering-solutions#electrical" className="hover:text-white transition-colors">Electrical System Design</Link></li>
                    <li><Link href="/engineering-solutions#smart-ind" className="hover:text-white transition-colors">Smart Industrial Solutions</Link></li>
                    <li><Link href="/engineering-solutions#sensor" className="hover:text-white transition-colors">Sensor Integrations</Link></li>
                    <li><Link href="/engineering-solutions#prototype" className="hover:text-white transition-colors">Hardware Prototyping</Link></li>
                    <li><Link href="/engineering-solutions#consulting" className="hover:text-white transition-colors">Technical Engineering Consultation</Link></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeDropdown === "mega_products" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveDropdown("mega_products")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute left-0 right-0 top-20 bg-[#1B0133]/95 backdrop-blur-xl border-b border-white/5 py-8 shadow-2xl z-30"
            >
              <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-6">
                <div className="col-span-1 border-r border-white/5 pr-6">
                  <h4 className="text-white font-bold text-lg mb-2">Our Platforms</h4>
                  <p className="text-[#CFC8D8]/70 text-xs mb-4">
                    Enterprise-ready products designed for scalability, analytics, and automation.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C084FC] hover:text-white transition-colors font-semibold"
                  >
                    View All Products &rarr;
                  </Link>
                </div>

                <div className="col-span-3 grid grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <Link href="/products#hrm" className="group block">
                      <h5 className="text-white group-hover:text-[#A855F7] font-semibold text-sm transition-colors">Zynovra HRM</h5>
                      <p className="text-[#CFC8D8]/60 text-xs mt-1">Human Resource Management Platform</p>
                    </Link>
                    <Link href="/products#ims" className="group block">
                      <h5 className="text-white group-hover:text-[#A855F7] font-semibold text-sm transition-colors">Zynovra IMS</h5>
                      <p className="text-[#CFC8D8]/60 text-xs mt-1">Inventory Management Platform</p>
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <Link href="/products#lms" className="group block">
                      <h5 className="text-white group-hover:text-[#A855F7] font-semibold text-sm transition-colors">Zynovra LMS</h5>
                      <p className="text-[#CFC8D8]/60 text-xs mt-1">Learning Management Platform</p>
                    </Link>
                    <Link href="/products#pos" className="group block">
                      <h5 className="text-white group-hover:text-[#A855F7] font-semibold text-sm transition-colors">Zynovra POS</h5>
                      <p className="text-[#CFC8D8]/60 text-xs mt-1">Modern POS Solution</p>
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <Link href="/products#erp" className="group block">
                      <h5 className="text-white group-hover:text-[#A855F7] font-semibold text-sm transition-colors">Zynovra ERP</h5>
                      <p className="text-[#CFC8D8]/60 text-xs mt-1">Enterprise Resource Planning</p>
                    </Link>
                    <Link href="/products#monitoring" className="group block">
                      <h5 className="text-white group-hover:text-[#A855F7] font-semibold text-sm transition-colors">Zynovra Smart Monitoring</h5>
                      <p className="text-[#CFC8D8]/60 text-xs mt-1">IoT and system status overview</p>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm z-50 bg-[#1B0133] border-l border-white/5 p-6 overflow-y-auto lg:hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/Original.svg"
                      alt="ZYNOVRA TECHNOLOGIES (PVT) LTD"
                      className="h-14 w-auto object-contain"
                    />
                  </Link>
                  <button onClick={() => setIsOpen(false)} className="text-[#CFC8D8] hover:text-white p-2">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  {navItems.map((item) => {
                    if (item.type === "mega_services") {
                      return (
                        <div key={item.name} className="space-y-2">
                          <button
                            onClick={() => toggleDropdown("services")}
                            className="flex items-center justify-between w-full text-[#CFC8D8] hover:text-white text-base font-semibold py-1.5"
                          >
                            Services
                            <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                          </button>
                          {activeDropdown === "services" && (
                            <div className="pl-4 space-y-2 border-l border-white/5 text-sm text-[#CFC8D8]/80">
                              <Link href="/services#software" className="block py-1 hover:text-white">Software Solutions</Link>
                              <Link href="/ai-solutions" className="block py-1 hover:text-white">AI & Automation</Link>
                              <Link href="/engineering-solutions" className="block py-1 hover:text-white">Engineering Solutions</Link>
                              <Link href="/services" className="block py-1 text-[#C084FC]">View All Services</Link>
                            </div>
                          )}
                        </div>
                      );
                    }

                    if (item.type === "mega_products") {
                      return (
                        <div key={item.name} className="space-y-2">
                          <button
                            onClick={() => toggleDropdown("products")}
                            className="flex items-center justify-between w-full text-[#CFC8D8] hover:text-white text-base font-semibold py-1.5"
                          >
                            Products
                            <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
                          </button>
                          {activeDropdown === "products" && (
                            <div className="pl-4 space-y-2 border-l border-white/5 text-sm text-[#CFC8D8]/80">
                              <Link href="/products#hrm" className="block py-1 hover:text-white">Zynovra HRM</Link>
                              <Link href="/products#ims" className="block py-1 hover:text-white">Zynovra IMS</Link>
                              <Link href="/products#lms" className="block py-1 hover:text-white">Zynovra LMS</Link>
                              <Link href="/products#pos" className="block py-1 hover:text-white">Zynovra POS</Link>
                              <Link href="/products#erp" className="block py-1 hover:text-white">Zynovra ERP</Link>
                              <Link href="/products" className="block py-1 text-[#C084FC]">View All Products</Link>
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.name}
                        href={item.path || "/"}
                        onClick={() => setIsOpen(false)}
                        className={`block text-base font-semibold py-1.5 ${pathname === item.path ? "text-[#C084FC]" : "text-[#CFC8D8] hover:text-white"
                          }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full bg-[#A855F7] hover:bg-[#B36CFF] text-white py-3 rounded-lg text-sm font-semibold text-center transition-colors shadow-glow"
                >
                  Get Consultation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to push content below sticky nav */}
      <div className="h-20" />
    </>
  );
}
