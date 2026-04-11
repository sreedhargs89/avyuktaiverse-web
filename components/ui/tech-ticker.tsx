"use client";

// Interleaved: classic web/cloud stack + AI-era practitioner tools.
// Order is curated so every ~6 pills of the marquee show a mix of both.
const techStack = [
  "React", "Next.js", "Claude", "TypeScript", "Vercel AI SDK",
  "Node.js", "GPT-4", "Python", "LangChain", "Anthropic SDK",
  "AWS", "Claude Code", "Azure", "Gemini", "GCP",
  "MCP", "Kubernetes", "Llama", "Docker", "LlamaIndex",
  "Terraform", "Hugging Face", "PostgreSQL", "pgvector", "Mistral",
  "MongoDB", "Pinecone", "Redis", "RAG", "GraphQL",
  "Weaviate", "REST APIs", "vLLM", "CI/CD", "OpenAI SDK",
  "Microservices", "Evals", "Agent SDK",
];

export function TechTicker() {
  // Duplicate for seamless loop
  const items = [...techStack, ...techStack];

  return (
    <div className="relative overflow-hidden py-6" aria-hidden="true">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(90deg, #050314 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: "linear-gradient(270deg, #050314 0%, transparent 100%)" }} />

      <div className="flex gap-8 animate-marquee">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex-shrink-0 px-5 py-2 rounded-lg text-sm font-sans font-medium text-white/40 border border-white/10 whitespace-nowrap"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
