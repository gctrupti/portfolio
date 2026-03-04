import { Github, ExternalLink } from "lucide-react";

export default function Projects() {

  const projects = [
  {
    title: "NurseLink",
    desc: "Healthcare platform connecting nurses and patients. Integrated IBM Granite LLM (RAG chatbot) for patient assistance and Gemini API for nurse–patient matching.",
    tech: ["DTL", "IBM Granite", "Gemini API"],
    github: "https://github.com/gctrupti/NurseLinkk",
    demo: null
  },

  {
    title: "LLM Safety Gateway",
    desc: "Full-stack system to moderate AI prompts as Allowed, Risky, or Blocked with a real-time monitoring dashboard.",
    tech: ["React", "FastAPI", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com/gctrupti/llm-safety-gateway",
    demo: null
  },

  {
    title: "VajraTech",
    desc: "Modern enterprise-style IT services homepage with hero section, services showcase, testimonials and CTA.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/gctrupti/vajratech-it-services",
    demo: "https://vajratech-it-services.vercel.app/"
  },

  {
    title: "Safe-Search",
    desc: "Privacy-preserving encrypted search system featuring Symmetric Searchable Encryption (SSE) and RSA-based verification.",
    tech: ["React", "Vite", "AES-256-GCM", "RSA", "Docker"],
    github: "https://github.com/gctrupti/safe-search",
    demo: null
  },

  {
    title: "Vidyadhara Nursery School",
    desc: "Freelance responsive website showcasing school activities, staff, curriculum and admissions.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: null,
    demo: "https://sumanaveen-vns.github.io/VNS-website"
  }
];

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">

      <p className="text-purple-400 text-xs tracking-widest mb-2">
        PROJECTS
      </p>

      <h2 className="text-4xl font-bold mb-12">
        Things I've <span className="text-gray-400">built.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
          >

            <h3 className="text-lg font-semibold text-purple-400 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {project.desc}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-5">

              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 rounded"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Buttons */}
            <div className="flex gap-3">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm border border-gray-700 px-3 py-2 rounded hover:border-purple-400"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-sm bg-purple-600 px-3 py-2 rounded hover:bg-purple-500"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}