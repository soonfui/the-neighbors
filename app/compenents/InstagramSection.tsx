"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, ArrowUpRight } from "lucide-react";

const posts = [
  {
    type: "image",
    image: "/images/ins/1.png",
    href: "https://www.instagram.com/reel/DXePsgWCLo0/",
  },
  {
    type: "image",
    image: "/images/ins/2.png",
    href: "https://www.instagram.com/reel/DWx3IruDHdQ/",
  },
  {
    type: "text",
    title: "Fresh Coffee Daily",
    subtitle: "Watch our latest reel",
    href: "https://www.instagram.com/theneighborsqa/",
  },
  {
    type: "image",
    image: "/images/ins/3.png",
    href: "https://www.instagram.com/reel/DWo-0N0jV_g/",
  },
  {
    type: "text",
    title: "Community Space",
    subtitle: "Inside the neighbors",
    href: "https://www.instagram.com/theneighborsqa/",
  },
  {
    type: "image",
    image: "/images/ins/4.png",
    href: "https://www.instagram.com/reel/DUyXzfXCAZx/",
  },
  {
    type: "image",
    image: "/images/ins/5.png",
    href: "https://www.instagram.com/reel/DUdm0rGCMEz/",
  },
  {
    type: "image",
    image: "/images/ins/6.png",
    href: "https://www.instagram.com/reel/DUQ-4IPDu4U/",
  },
];

export function InstagramSection() {
  return (
    <section className="bg-[#efe4cf] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Title */}
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#1f3b2f]/60">
            Social
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#1f3b2f]">
            Follow us on Instagram
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-[24px]"
            >
              {post.type === "image" ? (
                <>
                  <Image
                    src={post.image!}
                    alt="Instagram Post"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                </>
              ) : (
                <div className="flex h-full flex-col justify-between bg-[#1f3b2f] p-6 text-[#f3ead7] transition duration-500 group-hover:scale-[1.02]">
                  <Camera className="h-6 w-6" />

                  <div>
                    <h3 className="text-2xl font-bold leading-tight">
                      {post.title}
                    </h3>

                    <p className="mt-2 text-sm opacity-70">
                      {post.subtitle}
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://www.instagram.com/theneighborsqa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#1f3b2f] px-8 py-4 text-base font-bold text-[#f3ead7] transition hover:scale-[1.03]"
          >
            <Camera size={20} />
            theneighborsqa
          </a>
        </div>
      </div>
    </section>
  );
}
