import { useState } from "react";
import { NavbarContext } from "../context";

const NavbarContextProvider = ({ children, window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <NavbarContext.Provider
      value={{ handleDrawerToggle, mobileOpen, container }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
