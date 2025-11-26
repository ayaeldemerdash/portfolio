import Slider from "./Slider";
import personal from "../assets/personal.jpeg";
import movie from "../assets/movie.png";
import perfume from "../assets/perfume.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Movie App",
      description:
        "A modern movie application built with React and Tailwind CSS. Features include browsing popular movies, searching, and viewing detailed movie information.",
      image: movie,
      link: "https://movies-app-cynb.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      description:
        "Responsive portfolio website showcasing projects and skills with dark mode support and smooth scrolling navigation.",
      image: personal,
      link: "#",
    },
    {
      title: "Perfume Collection",
      description:
        "Elegant website showcasing a curated collection of perfumes with details on fragrance notes and reviews.",
      image: perfume,
      link: "https://perfume-ecommerce-depi.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ec4899]/5 border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">
          Featured <span className="text-[#ec4899]">Projects</span>
        </h2>

        <Slider items={projects} autoPlay={true} interval={6000} />
      </div>
    </section>
  );
}
