import React, { useState } from "react";

const services = [
  "Web Development",
  "Business Website",
  "Landing Page",
  "Frontend Development",
  "Website Redesign",
  "Guest Posting",
  "Link Building",
  "White-Label Support",
  "Other",
];

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none focus:border-black";

const labelClass = "mb-2 block text-sm font-bold text-black";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Development",
    budget: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const { name, email, service, message } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !service ||
      !message.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${service}`);

    const body = encodeURIComponent(
      `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${formData.company || "Not provided"}\n` +
        `Service: ${service}\n` +
        `Budget: ${formData.budget || "Not specified"}\n\n` +
        `Message:\n${message}`
    );

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <main
      className="min-h-screen bg-white text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="pt-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
              Get In Touch
            </p>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Tell Us About Your Project
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
              We work with businesses, startups, freelancers, and agencies
              looking for practical digital solutions.
            </p>

            <div className="mt-10 space-y-5">
              <div className="border border-gray-200 p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center bg-gray-100 text-sm font-bold text-black">
                  WD
                </div>

                <h2 className="text-lg font-bold">
                  Web Development
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Business websites, landing pages, responsive interfaces,
                  and website redesigns built around your requirements.
                </p>
              </div>

              <div className="border border-gray-200 p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center bg-gray-100 text-sm font-bold text-black">
                  SEO
                </div>

                <h2 className="text-lg font-bold">
                  Guest Posting & Link Building
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Guest posting, niche edits, and outreach opportunities
                  planned according to your campaign requirements.
                </p>
              </div>
            </div>

            <div className="mt-8 border-l-2 border-black pl-5">
              <p className="text-sm font-bold">
                Have a project in mind?
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Share your requirements using the form. We can discuss
                your goals, budget, and next steps.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-bold tracking-tight">
              Send Us a Message
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Tell us a little about your project and the service you need.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className={labelClass}>
                  Company / Website
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name or website URL"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service Required *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select your budget</option>
                    <option value="Under $100">Under $100</option>
                    <option value="$100 - $300">$100 - $300</option>
                    <option value="$300 - $500">$300 - $500</option>
                    <option value="$500 - $1000">$500 - $1,000</option>
                    <option value="$1000+">$1,000+</option>
                    <option value="Let's discuss">Let's discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Project Details *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, requirements, and goals..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="text-sm font-bold text-red-600"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full border border-black bg-black px-6 py-4 text-sm font-bold text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Prepare Inquiry
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Your email application will open with the inquiry prepared.
                The message will not be sent automatically.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
            Let's Work Together
          </p>

          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Let's discuss your website or digital campaign and identify
            the right next steps for your business.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "auto" })
            }
            className="mt-7 border border-black bg-black px-7 py-3 text-sm font-bold text-white hover:bg-white hover:text-black"
          >
            Back to Top
          </button>
        </div>
      </section>
    </main>
  );
}
