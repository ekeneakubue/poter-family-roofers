import Image from "next/image";
import { projects } from "@/lib/site";

export function Work() {
  return (
    <section id="work" className="section-pad scroll-mt-28 bg-cream-dark">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm tracking-[0.28em] text-copper uppercase">
          Our Work
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-wide text-navy uppercase sm:text-4xl">
          Recent roofs around Richmond
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <figure
              key={project.title}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={`${project.title} in ${project.location}`}
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep to-transparent px-5 py-5 text-white">
                <p className="font-display text-lg tracking-wide uppercase">
                  {project.title}
                </p>
                <p className="text-sm text-cream/80">{project.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
