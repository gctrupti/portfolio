import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >

      {/* Availability */}
      <div className="mb-6 flex items-center gap-2 bg-[#0b0f1a] border border-gray-800 px-4 py-1 rounded-full text-sm text-gray-300">
        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        Available for opportunities
      </div>

      {/* Name */}
      <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
        G C Trupti
      </h1>

      {/* Subtitle */}
      <p className="text-purple-400 mb-4">
        Computer Science Student • Web Developer • AI Enthusiast
      </p>

      {/* Description */}
      <p className="text-gray-400 max-w-xl mb-10">
        Passionate about building modern web applications and AI-powered
        solutions. Experienced in frontend development, API integration,
        and full-stack projects.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">

        {/* View Projects */}
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg text-white font-medium
          bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500
          hover:from-purple-500 hover:to-indigo-400
          transition duration-300 hover:scale-105
          shadow-lg shadow-purple-900/40"
        >
          View Projects
        </a>

        {/* Download Resume */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium
          bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500
          hover:from-purple-500 hover:to-indigo-400
          transition duration-300 hover:scale-105
          shadow-lg shadow-purple-900/40"
        >
          <Download size={16} />
          Download Resume
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300
          hover:border-purple-500 hover:text-white transition duration-300"
        >
          Get in Touch
        </a>

      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-gray-400">

        {/* GitHub */}
        <a
          href="https://github.com/gctrupti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="hover:text-purple-400 transition" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="hover:text-purple-400 transition" />
        </a>

        {/* Gmail */}
        <a href="mailto:gc.trupti16@gmail.com">
          <Mail className="hover:text-purple-400 transition" />
        </a>

      </div>
    </section>
  );
}