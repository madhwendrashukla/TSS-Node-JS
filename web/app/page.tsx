"use client";

import { Hero } from "@/components/sections/Hero";
import { FounderManifesto } from "@/components/sections/FounderManifesto";
import { MentorsPreview } from "@/components/sections/MentorsPreview";
import { ToolsShowcase } from "@/components/sections/ToolsShowcase";
import { VideoAndGallery } from "@/components/sections/VideoAndGallery";
import { Contact } from "@/components/sections/Contact";
import { Programs } from "@/components/sections/Programs";
import { Gallery } from "@/components/sections/Gallery";
import { WorkshopPopup } from "@/components/sections/WorkshopPopup";
import Script from "next/script";

export default function Home() {
  return (
    <>

      {/* counter.dev analytics */}
      <Script 
        src="https://cdn.counter.dev/script.js" 
        data-id="2806e04d-b124-48cb-82a3-35ecd0d92aa8" 
        data-utcoffset="6" 
        strategy="afterInteractive"
      />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <MentorsPreview />
        <VideoAndGallery />
        <ToolsShowcase />
        <FounderManifesto />
        <Programs />
        <Gallery />
        <Contact />
      </main>

      {/* Fundraising Workshop Promotion Popup */}
      <WorkshopPopup />
    </>
  );
}
