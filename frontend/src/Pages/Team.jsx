import ceoImage from "../assets/ceo.jpeg";
import hammadImage from "../assets/hammad.jpeg";
import farazImage from "../assets/faraz.jpeg";

const teamMembers = [
  {
    name: "Huzaifa",
    role: "CEO",
    image: ceoImage,
    description:
      "Leading the company with vision, strategy, and innovation.",
  },
  {
    name: "Hammad",
    role: "Web Developer",
    image: hammadImage,
    description:
      "Building modern, responsive, and high-performance websites.",
  },
  {
    name: "Faraz",
    role: "Outreach Expert",
    image: farazImage,
    description:
      "Building valuable connections and creating new business opportunities.",
  },
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white px-5 py-20 text-black sm:px-8 md:px-12 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-black">
            The People Behind Our Work
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            Meet Our Team
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black sm:text-base">
            Meet the people bringing ideas to life through technology,
            creativity, and meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden border border-gray-200 bg-white"
            >
              <div className="aspect-[4/4.5] overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black">
                  {member.role}
                </p>

                <h2 className="text-2xl font-bold text-black">
                  {member.name}
                </h2>

                <p className="mt-4 text-sm leading-7 text-black">
                  {member.description}
                </p>

                <div className="mt-6 h-px w-full bg-gray-200" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}