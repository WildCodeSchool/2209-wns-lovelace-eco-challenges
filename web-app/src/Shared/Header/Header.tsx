import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Ecology from "../../assets/logos/ecology.png";

import Nav from "../../Shared/Nav/Nav";
import ResponsiveNav from "../../Shared/Nav/ResponsiveNav";

import { disableScroll } from "../../Utils/Browser";

const Header = () => {
  const [open, setOpen] = useState(false);

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
      <Link to="/" onClick={isClicked}>
        <div className="flex">
          <div className="header-logo">
            <img src={Ecology} alt="logo eco playground" />
          </div>
          <h1 className="title">Eco Playground</h1>
        </div>
      </Link>
      <div onClick={() => setOpen(!open)} className="burger-container">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <ResponsiveNav open={open} isClicked={isClicked} />
      <Nav />
    </header>
  );
};

export default Header;
