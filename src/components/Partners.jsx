import { motion } from "framer-motion";

function Partners() {
  const partners = [
    {
      id: 1,
      name: "AKOK SARL",
      logo: "/partner1.jpeg",
    },
    {
      id: 2,
      name: "Partenaire Institutionnel",
      logo: "/partner2.png",
    },
    {
      id: 3,
      name: "Banque Partenaire",
      logo: "/partner3.png",
    },
    {
      id: 4,
      name: "Entreprise BTP",
      logo: "/partner4.jpg",
    },
  ];

  return (
    <section className="partners-section" id="partenaires">

      <div className="section-header">
        <span className="section-tag">Nos partenaires</span>

        <h2>Ils nous accompagnent</h2>

        <p>
          Le projet Habitat 100K est porté avec le soutien de partenaires
          institutionnels, techniques et financiers engagés pour le
          développement durable du Cameroun.
        </p>
      </div>

      <div className="partners-slider">
  <div className="partners-track">
    {partners.concat(partners).map((partner, index) => (
      <div className="partner-card" key={index}>
        <img src={partner.logo} alt={partner.name} />
        <h3>{partner.name}</h3>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}

export default Partners;