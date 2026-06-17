import { motion } from "framer-motion";
import CountUp from "react-countup";

function Stats() {

    const stats = [
        {
            id: 1,
            value: 100000,
            label: "Logements prévus"
        },
        {
            id: 2,
            value: 2000000,
            label: "Déficit national"
        },
        {
            id: 3,
            value: 90,
            label: "m² par logement"
        },
        {
            id: 4,
            value: 3000,
            label: "BTC-A par logement"
        },
        {
            id: 5,
            value: 100,
            label: "Quartiers intégrés"
        },
        {
            id: 6,
            value: 50000,
            label: "Emplois générés"
        }
    ];

    return (
        <section className="stats-section">
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <motion.div
                        className="stat-card"
                        key={stat.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                 <h2>{stat.value}</h2>
                        <p>{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Stats;