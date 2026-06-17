function Stats() {
  const stats = [
    { id: 1, value: 100000, label: "Logements prévus" },
    { id: 2, value: 2000000, label: "Déficit national" },
    { id: 3, value: 90, label: "m² par logement" },
    { id: 4, value: 3000, label: "BTC-A par logement" },
    { id: 5, value: 100, label: "Quartiers intégrés" },
    { id: 6, value: 50000, label: "Emplois générés" }
  ];

  return (
    <section className="stats-section">

      {/* HEADER */}
      <div className="stats-header">

        <span className="section-tag">
          STATISTIQUES
        </span>

        <h2>Les chiffres qui parlent d’eux-mêmes</h2>

      </div>

      {/* GRID */}
      <div className="stats-container">

        {stats.map((stat, index) => (
          <div className="stat-card" key={stat.id}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;