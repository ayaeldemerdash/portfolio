export default function Experience() {
  const experience = [
    {
      title: "Front-End Development with React",
      company: "DEPI",
      year: "2025",
    },
    {
      title: "Front-End Development with Bootstrap",
      company: "NTI",
      year: "2025",
    },
    {
      title: "Front-End Development with React",
      company: "ITI",
      year: "2025",
    },
    {
      title: "AI Training Program",
      company: "Huawei & NTI",
      year: "2025",
    },
    {
      title: "Communication Skills Training",
      company: "NTC Training",
      year: "2024",
    },
    {
      title: "ICDL v5 Certification",
      company: "NTC Training",
      year: "2024",
    },
  ];

  return (
    <div className="col-span-2">
      <h3 className="text-2xl font-bold mb-6 text-black">Experience</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experience.map((exp, index) => (
          <div key={index} className="p-6 bg-[#ec4899]/10 border border-gray-200 rounded-lg hover:border-[#ec4899] transition-colors">
            <p className="text-[#ec4899] font-semibold text-sm mb-2">{exp.year}</p>
            <h4 className="text-lg font-bold text-black mb-1">{exp.title}</h4>
            <p className="text-gray-600">{exp.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
}