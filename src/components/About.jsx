import { GraduationCap, Code, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">

      {/* Section title */}
      <p className="text-purple-400 text-xs tracking-widest mb-2">
        ABOUT
      </p>

      <h2 className="text-4xl font-bold mb-14">
        Building the future, <span className="text-gray-400">one project at a time.</span>
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Education */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">

          <div className="bg-purple-500/20 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
            <GraduationCap size={18} className="text-purple-400" />
          </div>

          <h3 className="text-lg font-semibold mb-2">Education</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            B.E in Computer Science at AMC Engineering College (2023–2027) 
            with a CGPA of 8.40.
          </p>

        </div>

        {/* Development */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">

          <div className="bg-purple-500/20 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
            <Code size={18} className="text-purple-400" />
          </div>

          <h3 className="text-lg font-semibold mb-2">Development</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Experienced in responsive UI, API integrations, and full-stack 
            development with modern frameworks.
          </p>

        </div>

        {/* AI */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-8 hover:border-purple-500 transition">

          <div className="bg-purple-500/20 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
            <Sparkles size={18} className="text-purple-400" />
          </div>

          <h3 className="text-lg font-semibold mb-2">AI & Innovation</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Passionate about AI-powered solutions, leveraging OpenAI and 
            Gemini APIs for practical applications.
          </p>

        </div>

      </div>

    </section>
  );
}