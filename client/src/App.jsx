import React, { useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { motion } from "framer-motion";
import logo from "./assets/Atelier-Formare-Colorado-Interior-Design-Logo.png";
import headshot from "./assets/Colorado-Interior-Design-Premiere-Consultant.jpg"
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const instagram_link = "https://www.instagram.com/atelierformare?igsh=cjVnc2JyNmsycnBo";
const facebook_link = "";
const pinterest_link = "";

const local_work_locations_list = "all areas in the state of Colorado such as: Aspen, Vail, Telluride, Cherry Hills, Castle Pines, Greenwood Village, Lone Tree, Superior, Louisville, Boulder, Golden, Denver, Longmont, Loveland, Fort Collins, "

const colors = {
  ink: "#3a3a3a",
  olive: "#797d5c",
  wine: "#6e2c2c",
  stone: "#d8cfc4",
  ivory: "#f4f1ea",
};

const projects = [
  {
    title: "Warm Minimal Residence",
    type: "Full-Service Design",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Collected Dining Room",
    type: "Furnishing + Styling",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Quiet Bedroom Retreat",
    type: "Material Palette",
    image:
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=1200&auto=format&fit=crop",
  },
];

function SocialLinks({ light = false }) {
  const iconColor = light ? "#f4f1ea" : "#6e2c2c";

  return (
    <div className="flex items-center gap-4 text-[22px]">
      <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
        <FaFacebook style={{ color: iconColor }} />
      </a>

      <a href={instagram_link} target="_blank" rel="noreferrer" aria-label="Instagram">
        <FaInstagram style={{ color: iconColor }} />
      </a>

      <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
        <FaPinterest style={{ color: iconColor }} />
      </a>
    </div>
  );
}

export default function AtelierFormareHome() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  return (
<>

    <Helmet>
        <title>
          Atelier Formare | Interior Design Studio in Colorado
        </title>

        <meta
          name="description"
          content="Modern European-inspired interior design studio serving Northern Colorado, Denver, Boulder, and clients nationwide through virtual consultations."
        />

        <meta
          name="keywords"
          content="Interior Designer Fort Collins, Northern Colorado Interior Design, Modern Interior Design Colorado, European Interior Design"
        />
      </Helmet>

      <main
        className="min-h-screen"
        style={{
          backgroundColor: colors.ivory,
          color: colors.ink,
        }}
      >

        {/* HEADER */}

        <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f4f1ea]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-3 md:px-6">
            <a
              href="#"
              className="text-[15px] uppercase tracking-[0.22em] text-[#3a3a3a]"
            >
              Atelier Formare | 

              <a 
              href="#"
              className = "text-[12px] pl-2 uppercase tracking-[0.22em] text-[#3a3a3a]"
              >
                 Interior Design Studio
              </a>

            </a>


            <nav className="hidden items-center gap-6 text-[12px] uppercase tracking-[0.14em] text-black/65 md:flex">
              <a href="#services" className="hover:text-[#6e2c2c]">
                Services
              </a>

              <a href="#work" className="hover:text-[#6e2c2c]">
                Work
              </a>

              <a href="#about" className="hover:text-[#6e2c2c]">
                About
              </a>

              <button
                type="button"
                onClick={() => setShowInquiryForm(true)}
                className="cursor-pointer bg-transparent border-none p-0 uppercase tracking-[0.14em] text-[12px] text-black/65 hover:text-[#6e2c2c] transition-colors"
              >
                Contact
              </button>
            </nav>

            <div className="hidden md:block">
              <SocialLinks />
            </div>

            <button className="rounded-md border border-black/15 p-2 md:hidden">
              <Menu size={20} />
            </button>
          </div>
        </header>

        {/* HERO */}

        <section className="px-4 pb-10 pt-20 md:px-6">
          <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-xl bg-[#d8cfc4] md:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 md:p-10">
              <img
                src={logo}
                alt="Atelier Formare"
                className="mb-8 h-32 w-auto object-contain md:h-36"
              />

              <p className="mb-4 text-[12px] uppercase tracking-[0.22em] text-[#6e2c2c]">
                Boutique Residential Interiors
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="max-w-2xl text-[clamp(2.3rem,4.2vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.05em]"
              >
                Warm & refined interiors for real life.
              </motion.h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-black/65">
                Atelier Formare is a Colorado interior design studio specializing in modern,
                warm, European-inspired residential interiors serving in-person {local_work_locations_list}
                and worldwide through virtual interior design consultations.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowInquiryForm(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#5a2323] px-5 py-3 text-xs uppercase tracking-[0.16em] text-[#f4f1ea] hover:bg-[#797d5c]"
                >
                  Start a project
                  <ArrowRight size={15} />
                </button>

                <a
                  href="#work"
                  className="rounded-full border border-black/20 px-5 py-3 text-xs uppercase tracking-[0.16em] text-black/70 hover:border-[#6e2c2c] hover:text-[#6e2c2c]"
                >
                  View work
                </a>
              </div>
            </div>

            <div className="relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1300&auto=format&fit=crop"
                alt="Interior"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section id="services" className="px-4 py-14 md:px-6">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-[13px] uppercase tracking-[0.28em] text-[#6e2c2c]">
              Services
            </p>

            <div className="mt-4 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <h2 className="text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                Design services tailored to the way you live.
              </h2>

              <p className="max-w-2xl text-base leading-7 text-black/65 md:pt-3">
                From full-home design to smaller styling updates, each service is built
                around creating a home that feels warm, functional, collected, and
                deeply personal.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "Full-Service Interior Design",
                  text: "A complete design experience covering layout, materials, furnishings, decor, and styling from concept through completion.",
                },
                {
                  title: "Furniture + Decor Sourcing",
                  text: "Curated furniture, lighting, textiles, art, and accessories selected to bring warmth and cohesion to your space.",
                },
                {
                  title: "Finish Palettes for Remodels",
                  text: "Thoughtful selections for paint, flooring, tile, cabinetry, hardware, fixtures, and other key remodel finishes.",
                },
                {
                  title: "Room Refreshes + Styling",
                  text: "Focused updates for individual rooms using new styling, layout improvements, and layered finishing touches.",
                },
              ].map((service) => (
                <article key={service.title} className="border-t border-black/15 py-6">
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}

        <section id="work" className="px-4 py-14 md:px-6">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-8">
              <p className="text-[13px] uppercase tracking-[0.28em] text-[#6e2c2c]">
                Selected Work
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                Create own. Quiet, comfortable spaces with character.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title}>
                  <div className="overflow-hidden rounded-lg bg-[#d8cfc4]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[280px] w-full object-cover transition duration-700 hover:scale-[1.04]"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-medium">{project.title}</h3>

                  <p className="mt-1 text-sm text-black/55">{project.type}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section id="about" className="px-4 py-14 md:px-6">
          <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div className="overflow-hidden rounded-lg bg-[#d8cfc4]">
              <img
                src={headshot}
                alt="Designer portrait"
                className="h-[620px] w-full object-cover object-[center_75%]"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[13px] uppercase tracking-[0.28em] text-[#6e2c2c]">
                About Me
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                Transforming ideas & spaces that not only look beautiful, but feel like home.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
                Design, is about more than aesthetics — it’s about creating spaces that truly reflect the people who live in them.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
                Originally from Germany with a background in aerospace engineering, 
                Sandra brings a unique balance of precision, creativity, and human-centered design to every space she touches.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
              Many clients come to her knowing they want something different, but struggling to visualize what that looks like. 
              Through thoughtful collaboration and an intuitive understanding of personality and lifestyle, she helps bridge the gap between uncertainty and clarity.
              </p>
              
              <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
              The result is a design experience that feels approachable, inspiring, and uniquely tailored to the people living in it.
              </p>

            </div>
          </div>
        </section>

        {/* FOOTER */}

       <footer
          id="contact"
          className="bg-[#70745b] px-4 py-12 text-[#f4f1ea] md:px-6"
        >
          <div className="mx-auto max-w-[1180px]">

            {/* TOP FOOTER */}
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              
              <div>
                <p className="text-[13px] uppercase tracking-[0.28em] text-white/70">
                  Project Inquiries
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                  Let’s shape the feeling of home.
                </h2>

                <button
                  type="button"
                  onClick={() => setShowInquiryForm(true)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f4f1ea] px-6 py-3 text-xs uppercase tracking-[0.16em] text-[#3a3a3a] hover:bg-[#d8cfc4]"
                >
                  Start a Project
                  <ArrowRight size={15} />
                </button>
              </div>

              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/65">
                  Follow Along
                </p>

                <SocialLinks light />
              </div>
            </div>

            {/* SEO / LOWER FOOTER */}
            <div className="mt-12 border-t border-white/15 pt-6">
              <p className="max-w-3xl text-sm leading-relaxed text-white/60">
                Atelier Formare is a Colorado interior design studio
                specializing in modern, warm, European-inspired residential interiors.
                Serving locally {local_work_locations_list}
                as well as clients worldwide through virtual interior design consultations.
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/40">
                © 2026 Atelier Formare
              </p>
            </div>

          </div>
        </footer>
        {/* INQUIRY MODAL */}

        {showInquiryForm && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            onClick={() => setShowInquiryForm(false)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-[#f4f1ea] p-6 text-[#3a3a3a] shadow-2xl md:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowInquiryForm(false)}
                className="absolute right-4 top-4 text-2xl leading-none text-black/50 hover:text-black"
                aria-label="Close inquiry form"
              >
                ×
              </button>

              <p className="text-[13px] uppercase tracking-[0.28em] text-[#6e2c2c]">
                Contact
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-[-0.04em]">
                Tell us a little about your project.
              </h2>

              <form
                action="mailto:hello@atelierformare.com"
                method="POST"
                encType="text/plain"
                className="mt-6 grid gap-4"
              >
                <input
                  name="Name"
                  placeholder="Name"
                  required
                  className="rounded-lg border border-black/15 bg-white/60 p-4"
                />

                <input
                  name="Email"
                  type="email"
                  placeholder="Email"
                  required
                  className="rounded-lg border border-black/15 bg-white/60 p-4"
                />

                <input
                  name="Phone"
                  placeholder="Phone"
                  className="rounded-lg border border-black/15 bg-white/60 p-4"
                />

                <input
                  name="Budget"
                  placeholder="Budget Range" 
                  className="rounded-lg border border-black/15 bg-white/60 p-4"
                />

                <textarea
                  name="Project Details"
                  placeholder="Tell us about your project"
                  required
                  className="min-h-[130px] rounded-lg border border-black/15 bg-white/60 p-4"
                />


                <label className="text-sm text-black/65">
                  Human check: What is 3 + 4?
                  <input
                    name="Human Check"
                    placeholder="Answer"
                    required
                    pattern="7"
                    className="mt-2 w-full rounded-lg border border-black/15 bg-white/60 p-4"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#797d5c] px-6 py-3 text-xs uppercase tracking-[0.16em] text-[#f4f1ea] hover:bg-[#565b43]"
                >
                  Submit inquiry
                  <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}