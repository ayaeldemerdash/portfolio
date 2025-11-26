import { MapPin } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "Faculty of Computers and Information Systems - Tanta University",
      year: "2024-Present",
    },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-foreground">Education</h3>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
            <p className="text-primary font-semibold text-sm mb-2">{edu.year}</p>
            <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
            <p className="text-muted-foreground mb-2">{edu.field}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {edu.school}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
