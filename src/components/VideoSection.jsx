import "./VideoSection.css";

import logo2 from "../assets/logo2.jpeg";

function VideoSection() {

    return (

        <section className="video-section">

            <video
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src="/videos/habitat.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="video-overlay">

                <img
                    src={logo2}
                    alt="Habitat 100K"
                    className="video-logo"
                />

                <h2>
                    Construisons ensemble votre avenir
                </h2>

                <p>
                    Des logements modernes, accessibles et durables.
                </p>

                <a
                    href="#logements"
                    className="video-btn"
                >
                    Découvrir le projet AKOK Habitat 100K
                </a>

            </div>

        </section>

    );

}

export default VideoSection;