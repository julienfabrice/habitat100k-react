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
            Le projet HABITAT 100K est une initiative nationale portée par AKOK SARL, 
            conçue pour contribuer durablement à la réduction du déficit de logements au Cameroun.

            À travers la réalisation de 100 000 logements sociaux en Briques de Terre Compressées Autobloquantes (BTC-A), 
            répartis sur l'ensemble du territoire national, le projet ambitionne de favoriser un développement urbain durable. 
            Il intègre les infrastructures de voirie et réseaux divers (VRD) ainsi que les équipements collectifs indispensables
             à la création de quartiers modernes, inclusifs et résilients.
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