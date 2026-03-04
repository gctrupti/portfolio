import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 text-center max-w-5xl mx-auto">

      <p className="text-purple-400 text-xs tracking-widest mb-2">
        CONTACT
      </p>

      <h2 className="text-4xl font-bold mb-4">
        Let's <span className="text-gray-400">connect.</span>
      </h2>

      <p className="text-gray-400 mb-12">
        I'm always open to discussing new projects, opportunities,
        and collaborations.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">

        {/* Email */}
        <a
          href="mailto:gc.trupti16@gmail.com"
          className="flex items-center gap-3 bg-[#0b0f1a] border border-gray-800 px-6 py-4 rounded-lg hover:border-purple-500 transition"
        >
          <Mail size={18} className="text-purple-400" />
          <span className="text-gray-300">gc.trupti16@gmail.com</span>
          <ArrowUpRight size={16} className="text-gray-500" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/gctrupti"
          target="_blank"
          className="flex items-center gap-3 bg-[#0b0f1a] border border-gray-800 px-6 py-4 rounded-lg hover:border-purple-500 transition"
        >
          <Github size={18} className="text-purple-400" />
          <span className="text-gray-300">github.com/gctrupti</span>
          <ArrowUpRight size={16} className="text-gray-500" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          className="flex items-center gap-3 bg-[#0b0f1a] border border-gray-800 px-6 py-4 rounded-lg hover:border-purple-500 transition"
        >
          <Linkedin size={18} className="text-purple-400" />
          <span className="text-gray-300">LinkedIn</span>
          <ArrowUpRight size={16} className="text-gray-500" />
        </a>

      </div>

      {/* Footer */}

      <div className="flex justify-between mt-20 text-gray-500 text-sm">

        <p>
          &lt;GCT /&gt; © 2026
        </p>

        <p>
          Built with React & Tailwind CSS
        </p>

      </div>

    </section>
  );
}