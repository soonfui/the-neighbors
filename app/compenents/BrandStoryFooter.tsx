"use client";

import { useState } from "react";

export default function BrandStoryFooter() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* BRAND STORY */}
      <section className="bg-[#1f3b2f] text-[#f3ead7] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="mx-auto max-w-[1600px] grid gap-14 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-[#f3ead7]/60">
              Our Story
            </p>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              <span className="block">
                Neighbors come for the coffee,
              </span>

              <span className="block text-[#f3ead7]/55">
                but stay for the feeling.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg md:text-xl leading-8 text-[#f3ead7]/75">
              A warm everyday place in Qatar serving specialty coffee,
              handcrafted drinks, and simple moments worth sharing.
            </p>
          </div>

          {/* RIGHT VIDEO */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 aspect-video bg-black">
              <video
                src="/video/1.mp4"
                className="h-full w-full object-cover opacity-90"
                muted
                loop
                autoPlay
                playsInline
              />

              <button
                onClick={() => setVideoOpen(true)}
                className="absolute bottom-5 left-5 rounded-full bg-[#f3ead7] px-6 py-3 text-sm font-bold text-[#1f3b2f] transition hover:scale-[1.03]"
              >
                ▶ Play Reel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO POPUP */}
      {videoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95">
          <div className="flex h-full items-center justify-center p-4 md:p-10">
            <div className="relative w-full max-w-6xl">
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 text-3xl text-white"
                aria-label="Close video"
              >
                ✕
              </button>

              <video
                src="/video/1.mp4"
                controls
                autoPlay
                playsInline
                className="w-full max-h-[85vh] rounded-2xl bg-black"
              />
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#1a3127] text-[#f3ead7] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-10 pb-12">
        <div className="mx-auto max-w-[1600px] flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* LEFT */}
          <div>
            <img
              src="/images/logo.png"
              alt="the neighbors"
              className="h-14 w-auto object-contain"
            />

            <p className="mt-5 text-sm text-[#f3ead7]/60">
              © 2026 the neighbors specialty coffee.
            </p>

            <div className="mt-4 space-y-1 text-sm text-[#f3ead7]/45 leading-relaxed">
              <p>Shop 9, Street 1143</p>
              <p>Al Furjan Market 24</p>
              <p>Rawdat Al Hamama, Qatar</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/theneighborsqa/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-[#f3ead7] hover:text-[#1f3b2f]"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/97433646262"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f3ead7] px-6 py-3 text-sm font-bold text-[#1f3b2f] transition hover:scale-[1.03]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}