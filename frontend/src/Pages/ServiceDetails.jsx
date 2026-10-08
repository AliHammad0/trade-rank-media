
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ServiceDetails = () => {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // =========================
  // GET SINGLE SERVICE
  // =========================
  useEffect(() => {
    const getService = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/service/single/${id}`
        );

        if (response.data.ok) {
          setService(response.data.service);
        }
      } catch (error) {
        console.log("Service API Error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getService();
  }, [id]);

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-[Arial,sans-serif]">
        <h2 className="text-2xl font-bold text-black">
          Loading...
        </h2>
      </div>
    );
  }

  // =========================
  // NOT FOUND
  // =========================
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white font-[Arial,sans-serif]">
        <h2 className="text-3xl font-black text-black">
          Service Not Found
        </h2>

        <Link
          to="/services"
          className="
            mt-6
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-7
            py-3
            rounded-xl
            font-bold
            transition-all
          "
        >
          Back to Services
        </Link>
      </div>
    );
  }

  // =========================
  // SERVICE FEATURES
  // =========================
  const features = service.features || [];

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-20 font-[Arial,sans-serif]">
      <div className="max-w-7xl mx-auto">

        {/* ================= BACK ================= */}
        <Link
          to="/services"
          className="
            inline-flex
            items-center
            gap-2
            text-blue-600
            font-bold
            mb-12
            hover:gap-4
            transition-all
          "
        >
          ← Back to Services
        </Link>

        {/* ================= MAIN SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= IMAGE ================= */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src={service.image}
              alt={service.title}
              className="
                w-full
                h-[400px]
                lg:h-[520px]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-blue-600/10
                group-hover:bg-blue-600/20
                transition-all
                duration-500
              "
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div>

            {/* CATEGORY */}
            {service.category && (
              <span className="inline-block text-blue-600 text-lg font-bold mb-4">
                {service.category}
              </span>
            )}

            {/* TITLE */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                text-black
                leading-tight
              "
            >
              {service.title}
            </h1>

            {/* LINE */}
            <div className="w-24 h-1 bg-blue-600 mt-6 rounded-full" />

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-lg
                text-gray-600
                leading-8
                font-semibold
              "
            >
              {service.description}
            </p>

            {/* ================= TALK TO EXPERTS ================= */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=marketing%40traderankmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-8
                py-4
                rounded-xl
                font-bold
                transition-all
                hover:-translate-y-1
                hover:gap-4
                shadow-lg
              "
            >
              Talk To Our Experts

              <span className="text-xl">
                →
              </span>
            </a>

          </div>
        </div>

        {/* ================= FEATURES / APPROACH ================= */}
        {features.length > 0 && (
          <div className="mt-24">

            {/* HEADING */}
            <div className="text-center mb-12">

              <h2
                className="
                  mt-3
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-black
                  text-black
                "
              >
                Our{" "}
                <span className="text-black">
                  {service.title}
                </span>{" "}
                Approach
              </h2>

              <div
                className="
                  w-24
                  h-1
                  bg-blue-600
                  mt-5
                  mx-auto
                  rounded-full
                "
              />

            </div>

            {/* FEATURES GRID */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
              "
            >

              {features.map((feature, index) => (
                <div
                  key={feature._id || index}
                  className="
                    group
                    p-8
                    rounded-3xl
                    bg-white
                    border-2
                    border-gray-200
                    shadow-lg
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-blue-600
                    hover:shadow-2xl
                  "
                >

                  {/* NUMBER */}
                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      bg-blue-600
                      text-white
                      flex
                      items-center
                      justify-center
                      text-lg
                      font-black
                      mb-6
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* FEATURE TITLE */}
                  <h3
                    className="
                      text-2xl
                      font-black
                      text-black
                      mb-3
                    "
                  >
                    {feature.title}
                  </h3>

                  {/* FEATURE DESCRIPTION */}
                  <p
                    className="
                      text-gray-600
                      leading-7
                      font-semibold
                    "
                  >
                    {feature.description}
                  </p>

                </div>
              ))}

            </div>
          </div>
        )}

        {/* ================= NO FEATURES ================= */}
        {features.length === 0 && (
          <div className="mt-24 text-center">
            <p className="text-gray-500 font-semibold">
              No service features available.
            </p>
          </div>
        )}

        {/* ================= BOTTOM CTA ================= */}
        <div
          className="
            mt-24
            rounded-3xl
            bg-black
            px-8
            py-12
            sm:px-12
            text-center
            shadow-2xl
          "
        >

          <h2
            className="
              text-3xl
              sm:text-4xl
              font-black
              text-white
            "
          >
            Ready to Grow Your Business?
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-white/90
              text-lg
              leading-7
              font-semibold
            "
          >
            Let's create a professional strategy designed around
            your business goals and help you achieve sustainable
            online growth.
          </p>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-2
              mt-7
              bg-white
              text-blue-600
              px-8
              py-4
              rounded-xl
              font-black
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Contact Us

            <span className="text-xl">
              →
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;

