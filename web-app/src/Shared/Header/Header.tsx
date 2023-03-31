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
    <header
      className="bg-primary
    flex
    justify-between
    p-5
    h-20"
    >
      <Link to="/" onClick={isClicked}>
        <div className="flex">
          <div
            className="w-10
            mr-4"
          >
            <img src={Ecology} alt="logo eco playground" />
          </div>
          <h1
            className="text-white
            relative
            w-fit
            text-3xl
            m-0
            after"
          >
            Eco Playground</h1>
        </div>
      </Link>
      <div
        onClick={() => setOpen(!open)}
        className="w-10
            flex
            flex-col
            justify-around
            md:hidden"
      >
        <div
          className=" border-2
                border-white"
        ></div>
        <div
          className=" border-2
                border-white"
        ></div>
        <div
          className=" border-2
                border-white"
        ></div>
      </div>
      <ResponsiveNav open={open} isClicked={isClicked} />
      <Nav />
    </header>
  );
};

export default Header;
