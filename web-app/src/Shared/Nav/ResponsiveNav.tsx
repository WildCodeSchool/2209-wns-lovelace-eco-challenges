import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from "../../assets/logos/Home";
import Login from "../../assets/logos/Login";
import Groups from "../../assets/logos/Groups";
import Profile from "../../assets/logos/Profile";
import Hands from "../../assets/logos/Hands";

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
        <Link className="responsive-nav-li" to="/challenges" onClick={() => isClicked()}>
          <i className="responsive-nav-logo">
            <Home width="30px" height="30px" fill="white" />
          </i>
          {t('menu.challenges')}
        </Link>
        <Link className="responsive-nav-li" to="/teams" onClick={() => isClicked()}>
          <i className="responsive-nav-logo">
            <Groups width="30px" height="30px" fill="white" />
          </i>
          {t('menu.teams')}
        </Link>
        <Link className="responsive-nav-li" to="/signin" onClick={() => isClicked()}>
          <i className="responsive-nav-logo">
            <Login width="30px" height="30px" fill="white" />
          </i>
          {t('menu.login')}
        </Link>
        <Link className="responsive-nav-li" to="/signup" onClick={() => isClicked()}>
          <i className="responsive-nav-logo">
            <Hands width="30px" height="30px" fill="white" />
          </i>
          {t('menu.signin')}
        </Link>
        <Link className="responsive-nav-li" to="" onClick={() => isClicked()}>
          <i className="responsive-nav-logo">
            <Profile width="30px" height="30px" fill="white" />
          </i>
          {t('menu.profile')}
        </Link>
      </ul>
    </nav>
  );
};

export default ResponsiveNav;
