function Stats() {
  const stats = [
    {
      number: "100 000",
      label: "Logements prévus",
    },
    {
      number: "2 000 000+",
      label: "Déficit national",
    },
    {
      number: "90 m²",
      label: "Surface par logement",
    },
    {
      number: "3 000",
      label: "BTC-A par logement",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;