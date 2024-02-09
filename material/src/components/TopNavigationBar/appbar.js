import React, { useState, useEffect } from "react";
import NeramLogo from "./Childrens/logo";
import ActAppBar from "./Childrens/actAppbar";
import NavMenu from "./Childrens/menuItems";
import styled from "styled-components";

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  ${({ scrolled }) =>
    scrolled
      ? `
        background: linear-gradient(111.37738709038058deg,
          #2b2d4e 1.557291666666667%,
          #e1148b 101.34895833333333%);
        height: 4rem;
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.15);
        top: 0;
      `
      : `
        background: transparent;
        box-shadow: none;
        height: 4rem;
      `}
`;

const ScrollNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar scrolled={scrolled}>
      <div className="px-3 d-flex container h-100">
        <NeramLogo />
        <NavMenu />
        <ActAppBar />
      </div>
    </Navbar>
  );
};

function NeramAppBar() {
  return <ScrollNavbar className="position-fixed w-100"></ScrollNavbar>;
}

export default NeramAppBar;
