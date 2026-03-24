import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ChatBotGate from "@/components/layout/ChatBotGate";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thestartupschool.in"),
  title: "The Startup School | An Alternate B-School for Aspiring Founders",
  description: "An alternate B-School for all Aspiring Founders. Bridging the 4 deadly gaps of Learning, Access, Mentoring, and Community.",
  keywords: ["Startup School India", "Entrepreneurship Program India", "Founder Community", "Startup Mentorship", "B-School for Founders", "Startup Incubator India", "Learn Fundraising", "Angel Investors India", "Startup Education", "The Startup School", "Aspiring Founders", "Startup Cohort India", "Business School Alternative"],
  authors: [{ name: "Gaurav Bansal" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "The Startup School | An Alternate B-School for Aspiring Founders",
    description: "An alternate B-School for all Aspiring Founders. Bridging the 4 deadly gaps of Learning, Access, Mentoring, and Community.",
    url: "https://thestartupschool.in",
    siteName: "The Startup School",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "The Startup School Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Startup School | An Alternate B-School for Aspiring Founders",
    description: "An alternate B-School for all Aspiring Founders.",
    creator: "@TheStartupSchool",
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18024116278" strategy="afterInteractive" />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18024116278');
          `}
        </Script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased bg-bg-main text-text-primary selection:bg-accent-blue selection:text-white overflow-x-hidden`}
      >
        <Navbar />
        <main className="min-h-screen overflow-x-hidden w-full">
          {children}
        </main>
        <Footer />
        <ChatBotGate />
      </body>
    </html>
  );
}
