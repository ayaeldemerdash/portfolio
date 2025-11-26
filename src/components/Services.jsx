import { Code, Palette, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Front-End Development",
      description:
        "Creating fast and interactive user interfaces using the power of React and modern JavaScript frameworks.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Designing modern and attractive layouts with responsive CSS frameworks, Bootstrap, and Tailwind CSS.",
    },
    {
      icon: Smartphone,
      title: "Landing Pages",
      description:
        "Custom-built landing pages that grab attention and drive action with interactive elements and smooth animations.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ec4899]/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">
          My <span className="text-[#ec4899]">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-[#ec4899] transition-all transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-[#ec4899]/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#ec4899]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}