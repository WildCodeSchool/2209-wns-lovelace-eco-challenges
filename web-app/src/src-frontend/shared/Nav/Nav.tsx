import Link from "next/link";
import { useTranslation } from "next-i18next";

const Nav = () => {
  const { t } = useTranslation("page");

  return (
    <nav
      className="text-white
    hidden
    items-center
    justify-end
    md:flex"
    >
      <ul
        className="flex
            justify-end"
      >
        <Link href="/challenges">
          <span
            className="px-2
                text-base
                lg:text-2xl"
          >
            {t("menu.challenges")}
          </span>
        </Link>
        <Link href="/teams">
          <span
            className="px-2
                text-base
                lg:text-2xl"
          >
            {t("menu.teams")}
          </span>
        </Link>
        <Link href="/signin">
          <span
            className="px-2
                text-base
                lg:text-2xl"
          >
            {t("menu.login")}
          </span>
        </Link>
        <Link href="/signup">
          <span
            className="px-2
                text-base
                lg:text-2xl"
          >
            {t("menu.signin")}
          </span>
        </Link>
        <Link href="/profile">
          <span
            className="px-2
                text-base
                lg:text-2xl"
          >
            {t("menu.profile")}
          </span>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
