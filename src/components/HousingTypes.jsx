function HousingTypes() {

  const houses = [
    {
      id: 1,
      title: "T3 SOCIAL - 90 m²",
      desc: "Logement moderne pour familles avec confort optimal et durabilité.",
      price: "À partir de 18 500 000 FCFA",
      image: "/slide2_upscayl.png"
    },
    {
      id: 2,
      title: "T2 ÉCONOMIQUE - 70 m²",
      desc: "Solution accessible pour jeunes couples et petites familles.",
      price: "À partir de 14 900 000 FCFA",
      image: "/image1.jpg"
    },
    {
      id: 3,
      title: "T5 CONFORT - 200 m²",
      desc: "Grand espace avec salon spacieux et finitions premium.",
      price: "À partir de 39 900 000 FCFA",
      image: "/image2.jpeg"
    },
    {
      id: 4,
      title: "T4 CONFORT - 110 m²",
      desc: "Grand espace avec salon spacieux et finitions premium.",
      price: "À partir de 25 900 000 FCFA",
      image: "/image3.jpeg"
    }
  ];

  return (
    <section className="housing-section" id="logements">

      {/* HEADER */}
      <div className="housing-header">
        <span className="section-tag">
          TYPE DE LOGEMENT
        </span>

        <h2>Nos logements disponibles</h2>
      </div>

      {/* CAROUSEL */}
      <div className="housing-slider">
        <div className="housing-track">

          {houses.concat(houses).map((house, index) => (
            <div className="housing-card" key={index}>

              <img
                src={house.image}
                alt={house.title}
              />

              <h3>{house.title}</h3>

              <p>{house.desc}</p>

              <div className="housing-footer">
                <span className="housing-price">
                  {house.price}
                </span>

                <button className="housing-btn">
                  Reserver
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default HousingTypes;