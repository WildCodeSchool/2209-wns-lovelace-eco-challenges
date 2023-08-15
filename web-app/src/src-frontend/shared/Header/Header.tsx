import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Ecology from "@assets/logos/ecology.png";

import Nav from "@shared/Nav/Nav";
import ResponsiveNav from "@shared/Nav/ResponsiveNav";
import { useTranslation } from "next-i18next";

import { disableScroll } from "@utils/Browser";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation("page");

  const isClicked = () => {
    if (document.body.offsetWidth < 768 && open) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    disableScroll(open);

  }, [open]);

  return (
    <header className="header">
      <Link href="/">
        <div className="flex" onClick={isClicked}>
          <div className="w-10 mr-4">
            <Image 
              src={Ecology}
              alt="logo eco playground"
            />
          </div>
          <h1 className="text-white relative w-fit text-3xl m-0 after">{t('app.name')}</h1>
        </div>
      </Link>
      <div
        className="w-10 flex flex-col justify-around md:hidden"
        onClick={() => setOpen(!open)}
      >
        <div className=" border-2 border-white"></div>
        <div className=" border-2 border-white"></div>
        <div className=" border-2 border-white"></div>
      </div>
      <ResponsiveNav
        open={open}
        isClicked={isClicked}
        />
      <Nav />
    </header>
  );
};

export default Header;
