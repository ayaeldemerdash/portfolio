import meImage from "../assets/me.jpg";
export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">
          About <span className="text-[#ec4899]">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src= {meImage} 
              alt="Aya Eldemerdash"
              className="rounded-xl shadow-xl w-full"
            />
          </div>

          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I started learning web development when I wanted to build a website for my own small business. Instead of hiring someone, I chose to do it myself and began learning HTML, CSS, JavaScript, and later React.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I quickly found a passion for creating clean, responsive, and user-friendly websites. Now, I use my skills to help others bring their ideas online in a simple, creative way— and I'm always learning to keep getting better.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#ec4899] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-3xl font-bold drop-shadow-sm">3+</p>
                <p className="text-sm">Years Learning</p>
              </div>
              <div className="p-4 bg-[#ec4899] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-3xl font-bold drop-shadow-sm">10+</p>
                <p className="text-sm">Projects Complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}