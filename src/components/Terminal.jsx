import { useEffect, useState } from "react";

export default function Terminal() {

  const lines = [
    "> whoami",
    "G C Trupti – Web Developer & AI Enthusiast",
    "",
    "> stack",
    "React | Node.js  | Tailwind | MongoDB | Python",
    "",
    "> currently_building",
    "AI powered applications, secure search systems, and modern web platforms",
    "",
    "> hackathons",
    "HackVerse'25 | Hack-A-League 4.0 | Protattva 2025"
  ];

  const text = lines.join("\n");

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;

      if (i > text.length) {
        clearInterval(typing);
      }
    }, 15);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl shadow-xl overflow-hidden">

      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800 bg-[#0e1322]">

        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>

        <span className="ml-4 text-gray-400 text-xs font-mono">
          trupti@dev ~
        </span>

      </div>

      {/* Terminal body */}
      <pre className="p-6 text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
        {displayText}
        <span className="animate-pulse text-purple-400">█</span>
      </pre>

    </div>
  );
}