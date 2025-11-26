import { Award } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code"],
    },
    {
      category: "Other Skills",
      items: ["Responsive Design", "API Integration", "Debugging", "Problem Solving", "Communication", "Teamwork"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ec4899]/5 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">
          My <span className="text-[#ec4899]">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
                <Award className="w-5 h-5 text-[#ec4899]" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#ec4899]/10 text-[#ec4899] rounded-full text-sm font-medium hover:bg-[#ec4899] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}