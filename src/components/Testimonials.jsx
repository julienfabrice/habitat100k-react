import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import client7 from "../assets/client7.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.jpg";
import client6 from "../assets/client6.jpg";
import client1 from "../assets/client1.jpg";
import client8 from "../assets/client8.jpg";

import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {

    const testimonials = [
  {
    id: 1,
    name: "Jean Koffi",
    role: "Propriétaire",
    image: client7,
    text: "Grâce à HABITAT 100K, j'ai enfin réalisé mon rêve de devenir propriétaire."
  },
  {
    id: 2,
    name: "Marie Konan",
    role: "Investisseuse",
    image: client2,
    text: "Le projet est sérieux et transparent."
  },
  {
    id: 3,
    name: "Serge Yao",
    role: "Bénéficiaire",
    image: client3,
    text: "Les délais ont été respectés."
  },
  {
    id: 4,
    name: "Awa Kouassi",
    role: "Entrepreneure",
    image: client4,
    text: "Une initiative qui change des vies."
  },
  {
    id: 5,
    name: "Didier Yao",
    role: "Propriétaire",
    image: client5,
    text: "Le suivi du projet a été excellent du début à la fin."
  },
  {
    id: 6,
    name: "Fatou Traoré",
    role: "Bénéficiaire",
    image: client6,
    text: "Je recommande HABITAT 100K à toute personne souhaitant devenir propriétaire."
  },
  {
    id: 7,
    name: "Kouamé Alain",
    role: "Investisseur",
    image: client1,
    text: "Un investissement sûr avec une équipe très professionnelle."
  },
  {
    id: 8,
    name: "Aminata Koné",
    role: "Propriétaire",
    image: client8,
    text: "Une maison moderne livrée dans les délais annoncés."
  }
];

    return (

        <section className="testimonial-section" id="temoignages">

            <div className="testimonial-header">

                <span className="testimonial-tag">
                    TÉMOIGNAGES
                </span>

                <h2>
                    Ils nous font confiance
                </h2>

            </div>

            <Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={30}
  slidesPerView={4}
  loop={false}
  grabCursor={true}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  }}
>

                {testimonials.map((item) => (

                    <SwiperSlide key={item.id}>

                        <div className="testimonial-card">

                            <div className="testimonial-image">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                />

                            </div>

                            <div className="testimonial-content">

                                <FaQuoteLeft className="quote-icon" />

                                <p>
                                    {item.text}
                                </p>

                                <h4>{item.name}</h4>

                                <span>{item.role}</span>

                            </div>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>

    );

}

export default Testimonials;