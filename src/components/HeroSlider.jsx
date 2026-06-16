import { useEffect, useState } from "react";

function HeroSlider() {
  const slides = [
    {
      image: "/slide1.jpeg",
      title: "Technologie BTC-A",
      description:
        "100 000 logements sociaux pour répondre durablement à la crise du logement au Cameroun.",
    },
    {
      image: "/slide2.jpeg",
      title: "Vision Nationale",
      description:
        "Des constructions écologiques, durables et adaptées aux réalités locales.",
    },
    {
      image: "/image1.jpg",
      title: "HABITAT 100K",
      description:
        "Un projet structurant porté par AKOK SARL pour bâtir le Cameroun de demain.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} />

          <div className="overlay"></div>

          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>

            <a href="#apropos" className="hero-btn">
              Découvrir le projet
            </a>
          </div>
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>
        ❮
      </button>

      <button className="next" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
}

export default HeroSlider;