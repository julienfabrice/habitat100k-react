function Navbar() {
    return (
        <header id="header">
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