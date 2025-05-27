import React from "react";

const slides = [
  {
    id: 1,
    image:
      "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRC29H19twWKcTZ9Zpg4biJbGNaHF2GGIYNcLt4eZ6fvwugUJbuKxTjjMFPCS-y5P3ZePL57rupDtSkyUIJhv3P8leMJGMzszuG2CHNd65NwWPu5LeKxQkRNfNMHmxAwt7tmQZFk1VIrBd1aXr2AR5DM.jpg?r=5b1", // Movie night scene
    title: "Unlimited Movies & TV Shows",
    desc: "Dive into a vast library of blockbusters, series, and exclusive originals. Your next favorite story awaits!",
    btn1: "Start Free Trial",
    btn2: "Browse Catalog",
  },
  {
    id: 2,
    image:
      "https://www.intofilm.org/intofilm-production/9628/scaledcropped/630x355/resources/9628/into-film-plus-catalogue-image-07-22.jpg", // Popcorn and cinema concept
    title: "Experience Cinema at Home",
    desc: "Get front-row seats to the latest releases and timeless classics, all from the comfort of your couch.",
    btn1: "See Plans",
    btn2: "Watch Trailer",
  },
  {
    id: 3,
    image:
      "https://theatrescotland.co.uk/wp-content/uploads/2025/01/theatre-scotland-41.jpg?w=1400", // Person watching movie on a tablet
    title: "Stream Anytime, Anywhere",
    desc: "Your entertainment, your rules. Enjoy seamless streaming on any device, on the go or at home.",
    btn1: "Get Your Pass",
    btn2: "Learn Features",
  },
];

const Hero = () => {
  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => {
        const prev = (index - 1 + slides.length) % slides.length;
        const next = (index + 1) % slides.length;

        return (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full h-[80vh]"
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={`Slide ${slide.id}`}
            />

            {/* Centered overlay content */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center">
              <div className="text-white text-center px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                  {slide.desc}
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  {/* Buttons with movie-themed calls to action */}
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold transition">
                    {slide.btn1}
                  </button>
                  <button className="bg-white hover:bg-gray-200 text-blue-700 px-6 py-2 rounded font-semibold transition">
                    {slide.btn2}
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href={`#slide${slides[prev].id}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${slides[next].id}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;