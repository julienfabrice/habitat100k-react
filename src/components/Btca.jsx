function Btca() {
  const avantages = [
  {
    icon: "♻️",
    titre: "Écologique",
    texte: "Réduction de l'empreinte carbone grâce à l'utilisation de matériaux locaux."
  },
  {
    icon: "💰",
    titre: "Économique",
    texte: "Coût de construction réduit pour rendre le logement plus accessible."
  },
  {
    icon: "🏠",
    titre: "Durable",
    texte: "Longévité élevée et excellente stabilité structurelle."
  },
  {
    icon: "🌡️",
    titre: "Confort Thermique",
    texte: "Maintient une température agréable à l'intérieur des logements."
  },
  {
    icon: "🌍",
    titre: "Matériaux Locaux",
    texte: "Valorisation des ressources disponibles localement au Cameroun."
  },
  {
    icon: "🛡️",
    titre: "Résistance",
    texte: "Bonne résistance mécanique et excellente tenue dans le temps."
  }
];

  return (
    <section className="btca-section" id="btca">

      <div className="section-header">
        <span className="section-tag">
          TECHNOLOGIE BTC-A
        </span>

        <h2>Pourquoi choisir les BTC-A ?</h2>

        <p>
          Les Briques de Terre Compressées Améliorées constituent
          une solution moderne, durable et adaptée aux réalités du Cameroun.
        </p>
      </div>

      <div className="btca-grid">

        {avantages.map((item, index) => (
          <div className="btca-card" key={index}>
            <div className="btca-icon">{item.icon}</div>
            <h3>{item.titre}</h3>
            <p>{item.texte}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Btca;