import React from "react";
import ceoImage from "../assets/ceo.jpeg";
import hammadImage from "../assets/hammad.jpeg";
import farazImage from "../assets/faraz.jpeg";

const teamMembers = [
  {
    name: "Ali Hammad",
    role: "Developer",
    phone: "923114237376",
    displayPhone: "+92 311 4237376",
    email: "traderankmedia@gmail.com",
    service: "Web Development",
    message:
      "Hi Hammad, I'm interested in your web development services. I'd like to discuss my website requirements. Please share how we can get started.",
    image: hammadImage,
  },
  {
    name: "Faraz Ahmed",
    role: "Outreach & Link Building",
    phone: "923136347962",
    displayPhone: "+92 313 6347962",
    email: "mugalfraz810@gmail.com",
    service: "Guest Posting, Link Insertion & Link Building",
    message:
      "Hi Faraz, I'm interested in guest posting, link insertion, and link building services. I'd like to discuss my campaign requirements and available opportunities.",
    image: farazImage,
  },
  {
    name: "Muhammad Huzaifa",
    role: "Founder & Link Builder",
    phone: "923266023011",
    displayPhone: "0326 6023011",
    email: "traderakmedia@gmail.com",
    service: "Client Inquiries, Custom Placements & Link Building",
    message:
      "Hi Muhammad Huzaifa, I'm contacting you regarding Trade Rank Media's link building services. I'd like to discuss client requirements and custom placement opportunities.",
    image: ceoImage,
  },
];

const companyEmail = "traderankmedia@gmail.com";

const labelClass = "mb-2 block text-sm font-bold text-black";

export default function Contact() {
  return (
    <main
      className="min-h-screen bg-white text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {/* Contact Hero */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
              Get In Touch
            </p>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Tell Us About Your Project
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Trade Rank Media helps businesses with professional web
              development, guest posting, outreach, and link building.
              Contact our team to discuss your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="border-t border-gray-200 bg-gray-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
              Meet The Team
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Our Team
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Reach the right team member for your project. Send a WhatsApp
              message or contact them directly by email.
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
                  className="flex h-full flex-col overflow-hidden border border-gray-200 bg-white transition duration-300 hover:border-gray-400"
                >
                  {/* Team Member Image */}
                  <div className="h-72 overflow-hidden bg-gray-100 sm:h-80">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="text-xl font-bold">{member.name}</h3>

                    <p className="mt-2 text-sm font-semibold text-gray-600">
                      {member.role}
                    </p>

                    <div className="mt-6 flex-1 space-y-5">
                      <div>
                        <p className={labelClass}>Services</p>
                        <p className="text-sm leading-6 text-gray-600">
                          {member.service}
                        </p>
                      </div>

                      <div>
                        <p className={labelClass}>WhatsApp</p>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-words text-sm text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-black"
                        >
                          {member.displayPhone}
                        </a>
                      </div>

                      <div>
                        <p className={labelClass}>Email</p>
                        <a
                          href={emailLink}
                          className="break-all text-sm text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-black"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center border border-black bg-black px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white hover:text-black"
                      >
                        Message on WhatsApp
                      </a>

                      <a
                        href={emailLink}
                        className="flex w-full items-center justify-center border border-gray-300 bg-white px-5 py-3.5 text-center text-sm font-bold text-black transition hover:border-black"
                      >
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

      {/* Closing Section */}
      <section className="border-t border-gray-200 bg-white px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
            Let's Work Together
          </p>

          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Contact our team to discuss your website, outreach campaign,
            or link building requirements.
          </p>

          <a
            href={`mailto:${companyEmail}?subject=${encodeURIComponent(
              "Trade Rank Media - Project Inquiry"
            )}`}
            className="mt-7 inline-flex border border-black bg-black px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}