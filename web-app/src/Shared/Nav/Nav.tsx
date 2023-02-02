import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-list">
      <ul className="nav-list-ul">
        <Link to="/" className="nav-list-items">Accueil</Link>
        <Link to="/challenges" className="nav-list-items">Challenges</Link>
        <Link to="/teams" className="nav-list-items">Équipes</Link>
        <Link to="/signin" className="nav-list-items">Se connecter/S'inscrire</Link>
      </ul>
    </nav>
  );
};

export default Nav;
