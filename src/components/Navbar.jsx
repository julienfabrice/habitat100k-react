import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
function Navbar() {
    return (
        <header id="header">
            {/* TopBar */}
            <div className="topbar">
                <div className="topbar-marquee">
                    <div className="marquee-content">
                        🏡 HABITAT 100K • Construire 100 000 logements modernes • Investir avec le BTC-A • Développement durable • Création de 50 000 emplois • Ensemble, bâtissons les villes de demain.
                    </div>
                </div>

                <div className="topbar-social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
            </div>
            <nav className="navbar">

                <div className="logo">
                    <img src="/logo1.jpeg" alt="AKOK SARL" />

                    <p className="logo-slogan">
                        L'habitat digne, à la portée de tous !
                    </p>
                </div>

                <ul className="menu">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#apropos">Projet</a></li>
                    <li><a href="#logements">Type de logement</a></li>
                    <li><a href="#btca">BTC-A</a></li>
                    <li><a href="#partenaires">Partenaires</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <a href="#souscription" className="btn-souscripteur">
                    Souscrire Maintenant
                </a>

            </nav>
        </header>
    );
}

export default Navbar;