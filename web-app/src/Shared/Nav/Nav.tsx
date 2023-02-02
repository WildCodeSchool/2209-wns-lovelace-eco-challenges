const ResponsiveNav = (props: any) => {
  const { open } = props;

  if (!open) {
    return null;
  }

  return (
    <nav className="nav">
      <ul>
        <li>Accueil</li>
        <li>Challenges</li>
        <li>Équipes</li>
        <li>Se connecter/S'inscrire</li>
      </ul>
    </nav>
  );
};

export default ResponsiveNav;
