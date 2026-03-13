"use client";

import Image from "next/image";
import Link from "next/link";

// ─── Gallery photos from /public/gallery/ ─────────────────────────────
const GALLERY_PHOTOS = [
    "/gallery/IMG_0845.JPG",
    "/gallery/IMG_1280.JPG",
    "/gallery/IMG_1318.JPG",
    "/gallery/IMG_1319.JPG",
    "/gallery/IMG_1342.JPG",
    "/gallery/IMG_1371.JPG",
    "/gallery/IMG_1378.JPG",
    "/gallery/IMG_1380.JPG",
];

// ─── Simple inline marquee ─────────────────────────────────────────────
function PhotoMarquee({ photos, reverse = false }: { photos: string[]; reverse?: boolean }) {
    return (
        <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 h-full w-40 z-10 pointer-events-none bg-gradient-to-r from-bg-main to-transparent" />
            <div className="absolute right-0 top-0 h-full w-40 z-10 pointer-events-none bg-gradient-to-l from-bg-main to-transparent" />
            <div
                className="photo-marquee-track"
                style={{ animationDirection: reverse ? "reverse" : "normal" }}
            >
                {[...photos, ...photos].map((src, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-72 h-52 mx-2 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 hover:-translate-y-1.5 transition-all duration-300 group"
                    >
                        <Image
                            src={src}
                            alt={`Community moment ${i + 1}`}
                            width={288}
                            height={208}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                        />
                    </div>
                ))}
            </div>
            <style jsx>{`
        .photo-marquee-track {
          display: flex;
          width: max-content;
          animation: photo-scroll 30s linear infinite;
          will-change: transform;
        }
        .photo-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes photo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}

// ─── Main export ───────────────────────────────────────────────────────
export function Gallery() {
    // Row 1: first 8, Row 2: reversed for visual contrast
    const row2 = [...GALLERY_PHOTOS].reverse();

    return (
        <section className="py-20 bg-bg-main relative overflow-hidden w-full border-t border-white/5">
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Header Removed */}

            {/* Row 1 — left to right */}
            <div className="mb-4">
                <PhotoMarquee photos={GALLERY_PHOTOS} />
            </div>

            {/* Row 2 — right to left */}
            <div className="mb-14">
                <PhotoMarquee photos={row2} reverse />
            </div>

        </section>
    );
}
