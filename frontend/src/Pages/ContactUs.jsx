import React, { useState } from "react";
import {
  FiMail,
  FiMessageCircle,
  FiLinkedin,
  FiGlobe,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

import ceoImage from "../assets/ceo.jpeg";
import hammadImage from "../assets/hammad.jpeg";
import farazImage from "../assets/faraz.jpeg";

const teamMembers = [
  {
    name: "Muhammad Huzaifa",
    role: "Founder & Link Building",
    phone: "923266023011",
    displayPhone: "+92 326 6023011",
    email: "traderakmedia@gmail.com",
    linkedin: "https://www.linkedin.com/in/huzaifa-linkbuilding/",
    service: "Guest Posting, Link Building & Custom Placements",
    message:
      "Hi Muhammad Huzaifa, I'm interested in Trade Rank Media's link building services. I'd like to discuss my campaign requirements and custom placement opportunities.",
    image: ceoImage,
  },
  {
    name: "Faraz Ahmed",
    role: "Outreach & Link Building",
    phone: "923136347962",
    displayPhone: "+92 313 6347962",
    email: "mughalfaraz810@gmail.com",
    linkedin: "https://www.linkedin.com/in/faraz-ahmad-linkbuilding/",
    service: "Guest Posting, Link Insertion & Publisher Outreach",
    message:
      "Hi Faraz, I'm interested in guest posting, link insertion, and publisher outreach services. I'd like to discuss my campaign requirements and available opportunities.",
    image: farazImage,
  },
  {
    name: "Ali Hammad",
    role: "Web Development",
    phone: "923114237376",
    displayPhone: "+92 311 4237376",
    email: "traderankmedia@gmail.com",
    linkedin: "https://www.linkedin.com/in/ali-hammad-123334440/",
    service: "Business Websites, React Development & Landing Pages",
    message:
      "Hi Hammad, I'm interested in your web development services. I'd like to discuss my website requirements and how we can get started.",
    image: hammadImage,
  },
];

const companyEmail = "traderankmedia@gmail.com";

const inputClass =
  "w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-black";

const labelClass = "mb-2 block text-sm font-bold text-black";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: "Guest Posting",
    industry: "",
    country: "",
    requirements: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Trade Rank Media Inquiry - ${formData.service}`
    );

    const body = encodeURIComponent(
      `New Campaign Inquiry\n\n` +
        `Name: ${formData.name}\n` +
        `Business Email: ${formData.email}\n` +
        `Company / Website: ${formData.website || "Not provided"}\n` +
        `Service Required: ${formData.service}\n` +
        `Target Industry: ${formData.industry || "Not specified"}\n` +
        `Target Country: ${formData.country || "Not specified"}\n\n` +
        `Campaign Requirements:\n${formData.requirements}`
    );

    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main
      className="min-h-screen bg-white text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* Hero */}
      <section className="border-b border-neutral-200 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
              Trade Rank Media / Contact
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let's Discuss Your Link Building Needs
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600 sm:text-lg">
              Looking for relevant publishers, guest posting opportunities,
              or niche edits for your next campaign? Tell us what you need,
              and our team will help you explore suitable placement options.
            </p>

            <a
              href="#contact-form"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800"
            >
              Get in Touch
              <FiMessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="bg-neutral-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
              Meet The Team
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Our Team
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
              Connect directly with the right team member for link building,
              publisher outreach, or web development.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => {
              const whatsappLink = `https://wa.me/${member.phone}?text=${encodeURIComponent(
                member.message
              )}`;

              const emailLink = `mailto:${member.email}?subject=${encodeURIComponent(
                `Trade Rank Media Inquiry - ${member.service}`
              )}`;

              return (
                <article
                  key={member.name}
                  className="flex h-full flex-col overflow-hidden border border-neutral-200 bg-white transition duration-300 hover:border-neutral-400"
                >
                  <div className="h-72 overflow-hidden bg-neutral-100 sm:h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-xl font-bold">{member.name}</h3>

                    <p className="mt-2 text-sm font-semibold text-neutral-500">
                      {member.role}
                    </p>

                    <div className="mt-6 flex-1 space-y-5">
                      <div>
                        <p className={labelClass}>Services</p>
                        <p className="text-sm leading-6 text-neutral-600">
                          {member.service}
                        </p>
                      </div>

                      <div>
                        <p className={labelClass}>WhatsApp</p>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 break-words text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-black"
                        >
                          <FiMessageCircle size={16} />
                          {member.displayPhone}
                        </a>
                      </div>

                      <div>
                        <p className={labelClass}>Email</p>
                        <a
                          href={emailLink}
                          className="inline-flex items-start gap-2 break-all text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-black"
                        >
                          <FiMail className="mt-0.5 shrink-0" size={16} />
                          {member.email}
                        </a>
                      </div>

                      <div>
                        <p className={labelClass}>LinkedIn</p>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-black"
                        >
                          <FiLinkedin size={16} />
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-black px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-neutral-800"
                      >
                        <FiMessageCircle size={17} />
                        Contact {member.name.split(" ")[0]}
                      </a>

                      <a
                        href={emailLink}
                        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3.5 text-center text-sm font-bold text-black transition hover:border-black"
                      >
                        <FiMail size={17} />
                        Send Email
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact-form"
        className="border-t border-neutral-200 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
              Campaign Inquiry
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tell Us About Your Campaign
            </h2>

            <p className="mt-5 text-sm leading-8 text-neutral-600 sm:text-base">
              Share your target niche, preferred countries, and placement
              requirements. This information will help our team understand
              your campaign before responding.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Relevant publisher research",
                "Guest posting and contextual placements",
                "Campaign-specific outreach options",
                "Direct communication with our team",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FiCheckCircle
                    className="mt-0.5 shrink-0 text-neutral-700"
                    size={19}
                  />
                  <p className="text-sm leading-6 text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-neutral-200 bg-neutral-50 p-6">
              <FiGlobe size={24} />

              <h3 className="mt-4 text-lg font-bold">
                General Inquiries
              </h3>

              <p className="mt-2 text-sm leading-7 text-neutral-600">
                For general questions, publisher requirements, or campaign
                inquiries, contact Trade Rank Media directly.
              </p>

              <a
                href={`mailto:${companyEmail}?subject=${encodeURIComponent(
                  "Trade Rank Media - General Inquiry"
                )}`}
                className="mt-4 inline-flex items-center gap-2 break-all text-sm font-bold underline underline-offset-4"
              >
                <FiMail size={16} />
                {companyEmail}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-neutral-200 bg-white p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold">
              Send Your Inquiry
            </h3>

            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Complete the details below to prepare your inquiry email.
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <label className={labelClass} htmlFor="name">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  Business Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@company.com"
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="website">
                  Company or Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="service">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option>Guest Posting</option>
                  <option>Link Insertion / Niche Edits</option>
                  <option>Link Building</option>
                  <option>Homepage & Banner Placements</option>
                  <option>Digital PR & News Publications</option>
                  <option>Custom Publisher Research</option>
                  <option>Facebook Ads</option>
                  <option>Web Development</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="industry">
                    Target Industry
                  </label>
                  <input
                    id="industry"
                    name="industry"
                    type="text"
                    value={formData.industry}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Finance, SaaS, etc."
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="country">
                    Target Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="United States, UK, etc."
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="requirements">
                  Campaign Requirements *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={5}
                  value={formData.requirements}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Tell us about your goals, preferred publishers, budget, or placement requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-black px-6 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800"
              >
                <FiSend size={17} />
                Send Inquiry
              </button>

              <p className="text-xs leading-6 text-neutral-500">
                Your email application will open with the inquiry details
                prepared. Review and send the email to submit your request.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Closing Section */}
      <section className="border-t border-neutral-200 bg-neutral-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
            Let's Work Together
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Find the Right Publishing Opportunities
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Share your requirements with our team, and we'll help you explore
            relevant options based on your niche, target market, and campaign
            goals.
          </p>

          <a
            href={`mailto:${companyEmail}?subject=${encodeURIComponent(
              "Trade Rank Media - Campaign Inquiry"
            )}`}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-neutral-800"
          >
            <FiMail size={17} />
            Contact Trade Rank Media
          </a>
        </div>
      </section>
    </main>
  );
}