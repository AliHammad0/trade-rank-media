import { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";
import ceoImage from "../assets/ceo.jpeg";
import hammadImage from "../assets/hammad.jpeg";
import farazImage from "../assets/faraz.jpeg";

const teamMembers = [
  {
    name: "Muhammad Huzaifa",
    role: "Founder & Link Building",
    email: "traderakmedia@gmail.com",
    phone: "923266023011",
    displayPhone: "+92 326 6023011",
    linkedin: "https://www.linkedin.com/in/huzaifa-linkbuilding/",
    image: ceoImage,
  },
  {
    name: "Faraz Ahmed",
    role: "Outreach & Link Building",
    email: "mughalfaraz810@gmail.com",
    phone: "923136347962",
    displayPhone: "+92 313 6347962",
    linkedin: "https://www.linkedin.com/in/faraz-ahmad-linkbuilding/",
    image: farazImage,
  },
  {
    name: "Ali Hammad",
    role: "Web Development",
    email: "alihammadzk@gmail.com",
    phone: "923114237376",
    displayPhone: "+92 311 4237376",
    linkedin: "https://www.linkedin.com/in/ali-hammad-123334440/",
    image: hammadImage,
  },
];

const services = [
  "Guest Posting",
  "Link Insertion / Niche Edits",
  "Link Building",
  "Homepage & Banner Placements",
  "Digital PR & News Publications",
  "Custom Publisher Research",
  "Facebook Ads",
  "Web Development",
  "Other",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    website: "",
    service: "",
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
      `New Service Inquiry - ${formData.service || "General Inquiry"}`
    );

    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}
Business Email: ${formData.businessEmail}
Company / Website: ${formData.website || "Not provided"}
Service Required: ${formData.service || "Not specified"}
Target Industry: ${formData.industry || "Not specified"}
Target Country: ${formData.country || "Not specified"}

Campaign Requirements:
${formData.requirements}`
    );

    window.location.href = `mailto:traderankmedia@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] font-[Arial,sans-serif] text-[#191919]">
      <section className="px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#8c7650]">
            Trade Rank Media
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Discuss Your Link Building Needs
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Looking for relevant publishers, quality guest posts, or niche
            edits for your website? Tell us about your goals and let&apos;s
            explore the right opportunities for your campaign.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8c7650]">
              Meet Our Team
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Talk to the Right Person
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Connect with our team directly to discuss your project,
              publishing requirements, and business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-2xl border border-[#e9e5dd] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-72 items-center justify-center overflow-hidden bg-[#f0ede6]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-sm font-medium text-[#8c7650]">
                    {member.role}
                  </p>

                  <div className="mt-5 space-y-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex min-w-0 items-center gap-3 text-sm text-gray-600 transition hover:text-black"
                    >
                      <FaEnvelope
                        className="shrink-0 text-[#EA4335]"
                        size={17}
                      />
                      <span className="break-all">{member.email}</span>
                    </a>

                    <a
                      href={`https://wa.me/${member.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#25D366]"
                    >
                      <FaWhatsapp
                        className="shrink-0 text-[#25D366]"
                        size={19}
                      />
                      <span>{member.displayPhone}</span>
                    </a>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#0A66C2]"
                    >
                      <FaLinkedin
                        className="shrink-0 text-[#0A66C2]"
                        size={18}
                      />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>

                  <div className="mt-6 flex gap-3 border-t border-gray-100 pt-5">
                    <a
                      href={`https://wa.me/${member.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${member.name}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#25D366] transition duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                    >
                      <FaWhatsapp size={21} />
                    </a>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn ${member.name}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#0A66C2] transition duration-300 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                    >
                      <FaLinkedin size={20} />
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-[#EA4335] transition duration-300 hover:border-[#EA4335] hover:bg-[#EA4335] hover:text-white"
                    >
                      <FaEnvelope size={18} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-[#e9e5dd] bg-white lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-[#191919] p-7 text-white sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c5ad80]">
              Get in Touch
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Let&apos;s Build Something Valuable
            </h2>

            <p className="mt-5 leading-7 text-gray-300">
              Share your requirements with us. We&apos;ll help you explore
              suitable services and opportunities for your business.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="mailto:traderankmedia@gmail.com"
                className="flex items-start gap-4 text-gray-200 transition hover:text-white"
              >
                <FaEnvelope className="mt-1 shrink-0 text-[#c5ad80]" size={19} />
                <div>
                  <p className="text-sm text-gray-400">General Inquiries</p>
                  <p className="mt-1 break-all font-medium">
                    traderankmedia@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/923266023011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-gray-200 transition hover:text-white"
              >
                <FaWhatsapp className="mt-1 shrink-0 text-[#25D366]" size={21} />
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="mt-1 font-medium">+92 326 6023011</p>
                </div>
              </a>

              <div className="flex items-start gap-4 text-gray-200">
                <FaGlobe className="mt-1 shrink-0 text-[#c5ad80]" size={19} />
                <div>
                  <p className="text-sm text-gray-400">Our Focus</p>
                  <p className="mt-1 font-medium">
                    Link Building & Digital Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Send Us an Inquiry
            </h2>
            <p className="mt-3 leading-7 text-gray-600">
              Provide a few details about your campaign so we can understand
              what you need.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#8c7650]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessEmail"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Business Email *
                  </label>
                  <input
                    id="businessEmail"
                    name="businessEmail"
                    type="email"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#8c7650]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block text-sm font-semibold"
                >
                  Company or Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#8c7650]"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#8c7650]"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="industry"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Target Industry
                  </label>
                  <input
                    id="industry"
                    name="industry"
                    type="text"
                    value={formData.industry}
                    onChange={handleChange}
                    placeholder="e.g. Technology, Finance"
                    className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#8c7650]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-sm font-semibold"
                >
                  Target Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. United States, United Kingdom"
                  className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#8c7650]"
                />
              </div>

              <div>
                <label
                  htmlFor="requirements"
                  className="mb-2 block text-sm font-semibold"
                >
                  Campaign Requirements *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your goals, preferred websites, budget, or campaign requirements..."
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#8c7650]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#191919] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#8c7650] sm:w-auto"
              >
                <FaPaperPlane size={15} />
                Send Inquiry
              </button>

              <p className="text-xs leading-6 text-gray-500">
                Submitting opens your default email application with your
                inquiry details prepared. Your information is not stored by
                this form.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#eee8dc] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8c7650]">
            Your Next Campaign Starts Here
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Let&apos;s Find the Right Publishing Opportunities for Your Campaign.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Whether you need guest posts, niche edits, or a tailored link
            building strategy, our team is ready to discuss your goals.
          </p>

          <a
            href="mailto:traderankmedia@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#191919] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#8c7650]"
          >
            <FaEnvelope size={17} />
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}
