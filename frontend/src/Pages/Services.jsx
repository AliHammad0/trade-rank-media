import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://trade-rank-media-hammad.vercel.app/api/v1";

const Services = () => {
  const [services, setServices] = useState([]);
  const [live, setLive] = useState(false);

  const [counterValues, setCounterValues] = useState({
    roi: 0,
    clientsScaled: 0,
    clientsServed: 0,
    pageLoad: 0,
  });

  const statsRef = useRef(null);

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/service/all`
        );

        if (response.data.ok) {
          setServices(response.data.services || []);
        }
      } catch (error) {
        console.error(
          "Services API Error:",
          error.response?.data || error.message
        );
      }
    };

    getServices();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!live) return;

    const targets = {
      roi: 52,
      clientsScaled: 3,
      clientsServed: 600,
      pageLoad: 2,
    };

    const duration = 1800;
    const startTime = performance.now();
    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounterValues({
        roi: Math.round(targets.roi * eased),
        clientsScaled: Math.round(targets.clientsScaled * eased),
        clientsServed: Math.round(targets.clientsServed * eased),
        pageLoad: Math.round(targets.pageLoad * eased),
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [live]);

  const stats = [
    {
      value: `${counterValues.roi}%`,
      title: "Average ROI",
      progress: 52,
    },
    {
      value: `${counterValues.clientsScaled}x`,
      title: "Clients Scaled",
      progress: 75,
    },
    {
      value: `${counterValues.clientsServed}+`,
      title: "Clients Served",
      progress: 88,
    },
    {
      value: `${counterValues.pageLoad}s`,
      title: "Avg Page Load",
      progress: 95,
    },
  ];

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-20 font-[Arial,sans-serif] font-bold">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-red-600 uppercase tracking-widest text-sm font-black mb-3">
          Our Services
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black">
          Digital Solutions That
          <span className="text-black"> Drive Results</span>
        </h1>

        <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-7 font-semibold">
          We provide powerful digital services designed to grow your
          brand, increase visibility, and generate real business results.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            key={service._id}
            to={`/services/${service._id}`}
            className="group relative block bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-red-600 text-xl font-black shadow-lg transition-all duration-500 group-hover:bg-black group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="text-2xl font-black text-black leading-tight">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 text-base leading-7 font-semibold line-clamp-2">
                {service.description}
              </p>

              <div className="mt-7 inline-flex items-center gap-2 text-red-600 font-black transition-all duration-500 group-hover:text-black group-hover:gap-4">
                Explore <span className="text-xl">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-200 rounded-3xl p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-blue-600 hover:shadow-2xl"
          >
            <h3 className="text-4xl font-black text-black">
              {stat.value}
            </h3>

            <p className="mt-2 text-gray-600 font-bold">
              {stat.title}
            </p>

            <div className="mt-5 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                style={{
                  width: live ? `${stat.progress}%` : "0%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;