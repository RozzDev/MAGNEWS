import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt, BiMenuAltRight } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = React.useState(1);


  const navs = [
    { id: 1, name: "Home", value: "general", link: "/" },
    { id: 2, name: "Business", value: "business", link: "/business" },
    {
      id: 3,
      name: "Entertainment",
      value: "entertainment",
      link: "/entertainment",
    },
    { id: 4, name: "Science", value: "science", link: "/science" },
    { id: 5, name: "Sport", value: "sport", link: "/sport" },
    { id: 6, name: "Technology", value: "technology", link: "/technology" },
  ];
  
  const [togle, setTogle] = React.useState(false);

  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 930) {
      return {top: !menuOpen && '1rem', display: !menuOpen && "none"}
    }
  };

  function menuClick() {
    setTogle((prevState) => !prevState);
  }
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-container">
          <div className="logo">
            <span>MagNews</span>
            <span className="upper">24</span>
          </div>
          <ul className="nav-links" style={getMenuStyle(togle)}>
            {navs.map((item) => {
              function linkClick() {
                setActive(item.id);
              }
              return (
                  <Link
                  className={active === item.id ? "active" : "inactive"}
                  key={item.id}
                  onClick={linkClick}
                  to={item.link}
                >
                  {item.name}
                </Link>
                
              );
            })}
          </ul>
          <div className="menu" onClick={menuClick}>
            <BiMenuAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
