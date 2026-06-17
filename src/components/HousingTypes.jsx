function HousingTypes() {
  return (
    <section className="housing-section" id="logements">

      <div className="housing-content">

        <span className="section-tag">
          TYPE DE LOGEMENT
        </span>

        <h2>T3 SOCIAL - 90 m²</h2>

        <p>
          Les logements du projet HABITAT 100K sont conçus pour offrir
          confort, durabilité et accessibilité aux familles camerounaises.
        </p>

        <div className="housing-features">
          <div>✓ 3 Chambres</div>
          <div>✓ Salon spacieux</div>
          <div>✓ Cuisine</div>
          <div>✓ Salle d'eau</div>
          <div>✓ Terrasse</div>
          <div>✓ Construction BTC-A</div>
        </div>

        <a href="#contact" className="housing-btn">
          Voir les détails
        </a>

      </div>

      <div className="housing-image">
        <img src="/slide2_upscayl.png" alt="Type de logement T3" />
      </div>

    </section>
  );
}

export default HousingTypes;