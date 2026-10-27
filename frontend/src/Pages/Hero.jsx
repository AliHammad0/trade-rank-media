
import { useEffect, useState } from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvErr0qMRlBxdnmW3zq_ZIOANBvvKS5bX7ZQQumDPeA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ayqOr3y3pl5Kqm4CcNDRPB9FuAiPBqrPwvPNb4c5bM9qBRTIuG5PuAhb&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnzMiRkrAdWN_phpPH72mtKim_EyN2OLiiv1NyCVLyg&s=10",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      <div
        className="
          relative w-full
          h-[220px]
          min-[375px]:h-[250px]
          sm:h-[350px]
          md:h-[450px]
          lg:h-[540px]
          xl:h-[600px]
        "
      >
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current === index
                ? "opacity-100 z-10"
                : "opacity-0 pointer-events-none z-0"
            }`}
          >
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="
                block
                w-full
                h-full
                object-cover
                object-center
              "
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              draggable="false"
            />
          </div>
        ))}

        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-7 bg-white"
                  : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
