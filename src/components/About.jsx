

function About() {
  return (
    <section className="about-section" id="apropos">

      <div className="about-image">
        <img src="/slide4.jpeg" alt="Projet HABITAT 100K" />
      </div>

      <div className="about-content">

        <span className="section-tag">
          À PROPOS DU PROJET
        </span>

        <h2>
          HABITAT 100K
        </h2>

        <p>
          Le projet HABITAT 100K est une initiative structurante
          portée par AKOK SARL visant à répondre durablement à la
          crise du logement au Cameroun.
        </p>

        <p>
          Implanté dans la banlieue de Yaoundé, ce programme prévoit
          la construction de 100 000 logements sociaux de type T3
          en Briques de Terre Compressées Améliorées (BTC-A),
          intégrant l'ensemble des réseaux VRD et équipements
          collectifs nécessaires au développement de communautés
          modernes et durables.
        </p>

        <div className="about-features">
          <div>✓ 100 000 logements sociaux</div>
          <div>✓ Construction en BTC-A</div>
          <div>✓ Développement durable</div>
          <div>✓ Impact national</div>
        </div>

        <a href="#souscription" className="about-btn">
          Découvrir le projet
        </a>

      </div>

    </section>
  );
}

export default About;