import { Link } from 'react-router-dom';

type Props = {
  open: boolean,
  isClicked: () => void,
};

const ResponsiveNav = (props: Props) => {
  const { open, isClicked } = props;

  if (!open) {
    return null;
  }

  return (
    <nav className="responsive-nav">
      <ul className="responsive-nav-ul">
        <Link className="responsive-nav-li" to="/challenges" onClick={() => isClicked()}>Challenges</Link>
        <Link className="responsive-nav-li" to="/teams" onClick={() => isClicked()}>Équipes</Link>
        <Link className="responsive-nav-li" to="/signin" onClick={() => isClicked()}>Se connecter</Link>
        <Link className="responsive-nav-li" to="/signup" onClick={() => isClicked()}>S'inscrire</Link>
        <Link className="responsive-nav-li" to="" onClick={() => isClicked()}>Profil</Link>
      </ul>
    </nav>
  );
};

export default ResponsiveNav;
