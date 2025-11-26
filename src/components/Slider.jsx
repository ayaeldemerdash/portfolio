import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ items, autoPlay = true, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlay, items.length, interval]);

  const goTo = (index) => {
    setCurrent(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), interval);
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), interval);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % items.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), interval);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      <div className="relative bg-card rounded-xl overflow-hidden shadow-lg">
        <div className="relative h-96 md:h-[500px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === current ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="flex-1 bg-linear-to-b from-primary/20 to-secondary flex items-center justify-center overflow-hidden">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 bg-card">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex-1 flex flex-col h-full">
                  {/* Image */}
                  <div className="flex-1 bg-linear-to-b from-primary/20 to-secondary flex items-center justify-center overflow-hidden">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 bg-card">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/3 z-10 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 transform -translate-y-1/2 shrink-0"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/3 z-10 bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 transform -translate-y-1/2 shrink-0"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current
                  ? "bg-primary w-8"
                  : "bg-primary/40 hover:bg-primary/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
