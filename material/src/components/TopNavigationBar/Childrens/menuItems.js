import React, { useState } from "react";
import styled from "styled-components";

// Add your menu items here in this array
const MenuList = [
  {
    smallName: "free",
    bigName: "Materials",
    href: "Free-NATA-study-Materials.html",
  },
  {
    smallName: "Syllabus",
    bigName: "Nata 24'",
    href: "Free-NATA-study-Materials.html",
  },
  {
    smallName: "Paper 2",
    bigName: "JEE B.arch",
    href: "Free-NATA-study-Materials.html",
  },
  {
    smallName: "Neram Nata",
    bigName: "Alumnus",
    href: "Free-NATA-study-Materials.html",
  },
  {
    smallName: "Coaching",
    bigName: "Address",
    href: "Contact us",
  },
];

// Yellow white text Menus Parent component

//  styles
const NavaItemYellow = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: var(--yellow);
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
`;

const MenuStyle = styled.div`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: 0.5px;
`;

const ThreeDotIcon = styled.span`
  cursor: pointer;
`;

function MenuListItem({ link, subtext, maintext, index }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="nav-link p-2 mx-3"
    >
      <NavaItemYellow uppercase={index === 0}>{subtext}</NavaItemYellow>
      <MenuStyle className="nav-white" style={{ marginTop: "-5px" }}>
        {maintext}
      </MenuStyle>
    </a>
  );
}

// Listing of menu items from Array

function NavMenu() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="d-flex justify-content-center w-100 collapse navbar-collapse">
      {MenuList.slice(0, 5).map((item, index) => (
        <React.Fragment key={index}>
          <MenuListItem
            link={item.href}
            subtext={item.smallName}
            maintext={item.bigName}
            index={index}
          />
          {index < 4 ? <div className="separator"></div> : <div></div>}
        </React.Fragment>
      ))}
      {MenuList.length > 5 && (
        <ThreeDotIcon onClick={toggleDropdown}>...</ThreeDotIcon>
      )}
      {showDropdown && (
        <div className="dropdown-menu">
          {MenuList.slice(5).map((item, index) => (
            <a
              key={index}
              className="dropdown-item"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.bigName}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavMenu;
