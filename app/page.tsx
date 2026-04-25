import Image from "next/image";
import { SiteNav } from "./compenents/SiteNav";
import { InstagramSection } from "./compenents/InstagramSection";
import BrandStoryFooter from "./compenents/BrandStoryFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3ead7] text-[#1f3b2f]">
      <SiteNav/>
      {/* Hero */}
      <section className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-28 md:pt-36 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] opacity-70">
              Specialty Coffee • Qatar
            </p>

            <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl">
              the neighbors
            </h1>

            <p className="mt-5 text-lg leading-8 text-[#1f3b2f]/75 max-w-xl">
              ذا نيبرز قهوة مختصة — crafted coffee, warm space, and fresh
              sandwiches inspired by community and everyday rituals.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/menu"
                className="flex h-12 items-center justify-center rounded-full bg-[#1f3b2f] px-7 text-sm font-medium text-[#f3ead7] transition-transform hover:scale-[1.03]"
              >
                View Menu
              </a>

              <a
                href="https://wa.me/97433646262"
                target="_blank"
                className="flex h-12 items-center justify-center rounded-full border border-[#1f3b2f]/20 px-7 text-sm font-medium transition-colors hover:bg-[#1f3b2f] hover:text-[#f3ead7]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-[#1f3b2f]/10 shadow-2xl">
              <Image
                src="/images/ins/menu.jpeg"
                alt="The Neighbors menu"
                width={900}
                height={1200}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="border-y border-[#1f3b2f]/10 bg-[#efe4cf]">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-8">
          <p className="text-center text-sm md:text-base tracking-wide">
            Espresso • Filter Coffee • Signature Drinks • Fresh Sandwiches •
            Community Space
          </p>
        </div>
      </section>
      <InstagramSection/>

      {/* About */}
      <section className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.28em] opacity-60">
              About Us
            </p>
            <h2 className="text-4xl font-bold tracking-tight">
              Coffee made for neighbors.
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#1f3b2f]/75">
            The Neighbors is a specialty coffee destination in Qatar focused on
            quality beans, welcoming hospitality, and everyday comfort. Designed
            for morning routines, casual meetings, and slow afternoons.
          </p>
        </div>
      </section>

      {/* CONTACT */}
<section
  id="contact"
  className="bg-[#f3ead7] text-[#1f3b2f] px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-24 md:py-32"
>
  <div className="mx-auto max-w-[1600px]">
    {/* TOP CENTER LOGO IMAGE */}
    <div className="mb-16 flex justify-center">
      <img
        src="/images/logo.png"
        alt="the neighbors specialty coffee"
        width={420}
        height={180}
        className="h-auto w-auto max-w-[280px] sm:max-w-[340px] md:max-w-[420px] object-contain"
      />
    </div>

    {/* GRID */}
    <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
      {/* LEFT */}
      <div>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-tight">
          Let’s meet for coffee.
        </h3>

        {/* PHONE */}
        <div className="mb-10 border-b border-[#1f3b2f]/10 pb-8">
          <p className="text-2xl md:text-3xl font-bold mb-3">Phone</p>

          <a
            href="https://wa.me/97433646262"
            target="_blank"
            className="text-lg md:text-xl opacity-75 hover:opacity-100 transition"
          >
            +974 3364 6262
          </a>
        </div>

        {/* ADDRESS */}
        <div className="mb-10 border-b border-[#1f3b2f]/10 pb-8">
          <p className="text-2xl md:text-3xl font-bold mb-3">Address</p>

          <p className="text-lg md:text-xl opacity-75 leading-relaxed">
            Shop 9, Street 1143
            <br />
            Al Furjan Market 24
            <br />
            Rawdat Al Hamama, Qatar
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="https://wa.me/97433646262"
            target="_blank"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f3b2f] px-7 text-sm font-bold text-[#f3ead7] transition hover:scale-[1.03]"
          >
            WhatsApp Us
          </a>

          <a
            href="https://share.google/CZAfP2R1Vl2z7YTyM"
            target="_blank"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#1f3b2f]/15 px-7 text-sm font-bold transition hover:bg-[#1f3b2f] hover:text-[#f3ead7]"
          >
            Open in Maps
          </a>
        </div>
      </div>

      {/* RIGHT MAP */}
      <div className="overflow-hidden rounded-[28px] border border-[#1f3b2f]/10 shadow-xl h-[420px] md:h-[560px]">
        <iframe
          src="https://maps.google.com/maps?q=Rawdat%20Al%20Hamama%20Qatar&z=15&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          title="The Neighbors Map"
        />
      </div>
    </div>
  </div>
</section>

    <BrandStoryFooter/>
    </main>
  );
}
