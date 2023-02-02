const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer-box">
                <p className="text-bold text-2xl">Eco Playground est hebergé sur PlanetHoster, hébergeur vert</p>
            </div>
            <div className="footer-box">
                <p className="text-bold text-2xl">Nous contacter</p>
                <p className="text-bold text-xl underline">Par téléphone</p>
                <p>06 66 99 78 95</p>
                <p className="text-bold text-xl underline">Par mail</p>
                <p>contact@ecoplayground.fr</p>
            </div>
            <div className="footer-box">
                <p className="text-bold text-2xl">Plan du site</p>
                <p>Accueil</p>
                <p>Challenges</p>
                <p>Groupes</p>
            </div>
            <div className="footer-box">
                <p className="text-bold text-2xl">Autres</p>
                <p>Nous contacter</p>
                <p>Mentions légales</p>
                <p>Blog</p>
            </div>
        </footer>
    );
};

export default Footer;