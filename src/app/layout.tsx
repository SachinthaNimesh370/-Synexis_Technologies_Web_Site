import { Poppins } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "@/components/RootLayoutClient";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Synexis Technologies | Software, AI & Engineering Solutions",
  description: "Synexis Technologies provides enterprise software, AI engineering, automation, ERP systems, PLC, PCB design, and long-term technology support.",
  keywords: "enterprise software, AI engineering, industrial automation, ERP, PLC, PCB design, tech support, custom software",
  icons: {
    icon: "/Logo.svg",
  },
  openGraph: {
    title: "Synexis Technologies | Software, AI & Engineering Solutions",
    description: "Enterprise software, AI engineering, automation, ERP systems, PLC, PCB design, and long-term technology support.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-[#120022] text-white">
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
