import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className="nav-list">
      <ul className="nav-list-ul">
        <Link to="/challenges" className="nav-list-items">{t('menu.challenges')}</Link>
        <Link to="/teams" className="nav-list-items">{t('menu.teams')}</Link>
        <Link to="/signin" className="nav-list-items">{t('menu.login')}</Link>
        <Link to="/signup" className="nav-list-items">{t('menu.signin')}</Link>
        <Link to="" className="nav-list-items">{t('menu.profile')}</Link>
      </ul>
    </nav>
  );
};

export default Nav;