import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className="text-white
    hidden
    items-center
    justify-end
    md:flex">
      <ul className="flex
            justify-end">
        <Link to="/challenges" className="px-2
                text-base
                lg:text-2xl">{t('menu.challenges')}</Link>
        <Link to="/teams" className="px-2
                text-base
                lg:text-2xl">{t('menu.teams')}</Link>
        <Link to="/signin" className="px-2
                text-base
                lg:text-2xl">{t('menu.login')}</Link>
        <Link to="/signup" className="px-2
                text-base
                lg:text-2xl">{t('menu.signin')}</Link>
        <Link to="" className="px-2
                text-base
                lg:text-2xl">{t('menu.profile')}</Link>
      </ul>
    </nav>
  );
};

export default Nav;