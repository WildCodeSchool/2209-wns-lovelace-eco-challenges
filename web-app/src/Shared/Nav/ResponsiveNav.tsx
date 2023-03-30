import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Props = {
  open: boolean,
  isClicked: () => void,
};

const ResponsiveNav = (props: Props) => {
  const { open, isClicked } = props;

  const { t } = useTranslation();

  if (!open) {
    return null;
  }

  return (
    <nav className="responsive-nav">
      <ul className="responsive-nav-ul">
        <Link className="responsive-nav-li" to="/challenges" onClick={() => isClicked()}>{t('menu.challenges')}</Link>
        <Link className="responsive-nav-li" to="/teams" onClick={() => isClicked()}>{t('menu.teams')}</Link>
        <Link className="responsive-nav-li" to="/signin" onClick={() => isClicked()}>{t('menu.login')}</Link>
        <Link className="responsive-nav-li" to="/signup" onClick={() => isClicked()}>{t('menu.signin')}</Link>
        <Link className="responsive-nav-li" to="" onClick={() => isClicked()}>{t('menu.profile')}</Link>
      </ul>
    </nav>
  );
};

export default ResponsiveNav;
