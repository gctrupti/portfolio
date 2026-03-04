import { GitHubCalendar } from "react-github-calendar";
import { Github, ExternalLink } from "lucide-react";

export default function GithubActivity() {

  const repos = [
    {
      name: "NurseLink",
      desc: "Healthcare platform with RAG chatbot",
      lang: "Python",
      link: "https://github.com/gctrupti/NurseLinkk"
    },
    {
      name: "llm-safety-gateway",
      desc: "AI prompt moderation system",
      lang: "TypeScript",
      link: "https://github.com/gctrupti/llm-safety-gateway"
    },
    {
      name: "vajratech-it-services",
      desc: "Enterprise IT services homepage",
      lang: "TypeScript",
      link: "https://github.com/gctrupti/vajratech-it-services"
    },
    {
      name: "safe-search",
      desc: "Privacy-preserving encrypted search",
      lang: "Python",
      link: "https://github.com/gctrupti/safe-search"
    }
  ];

  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">

      <p className="text-purple-400 text-xs tracking-widest mb-2">
        OPEN SOURCE
      </p>

      <h2 className="text-4xl font-bold mb-12">
        Open Source & GitHub <span className="text-gray-400">activity.</span>
      </h2>

      {/* Contribution Graph */}
      <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6 mb-10">
        <GitHubCalendar
          username="gctrupti"
          colorScheme="dark"
          blockSize={12}
          blockMargin={5}
          fontSize={14}
        />
      </div>

      {/* Repo Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {repos.map((repo, i) => (
          <a
            key={i}
            href={repo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
          >

            <div className="flex justify-between items-center mb-2">

              <h3 className="text-purple-400 font-semibold">
                {repo.name}
              </h3>

              <ExternalLink size={16} className="text-gray-400" />

            </div>

            <p className="text-gray-400 text-sm mb-3">
              {repo.desc}
            </p>

            <span className="text-xs text-gray-500">
              ● {repo.lang}
            </span>

          </a>
        ))}

      </div>

      {/* GitHub Profile Button */}
      <div className="flex justify-center mt-12">

        <a
          href="https://github.com/gctrupti"
          target="_blank"
          className="flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500"
        >
          <Github size={18} />
          View GitHub Profile
        </a>

      </div>

    </section>
  );
}