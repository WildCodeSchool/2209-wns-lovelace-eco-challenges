import { useState } from "react";
import Ecology from "../../assets/logos/ecology.png";

import Nav from '../../Shared/Nav/Nav';
import ResponsiveNav from '../../Shared/Nav/ResponsiveNav';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="flex">
        <div className="header-logo">
          <img src={Ecology} alt="logo eco playground" />
        </div>
        <h1 className="title">Eco Playground</h1>
      </div>
      <div onClick={() => setOpen(!open)} className="burger-container">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <ResponsiveNav open={open} />
      <Nav />
    </header>
  );
};

export default Header;
