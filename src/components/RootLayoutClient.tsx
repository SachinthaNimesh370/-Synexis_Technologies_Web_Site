"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ConsultationModal from "./ConsultationModal";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsConsultationOpen(true);
    window.addEventListener("open-consultation", handleOpen);
    return () => window.removeEventListener("open-consultation", handleOpen);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#120022] text-white">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />
      <main className="flex-grow">{children}</main>
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
