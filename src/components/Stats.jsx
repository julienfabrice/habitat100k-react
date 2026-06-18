import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function AnimatedNumber({ value, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 10000;
    const stepTime = 10;
    const increment = value / (duration / stepTime);

    const interval = setInterval(() => {
      current += increment;

      if (current >= value) {
        current = value;
        clearInterval(interval);
      }

      setCount(Math.floor(current));
    }, stepTime);

    return () => clearInterval(interval);
  }, [start, value]);

  return <span>{count.toLocaleString()}</span>;
}

function Stats() {

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // 🔥 AJOUT IMPORTANT
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasStarted(true);
    }
  }, [inView]);

  const stats = [
    { id: 1, value: 100000, label: "Logements prévus" },
    { id: 2, value: 2000000, label: "Déficit national" },
    { id: 3, value: 90, label: "m² par logement" },
    { id: 4, value: 3000, label: "BTC-A par logement" },
    { id: 5, value: 100, label: "Quartiers intégrés" },
    { id: 6, value: 50000, label: "Emplois générés" }
  ];

  return (
    <section className="stats-section" ref={ref}>

      <div className="stats-header">
        <span className="section-tag">STATISTIQUES</span>
        <h2>Les chiffres qui parlent d’eux-mêmes</h2>
      </div>

      <div className="stats-container">

        {stats.map((stat) => (
          <div className="stat-card" key={stat.id}>
            <h2>
              <AnimatedNumber
                value={stat.value}
                start={hasStarted}
              />
            </h2>
            <p>{stat.label}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;