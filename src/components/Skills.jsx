import { Code2, Globe, Server, Database, Brain } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">

      {/* Section Title */}
      <p className="text-purple-400 text-xs tracking-widest mb-2">
        SKILLS
      </p>

      <h2 className="text-4xl font-bold mb-14">
        Technologies <span className="text-gray-400">I work with.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Programming */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6">

          <div className="flex items-center gap-2 mb-4 text-purple-400 text-sm">
            <Code2 size={16} /> PROGRAMMING
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="skill-pill">Python</span>
            <span className="skill-pill">Java</span>
            <span className="skill-pill">JavaScript</span>
          </div>

        </div>

        {/* Frontend */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6">

          <div className="flex items-center gap-2 mb-4 text-purple-400 text-sm">
            <Globe size={16} /> FRONTEND
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="skill-pill">HTML</span>
            <span className="skill-pill">CSS</span>
            <span className="skill-pill">React</span>
            <span className="skill-pill">Tailwind CSS</span>
          </div>

        </div>

        {/* Backend */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6">

          <div className="flex items-center gap-2 mb-4 text-purple-400 text-sm">
            <Server size={16} /> BACKEND
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="skill-pill">Node.js</span>
          </div>

        </div>

        {/* Database */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6">

          <div className="flex items-center gap-2 mb-4 text-purple-400 text-sm">
            <Database size={16} /> DATABASE
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="skill-pill">MongoDB</span>
            <span className="skill-pill">Firebase</span>
          </div>

        </div>

        {/* AI & APIs */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6">

          <div className="flex items-center gap-2 mb-4 text-purple-400 text-sm">
            <Brain size={16} /> AI & APIs
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="skill-pill">OpenAI API</span>
            <span className="skill-pill">Gemini API</span>
          </div>

        </div>

      </div>
    </section>
  );
}