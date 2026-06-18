function About() {
  return (
    <section className="about-section" id="apropos">

      {/* TITRE CENTRÉ EN HAUT */}
      <div className="about-header">

        <span className="section-tag">
          À PROPOS DU PROJET
        </span>

        <h2>HABITAT 100K</h2>

      </div>

      {/* CONTENU 2 CARTES */}
      <div className="about-container">

        {/* IMAGE */}
        <div className="about-image">
          <img src="/slide4.jpeg" alt="Projet HABITAT 100K" />
        </div>

        {/* TEXTE */}
        <div className="about-content">

          <p>
            Le projet HABITAT 100K est une initiative structurante portée
            par AKOK SARL visant à répondre durablement à la crise du logement
            au Cameroun.
          </p>

          <p>
            Implanté dans la banlieue de Yaoundé, ce programme prévoit la
            construction de 100 000 logements sociaux en Briques de Terre
            Compressées Autobloquantes (BTC-A), intégrant les réseaux VRD et
            équipements collectifs nécessaires.
          </p>

          <div className="about-features">
            <div>✓ 100 000 logements</div>
            <div>✓ BTC-A</div>
            <div>✓ Durable</div>
            <div>✓ National</div>
          </div>

          <a href="#souscription" className="about-btn">
            Découvrir le projet
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;