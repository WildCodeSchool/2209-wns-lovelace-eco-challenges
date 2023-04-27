import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Home from "@assets/logos/Home";
import Login from "@assets/logos/Login";
import Groups from "@assets/logos/Groups";
import Profile from "@assets/logos/Profile";
import Hands from "@assets/logos/Hands";

type Props = {
  open: boolean,
  isClicked: () => void,
};

const ResponsiveNav = (props: Props) => {
  const { open, isClicked } = props;

  const { t } = useTranslation("page");

  if (!open) {
    return null;
  }

  return (
    <nav className="absolute
    left-0
    bg-primary
    text-white
    w-full
    h-full
    top-20
    z-40">
      <ul className="flex
          items-center
          justify-center
          flex-col text-3xl mt-5 ml-5">
        <Link className="py-5 w-full flex items-baseline"href="/challenges" onClick={() => isClicked()}>
          <i className="mr-3">
            <Home width="30px" height="30px" fill="white" />
          </i>
          {t('menu.challenges')}
        </Link>
        <Link className="py-5 w-full flex items-baseline" href="/teams" onClick={() => isClicked()}>
          <i className="mr-3">
            <Groups width="30px" height="30px" fill="white" />
          </i>
          {t('menu.teams')}
        </Link>
        <Link className="py-5 w-full flex items-baseline" href="/signin" onClick={() => isClicked()}>
          <i className="mr-3">
            <Login width="30px" height="30px" fill="white" />
          </i>
          {t('menu.login')}
        </Link>
        <Link className="py-5 w-full flex items-baseline" href="/signup" onClick={() => isClicked()}>
          <i className="mr-3">
            <Hands width="30px" height="30px" fill="white" />
          </i>
          {t('menu.signin')}
        </Link>
        <Link className="py-5 w-full flex items-baseline" href="" onClick={() => isClicked()}>
          <i className="mr-3">
            <Profile width="30px" height="30px" fill="white" />
          </i>
          {t('menu.profile')}
        </Link>
      </ul>
    </nav>
  );
};

export default ResponsiveNav;