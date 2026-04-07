"use client";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS",
  "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "PostgreSQL",
  "MongoDB", "Redis", "GraphQL", "REST APIs", "CI/CD", "Microservices",
];

export function TechTicker() {
  // Duplicate for seamless loop
  const items = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden py-6" aria-hidden="true">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(90deg, #0f172a 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(270deg, #0f172a 0%, transparent 100%)" }} />

      <div className="flex gap-8 animate-marquee">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex-shrink-0 px-5 py-2 rounded-lg text-sm font-sans font-medium text-white/40 border border-white/8 whitespace-nowrap"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
