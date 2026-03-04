import { Trophy, Zap } from "lucide-react";

export default function Hackathons() {
  const events = [
    {
      title: "Hackfusion 2025",
      subtitle: "24-Hour Hackathon",
      description:
        "Built a Campus Security Surveillance System using YOLOv8, OpenCV, and Streamlit to detect unauthorized entry, crowding, sharp objects, and fire hazards.",
      icon: <Trophy size={18} />,
    },
    {
      title: "HackVerse'25 – MIT Bengaluru",
      subtitle: "36-Hour Hackathon • IBM, AWS & 1M1B",
      description:
        "Explored IBM Granite and implemented Retrieval-Augmented Generation (RAG) while learning real-world applications of Large Language Models and rapid AI prototyping.",
      icon: <Trophy size={18} />,
    },
    {
      title: "Hack-A-League 4.0 – Global Academy of Technology",
      subtitle: "24-Hour National Level Hackathon",
      description:
        "Participated in a national level offline hackathon organized by the Department of CSE, collaborating with team members to build an innovative solution under tight time constraints.",
      icon: <Trophy size={18} />,
    },
    {
      title: "Protattva 2025 – RVITM",
      subtitle: "State-Level Inter-Collegiate Project Exhibition",
      description:
        "Presented 'Bharatanatyam Mudra Learning Using AI' — combining computer vision and AI to help users learn classical dance mudras interactively.",
      icon: <Zap size={18} />,
    },
  ];

  return (
   <section id="hackathons" className="py-28 px-6 max-w-6xl mx-auto">

      <p className="text-purple-400 text-xs tracking-widest mb-2">
        HACKATHONS & EVENTS
      </p>

      <h2 className="text-4xl font-bold mb-14">
        Hackathons & Technical <span className="text-gray-400">events.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
          >

            <div className="flex items-start gap-4">

              <div className="bg-purple-600 p-3 rounded-lg text-white">
                {event.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {event.title}
                </h3>

                <p className="text-purple-400 text-sm mb-2">
                  {event.subtitle}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}