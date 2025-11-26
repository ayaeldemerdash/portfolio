import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-[#ec4899]/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,white,#ec4899/20,#f472b6/20)]"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 bg-[linear-gradient(to_bottom_right,#ec4899,#f472b6/80,#db2777)] rounded-full p-1 shadow-xl">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-6xl font-bold">
                <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom_right,#ec4899,#db2777)]">
                  AE
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-black">
            Hi, I'm <span className="text-[#ec4899]">Aya</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer crafting beautiful, responsive websites with React and modern web technologies. I transform ideas into elegant digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#ec4899] text-white rounded-lg font-semibold hover:bg-[#db2777] transition-all transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[#ec4899] text-[#ec4899] rounded-lg font-semibold hover:bg-[#ec4899] hover:text-white transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <a
              href="tel:01007951624"
              className="flex items-center gap-2 text-gray-600 hover:text-[#ec4899] transition-colors"
            >
              <span>📞</span>
              +20 100 795 1624
            </a>
            <a
              href="mailto:Aya.eldemerdash2005@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-[#ec4899] transition-colors"
            >
              <span>📧</span>
              Aya.eldemerdash2005@gmail.com
            </a>
          </div>
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-[linear-gradient(to_bottom_right,#ec4899/30,#f472b6/20)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 left-10 w-72 h-72 bg-[linear-gradient(to_bottom_right,#f472b6/30,#db2777/20)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </section>

      <About />
      <Services />
      <Skills />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ec4899]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">
            <span className="text-[#ec4899]">Experience</span> & Education
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <Experience />
            <Education />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ec4899]/5">
        <Projects />
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ec4899]/10">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;