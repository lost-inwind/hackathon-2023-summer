import { useEffect, useState } from "react";

import { Logo } from "../../assets";
import { NavLinks } from "../../constants";
import { NavLink, useLocation } from "react-router-dom";
import LaunchButton from "components/Button";
import Wallet from "pages/airDropList/Wallet";

const NavBar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  return (
    <nav
      className={`w-full flex py-6 sm:px-20 px-6 justify-between items-center bg-blue-950 `}
    >
      <div className="flex items-center">
        <img src={Logo} alt="dandelion" className="w-[60px] h-[60px]" />
        <span className="text-white text-xl font-bold px-4">Dandelion</span>
      </div>
      <ul className="list-none flex  items-center px-5">
        {NavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins  cursor-pointer text-[20px]   text-white  hover:text-space-cyan-light ${
              active === nav.path ? "font-extrabold" : ""
            } ${index === NavLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.path)}
          >
            <NavLink to={`${nav.path}`}>{nav.title}</NavLink>
          </li>
        ))}
      </ul>
      <div>
        {location.pathname === "/" ? (
          <LaunchButton size="md"></LaunchButton>
        ) : (
          <Wallet />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
