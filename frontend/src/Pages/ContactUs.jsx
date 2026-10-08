import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // =========================================================
  // SCROLL / ENTRANCE ANIMATION
  // =========================================================
  const [visibleSections, setVisibleSections] = useState({
    heading: false,
    left: false,
    form: false,
  });

  const headingRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.dataset.section;

            setVisibleSections((prev) => ({
              ...prev,
              [section]: true,
            }));

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const sections = [
      headingRef.current,
      leftRef.current,
      formRef.current,
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/api/v1/users/contact",
        formData
      );

      if (response.data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(response.data.error || "Something went wrong");
      }
    } catch (error) {
      console.log("Contact API Error:", error.message);

      alert(
        error.response?.data?.error ||
          "Message failed to send"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-white text-black font-[Arial,sans-serif] font-bold">

        <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">

          {/* Background Effects */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />

          <div className="relative w-full max-w-6xl">

            {/* ================= HEADING ================= */}
            <div
              ref={headingRef}
              data-section="heading"
              className={`text-center mb-12 scroll-entrance ${
                visibleSections.heading
                  ? "scroll-entrance-visible"
                  : ""
              }`}
            >

              <span className="inline-block px-5 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-lg">
                Get In Touch
              </span>

              <h1 className="mt-5 text-5xl sm:text-6xl font-black">
                Let's{" "}
                <span className="text-black">
                  Talk
                </span>
              </h1>

              <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Have a project in mind? Send us a message and let's discuss how
                we can help your business grow.
              </p>

              <div className="mx-auto mt-5 w-24 h-1 bg-blue-600 rounded-full" />

            </div>

            {/* ================= CONTACT BOX ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* ================= LEFT SIDE ================= */}
              <div
                ref={leftRef}
                data-section="left"
                className={`bg-black text-white rounded-3xl p-8 sm:p-10 shadow-2xl scroll-entrance-left ${
                  visibleSections.left
                    ? "scroll-entrance-left-visible"
                    : ""
                }`}
              >

                <h2 className="text-3xl sm:text-4xl font-black">
                  Contact <span className="text-white">Us</span>
                </h2>

                <p className="mt-5 text-gray-300 text-lg leading-7">
                  We're ready to hear about your project, business or idea.
                  Fill out the form and our team will get back to you.
                </p>

                {/* ================= CONTACT INFO ================= */}
                <div className="mt-10 space-y-6">

                  {/* ================= EMAIL 1 ================= */}
                  <a
                    href="mailto:hello@traderankmedia.com"
                    className="flex items-center gap-4 group"
                  >

                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-blue-600 transition-all">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                    </div>

                    <div>
                      <p className="text-sm text-gray-400">
                        Email
                      </p>

                      <p className="text-lg break-all">
                        hello@traderankmedia.com
                      </p>
                    </div>

                  </a>

                  {/* ================= EMAIL 2 ================= */}
                  <a
                    href="mailto:traderankmedia@gmail.com"
                    className="flex items-center gap-4 group"
                  >

                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-blue-600 transition-all">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                    </div>

                    <div>
                      <p className="text-sm text-gray-400">
                        Gmail
                      </p>

                      <p className="text-lg break-all">
                        traderankmedia@gmail.com
                      </p>
                    </div>

                  </a>

                  {/* ================= PHONE ================= */}
                  <a
                    href="tel:+923266023011"
                    className="flex items-center gap-4 group"
                  >

                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-blue-600 transition-all">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.5 2a2 2 0 01-.45 1.82L8.91 9.91a16 16 0 006.18 6.18l1.575-1.36a2 2 0 011.82-.45l2 .5A2 2 0 0122 16.72V20a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z"
                        />
                      </svg>

                    </div>

                    <div>
                      <p className="text-sm text-gray-400">
                        Phone
                      </p>

                      <p className="text-lg">
                        +92 3266023011
                      </p>
                    </div>

                  </a>

                </div>
              </div>

              {/* ================= RIGHT SIDE FORM ================= */}
              <div
                ref={formRef}
                data-section="form"
                className={`bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-2xl scroll-entrance-right ${
                  visibleSections.form
                    ? "scroll-entrance-right-visible"
                    : ""
                }`}
              >

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* NAME */}
                  <div>

                    <label className="block mb-2 text-lg">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-xl
                        border-2
                        border-gray-200
                        bg-gray-50
                        text-black
                        outline-none
                        transition
                        focus:border-blue-600
                        focus:bg-white
                      "
                    />

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="block mb-2 text-lg">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-xl
                        border-2
                        border-gray-200
                        bg-gray-50
                        text-black
                        outline-none
                        transition
                        focus:border-blue-600
                        focus:bg-white
                      "
                    />

                  </div>

                  {/* SUBJECT */}
                  <div>

                    <label className="block mb-2 text-lg">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-xl
                        border-2
                        border-gray-200
                        bg-gray-50
                        text-black
                        outline-none
                        transition
                        focus:border-blue-600
                        focus:bg-white
                      "
                    />

                  </div>

                  {/* MESSAGE */}
                  <div>

                    <label className="block mb-2 text-lg">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write your message..."
                      required
                      className="
                        w-full
                        px-5
                        py-4
                        rounded-xl
                        border-2
                        border-gray-200
                        bg-gray-50
                        text-black
                        outline-none
                        resize-none
                        transition
                        focus:border-blue-600
                        focus:bg-white
                      "
                    />

                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      w-full
                      py-4
                      rounded-xl
                      bg-red-600
                      text-white
                      text-xl
                      font-black
                      shadow-lg
                      shadow-red-600/20
                      transition-all
                      duration-300
                      hover:bg-black
                      hover:-translate-y-1
                      active:scale-95
                      disabled:bg-gray-400
                      disabled:cursor-not-allowed
                      disabled:transform-none
                    "
                  >
                    {loading
                      ? "Sending..."
                      : "Send Message →"}
                  </button>

                </form>

              </div>

            </div>

          </div>

        </section>

        {/* ================= SCROLL ANIMATION ================= */}
        <style>{`
          .scroll-entrance {
            opacity: 0;
            transform: translateY(60px);
            transition:
              opacity 0.9s ease-out,
              transform 0.9s ease-out;
            will-change: opacity, transform;
          }

          .scroll-entrance-visible {
            opacity: 1;
            transform: translateY(0);
          }

          .scroll-entrance-left {
            opacity: 0;
            transform: translateX(-70px);
            transition:
              opacity 0.9s ease-out,
              transform 0.9s ease-out;
            will-change: opacity, transform;
          }

          .scroll-entrance-left-visible {
            opacity: 1;
            transform: translateX(0);
          }

          .scroll-entrance-right {
            opacity: 0;
            transform: translateX(70px);
            transition:
              opacity 0.9s ease-out,
              transform 0.9s ease-out;
            will-change: opacity, transform;
          }

          .scroll-entrance-right-visible {
            opacity: 1;
            transform: translateX(0);
          }

          @media (prefers-reduced-motion: reduce) {
            .scroll-entrance,
            .scroll-entrance-left,
            .scroll-entrance-right {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}</style>

      </main>
    </>
  );
};

export default Contact;