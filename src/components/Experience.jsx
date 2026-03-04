import { Briefcase, Users } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-5xl mx-auto">

      {/* Section label */}
      <p className="text-purple-400 text-xs tracking-widest mb-2">
        EXPERIENCE
      </p>

      {/* Title */}
      <h2 className="text-4xl font-bold mb-12">
        Where I've <span className="text-gray-400">contributed.</span>
      </h2>

      <div className="space-y-6">

        {/* Internship 1 */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">

          <div className="flex gap-4">

            <div className="bg-purple-500/20 p-2 rounded-lg h-fit">
              <Briefcase size={18} className="text-purple-400" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Web Development Intern
              </h3>

              <p className="text-purple-400 text-sm">
                Shiva Sadhana Enterprises • March 2026 – April 2026 (Remote)
              </p>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Worked on improving and developing company website features.
                Supported web development tasks including frontend improvements,
                hosting setup, and deployment using the Hostinger platform.
                Collaborated with the team to enhance website performance
                and usability.
              </p>
            </div>

          </div>
        </div>

        {/* Internship 2 */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">

          <div className="flex gap-4">

            <div className="bg-purple-500/20 p-2 rounded-lg h-fit">
              <Briefcase size={18} className="text-purple-400" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Web Development Intern
              </h3>

              <p className="text-purple-400 text-sm">
                VisionAstraa Startup Academy (Sep 2024 - Dec 2024 )
              </p>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Worked on developing and improving web-based learning platforms.
                Built responsive UI components, collaborated with developers,
                and helped integrate backend functionality.
              </p>
            </div>

          </div>
        </div>

        {/* Coordinator */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition">

          <div className="flex gap-4">

            <div className="bg-purple-500/20 p-2 rounded-lg h-fit">
              <Users size={18} className="text-purple-400" />
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Student Coordinator
              </h3>

              <p className="text-purple-400 text-sm">
                ACESS Students Forum
              </p>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Coordinated departmental workshops, technical events,
                and student engagement activities.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}