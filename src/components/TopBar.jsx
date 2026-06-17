import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      <div className="topbar-marquee">
        <div className="marquee-content">
          🏡 HABITAT 100K • Construire 100 000 logements modernes •
          Investir avec le BTC-A • Développement durable • Création de
          50 000 emplois • Ensemble, bâtissons les villes de demain.
        </div>
      </div>
    </div>
  );
}

export default TopBar;