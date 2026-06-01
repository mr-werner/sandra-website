import React, { useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { motion } from "framer-motion";
import logo from "./assets/Atelier-Formare-Colorado-Interior-Design-Logo.png";
import logo_white from "./assets/Atelier-Formare-Colorado-Interior-Design-Logo-White.png";
import headshot from "./assets/Colorado-Interior-Design-Premiere-Consultant.jpg";
import { FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const instagram_link =
  "https://www.instagram.com/atelierformare?igsh=cjVnc2JyNmsycnBo";

const local_work_locations_list =
  "Aspen, Vail, Telluride, Cherry Hills, Castle Pines, Greenwood Village, Lone Tree, Superior, Louisville, Boulder, Golden, Denver, Longmont, Loveland, and Fort Collins.";

const colors = {
  ink: "#3a3a3a",
  olive: "#797d5c",
  wine: "#6e2c2c",
  stone: "#d8cfc4",
  ivory: "#f4f1ea",
};

const services = [
  {
    title: "Design Consultation",
    text: "A focused design session for clients who want expert guidance, clarity, and direction before making decisions.",
    summary:
      "A one-time consultation designed to help you move forward with confidence. This service is ideal when you need professional insight on layout, color, furniture, styling, and general design direction.",
    includes: [
      "Private Consultation",
      "Layout and furniture placement guidance",
      "Styling and decor direction",
      "Paint & color palette suggestions",
      "Follow-up notes with key recommendations",
    ],
  },
  {
    title: "Room Refresh",
    text: "Focused updates for individual rooms using styling, layout improvements, and layered finishing touches.",
    summary:
      "A refined refresh for spaces that need new energy without a complete redesign. This service focuses on improving what already exists while introducing thoughtful updates that make the room feel more complete.",
    includes: [
      "Existing room review",
      "Furniture placement recommendations",
      "Styling and decor direction",
      "Color and finish updates",
      "Accessory and textile suggestions",
      "Implementation guidance",
    ],
  },
  {
    title: "Signature Room Design",
    text: "A full design experience for clients who want a thoughtful, cohesive, and livable space.",
    summary:
      "A comprehensive room-focused design service for clients who want a polished and cohesive space. Every detail is considered, from the room’s purpose and flow to furnishings, finishes, lighting, and styling.",
    includes: [
      "Design concept development",
      "Space planning and layout direction",
      "Furniture recommendations",
      "Color palette development",
      "Material and finish selections",
      "Lighting and styling guidance",
      "Decor and accessory direction",
      "Final design presentation",
    ],
  },
  {
    title: "Designer by the Hour",
    text: "Expert interior design consulting in a flexible pay-as-you-go format.",
    summary:
      "Flexible design support for clients who need help with specific decisions. This is ideal for reviewing plans, selecting finishes, sourcing pieces, or troubleshooting design challenges without committing to a larger package.",
    includes: [
      "Hourly professional design guidance",
      "Furniture, finish, and decor input",
      "Floor plan or layout review",
      "Sourcing support",
      "Decision-making support",
      "Design troubleshooting",
    ],
  },
];

function SocialLinks({ light = false }) {
  const iconColor = light ? "#f4f1ea" : "#6e2c2c";

  return (
    <div className="flex items-center gap-4 text-[22px]">
      <a
        href={instagram_link}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram style={{ color: iconColor }} />
      </a>
    </div>
  );
}

export default function AtelierFormareHome() {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <Helmet>
        <title>Atelier Formare | Interior Design Studio in Colorado</title>

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
              <span className="pl-2 text-[12px] uppercase tracking-[0.22em] text-[#3a3a3a]">
                Interior Design
              </span>
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

              <a href="#contact" className="hover:text-[#6e2c2c]">
                Contact
              </a>
            </nav>

            <div className="hidden md:block">
              <SocialLinks />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md border border-black/15 p-2 md:hidden"
              aria-label="Open mobile menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="border-t border-black/10 bg-[#f4f1ea] md:hidden">
              <nav className="mx-auto flex max-w-[1180px] flex-col px-4 py-4 text-[12px] uppercase tracking-[0.14em] text-black/65">
                <a
                  href="#services"
                  className="py-3 hover:text-[#6e2c2c]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>

                <a
                  href="#work"
                  className="py-3 hover:text-[#6e2c2c]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work
                </a>

                <a
                  href="#about"
                  className="py-3 hover:text-[#6e2c2c]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="py-3 hover:text-[#6e2c2c]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>

                <div className="pt-4">
                  <SocialLinks />
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* HERO */}

        <section className="px-4 pb-10 pt-20 md:px-6">
          <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-xl bg-[#d8cfc4] md:grid-cols-[1.2fr_0.8fr]">
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
                Atelier Formare is a Colorado based interior design studio
                specializing in modern, warm,
                European/Scandinavian/Mediterranean-inspired residential
                interiors. Locally serving in-person for many Colorado locations
                like {local_work_locations_list} As well as worldwide clients
                through virtual interior design consultations.
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
                From full-home design to smaller styling updates, each service
                is built around creating a home that feels warm, functional,
                collected, and deeply personal.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer border-t border-black/15 px-4 py-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#6e2c2c] hover:bg-[#d8cfc4]/60 hover:shadow-lg"
                >
                  <h3 className="text-2xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#6e2c2c]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
                    {service.text}
                  </p>

                  <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[#6e2c2c] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View Details →
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SIGNATURE SPACES */}

        <section id="work" className="px-4 py-14 md:px-6">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-[13px] uppercase tracking-[0.28em] text-[#6e2c2c]">
              Signature Spaces
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Timeless interiors designed with purpose.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Warm & Collected Living Spaces",
                  subtitle: "Full-Service Interior Design",
                  description:
                    "Layered furnishings, natural materials, and thoughtful layouts designed for daily living.",
                  image:
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
                },
                {
                  title: "Refined Kitchens & Dining Areas",
                  subtitle: "Renovation + Selection Support",
                  description:
                    "Finish palettes, fixtures, surfaces, and selections that bring cohesion to the heart of the home.",
                  image:
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
                },
                {
                  title: "Quiet Bedroom Retreats",
                  subtitle: "Furnishing + Styling",
                  description:
                    "Soft textures, calming palettes, and curated details that create restful, personal spaces.",
                  image:
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
                },
              ].map((space) => (
                <div
                  key={space.title}
                  className="group rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#ece6de] hover:shadow-xl"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#6e2c2c]">
                    {space.title}
                  </h3>

                  <p className="mt-2 text-base text-black/55 transition-colors duration-300 group-hover:text-black/75">
                    {space.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-black/55 transition-colors duration-300 group-hover:text-black/70">
                    {space.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowInquiryForm(true)}
                    className="mt-5 inline-flex cursor-pointer items-center text-[12px] uppercase tracking-[0.18em] text-[#6e2c2c] transition-all duration-300 group-hover:translate-x-1 hover:text-black"
                  >
                    Discuss Similar Project →
                  </button>
                </div>
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
                Transforming ideas & spaces that not only look beautiful, but
                feel like home.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
                Design, is about more than aesthetics — it’s about creating
                spaces that truly reflect the people who live in them.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
                Originally from Germany with a background in aerospace
                engineering, Sandra brings a unique balance of precision,
                creativity, and human-centered design to every space she
                touches.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
                Many clients come to her knowing they want something different,
                but struggling to visualize what that looks like. Through
                thoughtful collaboration and an intuitive understanding of
                personality and lifestyle, she helps bridge the gap between
                uncertainty and clarity.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
                The result is a design experience that feels approachable,
                inspiring, and uniquely tailored to the people living in it.
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
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                <p className="text-[13px] uppercase tracking-[0.28em] text-white/70">
                  Project Inquiries
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                  Let’s shape the feeling of home.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/65">
                  Atelier Formare is a Colorado interior design studio
                  specializing in warm, refined, European-inspired residential
                  interiors.
                </p>

                <button
                  type="button"
                  onClick={() => setShowInquiryForm(true)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f4f1ea] px-6 py-3 text-xs uppercase tracking-[0.16em] text-[#3a3a3a] hover:bg-[#d8cfc4]"
                >
                  Start a Project
                  <ArrowRight size={15} />
                </button>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                  Contact
                </p>

                <div className="mt-4 flex items-center gap-4 border-b border-white/15 pb-5">
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em]">
                      Atelier Formare
                    </h3>

                    <p className="mt-1 text-sm text-white/60">
                      Interior Design
                    </p>
                  </div>

                  <div className="flex flex-1 justify-center">
                    <img
                      src={logo_white}
                      alt="Atelier Formare Logo"
                      className="h-22 w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      Email
                    </p>

                    <a
                      href="mailto:hello@atelierformare.com"
                      className="mt-2 block break-all text-sm text-white/80 hover:text-white"
                    >
                      hello@atelierformare.com
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                      Phone
                    </p>

                    <a
                      href="tel:+17208228497"
                      className="mt-2 block text-sm text-white/80 hover:text-white"
                    >
                      (720) 822-8497
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Serving
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    <span className="font-semibold text-white">
                      Private Design Consultation:{" "}
                    </span>
                    {local_work_locations_list}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    <span className="font-semibold text-white">
                      Virtual Design Consultation:{" "}
                    </span>
                    Worldwide
                  </p>
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.18em] text-white/45">
                      Follow Along
                    </p>

                    <SocialLinks light />
                  </div>

                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    © 2026 Atelier Formare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* SERVICES MODAL */}

        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-[#f4f1ea] p-8 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 text-2xl leading-none text-black/50 hover:text-[#6e2c2c]"
                aria-label="Close service details"
              >
                ×
              </button>

              <p className="text-[12px] uppercase tracking-[0.24em] text-[#6e2c2c]">
                Service Details
              </p>

              <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em]">
                {selectedService.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-black/65">
                {selectedService.summary}
              </p>

              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6e2c2c]">
                  Includes
                </p>

                <div className="mt-4 space-y-3">
                  {selectedService.includes.map((item) => (
                    <div
                      key={item}
                      className="border-l border-[#b8a996] pl-4 text-sm leading-6 text-black/75 transition-all duration-300 hover:border-[#6e2c2c] hover:pl-5"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedService(null);
                  setShowInquiryForm(true);
                }}
                className="mt-8 rounded-full bg-[#6e2c2c] px-6 py-3 text-xs uppercase tracking-[0.16em] text-white transition hover:bg-[#5a2323]"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        )}

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
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const humanCheck = formData.get("humanCheck");

                  if (humanCheck !== "7") {
                    alert("Please answer the human check correctly.");
                    return;
                  }

                  const payload = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    location: formData.get("location"),
                    projectType: formData.get("projectType"),
                    budget: formData.get("budget"),
                    message: formData.get("message"),
                    humanCheck,
                    website: formData.get("website"),
                  };

                  try {
                    const response = await fetch("/api/contact", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(payload),
                    });

                    if (!response.ok) {
                      throw new Error("Failed to send inquiry");
                    }

                    alert("Thank you! Your inquiry has been sent.");
                    form.reset();
                  } catch (error) {
                    console.error(error);
                    alert("Something went wrong. Please try again.");
                  }
                }}
                className="mt-6 grid gap-4"
              >
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    name="name"
                    placeholder="Name"
                    required
                    className="rounded-lg border border-black/15 bg-white/60 p-4"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="rounded-lg border border-black/15 bg-white/60 p-4"
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    className="rounded-lg border border-black/15 bg-white/60 p-4"
                  />

                  <input
                    name="location"
                    placeholder="Location"
                    className="rounded-lg border border-black/15 bg-white/60 p-4"
                  />

                  <select
                    name="projectType"
                    className="rounded-lg border border-black/15 bg-white/60 p-4 text-black/65"
                  >
                    <option value="">Project Type</option>
                    <option value="Design Consultation">
                      Design Consultation
                    </option>
                    <option value="Room Refresh">Room Refresh</option>
                    <option value="Signature Room Design">
                      Signature Room Design
                    </option>
                    <option value="Designer by the Hour">
                      Designer by the Hour
                    </option>
                    <option value="Full-Service Interior Design">
                      Full-Service Interior Design
                    </option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>

                  <select
                    name="budget"
                    className="rounded-lg border border-black/15 bg-white/60 p-4 text-black/65"
                  >
                    <option value="">Budget Range</option>
                    <option value="Under $10,000">Under $10,000</option>
                    <option value="$10,000–$25,000">$10,000–$25,000</option>
                    <option value="$25,000–$50,000">$25,000–$50,000</option>
                    <option value="$50,000–$100,000">$50,000–$100,000</option>
                    <option value="$100,000+">$100,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  required
                  className="min-h-[180px] rounded-lg border border-black/15 bg-white/60 p-4"
                />

                <label className="text-sm text-black/65">
                  Human check: What is 3 + 4?
                  <input
                    name="humanCheck"
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