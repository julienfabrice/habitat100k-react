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
    <>

      {/* Section d'introduction */}
      <section className="btca-intro-section">

        <div className="btca-intro">

          <span className="section-tag">
            TECHNOLOGIE BTC-A
          </span>

          <h2>Pourquoi choisir les BTC-A ?</h2>

          <p>
            La Technologie BTC-A : Construire Autrement.<br /><br />

            Le Bloc de Terre Compressée Autobloquante (BTC-A) est une innovation de construction qui révolutionne l'habitat en Afrique. Fabriqué à partir de la terre locale compressée et stabilisée, ce bloc offre une alternative écologique, économique et durable aux matériaux de construction conventionnels.
            <br /><br />

            <strong>Comment ça fonctionne ?</strong><br />
            La terre extraite localement est mélangée à un faible pourcentage de ciment (5 à 10%), puis compressée mécaniquement sous haute pression. Le résultat est un bloc solide, précis et autobloquant, c'est-à-dire que les blocs s'emboîtent parfaitement sans nécessiter de mortier entre les joints.
            <br /><br />

            <strong>Les avantages clés :</strong><br />
            🌱 Écologique — matériau naturel, empreinte carbone réduite.<br />
            💰 Économique — coût réduit de 30 à 40 % par rapport au parpaing classique.<br />
            🏗️ Rapide — pose sans mortier, chantier accéléré.<br />
            🌡️ Confortable — excellente isolation thermique naturelle.<br />
            🔧 Local — production sur site et valorisation des ressources camerounaises.
          </p>

        </div>

      </section>

      {/* Section des cartes */}
      <section className="btca-section" id="btca">

        <div className="btca-grid">

          {avantages.map((item, index) => (

            <div
              className={`flip-card ${index < 3 ? "flip-group-a" : "flip-group-b"}`}
              key={index}
            >

              <div className="flip-card-inner">

                {/* Face avant */}
                <div className="flip-card-front">

                  <div className="btca-icon">{item.icon}</div>

                  <h3>{item.titre}</h3>

                </div>

                {/* Face arrière */}
                <div className="flip-card-back">

                  <p>{item.texte}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </>
  );
}

export default Btca;