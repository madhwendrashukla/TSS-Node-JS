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

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

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
