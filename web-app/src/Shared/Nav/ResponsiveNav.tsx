import { Link } from 'react-router-dom';

type Props = {
  open: boolean,
};

const ResponsiveNav = (props: Props) => {
  const { open } = props;

  if (!open) {
    return null;
  }

  return (
    <nav className="nav">
      <ul>
        <Link to="/">Accueil</Link>
        <Link to="/challenges">Challenges</Link>
        <Link to="/">Équipes</Link>
        <Link to="/">Se connecter/S'inscrire</Link>
      </ul>
    </nav>
  );
};

export default ResponsiveNav;
