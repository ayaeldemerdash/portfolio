import { Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ec4899]/5">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-black">
          Let's Work <span className="text-[#ec4899]">Together</span>
        </h2>

        <p className="text-lg text-gray-600 mb-12">
          I'd love to hear about your project and how I can help. Feel free to reach out!
        </p>

        <div className="space-y-6">
          <a
            href="mailto:Aya.eldemerdash2005@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ec4899] text-white rounded-lg font-semibold hover:bg-[#db2777] transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            <Mail className="w-5 h-5" />
            Send Me an Email
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <a
              href="tel:01007951624"
              className="p-4 bg-[#ec4899] text-white rounded-lg hover:shadow-lg hover:shadow-[#ec4899]/20 transition-all text-center transform hover:scale-105"
            >
              <p className="text-white/80 text-sm mb-2">Call Me</p>
              <p className="font-semibold">+20 100 795 1624</p>
            </a>
            <a
              href="mailto:Aya.eldemerdash2005@gmail.com"
              className="p-4 bg-[#ec4899] text-white rounded-lg hover:shadow-lg hover:shadow-[#ec4899]/20 transition-all text-center transform hover:scale-105"
            >
              <p className="text-white/80 text-sm mb-2">Email</p>
              <p className="font-semibold text-sm">Aya.eldemerdash2005@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/aya-eldemardash-14b5b4338"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#ec4899] text-white rounded-lg hover:shadow-lg hover:shadow-[#ec4899]/20 transition-all text-center transform hover:scale-105"
            >
              <p className="text-white/80 text-sm mb-2">LinkedIn</p>
              <p className="font-semibold flex items-center justify-center gap-2">
                Connect <ExternalLink className="w-4 h-4" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}