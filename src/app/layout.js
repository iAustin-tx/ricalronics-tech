import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "Ricalronics Tech Ltd. | Engineering, Automation & Software Solutions",
    template: "%s | Ricalronics Tech Ltd.",
  },

  description:
    "Ricalronics Tech Ltd. provides smart hotel and home automation, electrical systems, solar energy, HVAC, CCTV and security, networking, IPTV, plumbing, MEPF and software development solutions.",

  keywords: [
    "Ricalronics Tech Ltd",
    "smart home automation",
    "smart hotel automation",
    "electrical engineering",
    "solar energy",
    "HVAC systems",
    "CCTV installation",
    "security systems",
    "network installation",
    "IPTV systems",
    "MEPF services",
    "software development",
    "Nigeria",
  ],

  authors: [{ name: "Ricalronics Tech Ltd." }],

  creator: "Ricalronics Tech Ltd.",
  publisher: "Ricalronics Tech Ltd.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

