import { FaFacebook, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* LOGO + DESCRIPTION */}
        <div className="footer-box">
          <h2>Habitat 100K</h2>
          <p>
            Un projet ambitieux porté par AKOK SARL pour répondre à la crise
            du logement au Cameroun avec des solutions modernes et durables.
          </p>
        </div>

        {/* LIENS */}
        <div className="footer-box">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="#apropos">Projet</a></li>
            <li><a href="#logements">Logements</a></li>
            <li><a href="#btca">BTC-A</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>Yaoundé, Cameroun</p>
          <p>+237 697733236</p>
          <p>contact@habitat100k.cm</p>
        </div>

        {/* RESEAUX SOCIAUX */}
        <div className="footer-box">
          <h3>Suivez-nous</h3>

          <div className="socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 AKOK SARL. Tous droits réservés.</p>
      </div>

    </footer>
  );
}

export default Footer;