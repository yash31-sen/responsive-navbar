import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.png';
import Nav1Dropdown from './DropdownComponents/nav1dropdown1/Nav1Dropdown.jsx';
import Nav1dropdown2 from './DropdownComponents/nav1dropdown2/Nav1dropdown2.jsx';
import Nav2dropdown1 from './DropdownComponents/nav2dropdown1/Nav2dropdown1.jsx';
import Drawer from './Drawer/Drawer.jsx';
import Hamberger from '../../assets/hamburger.png'

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    drawer: false
  });

  const handleDropdownClick = (dropdownName) => {
    setDropdowns((prevState) => {
      // Update dropdown state, ensuring only one dropdown is open
      return {
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
        ...(dropdownName === 'dropdown1' ? { dropdown2: false, dropdown3: false } : {}),
        ...(dropdownName === 'dropdown2' ? { dropdown1: false, dropdown3: false } : {}),
        ...(dropdownName === 'dropdown3' ? { dropdown1: false, dropdown2: false } : {}),
        ...(dropdownName === 'drawer' ? {} : {}),
      };
    });
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar1">
          <ul className="navbar1-ul">
            <li
              className="navbar1-dropdown1"
              onClick={() => handleDropdownClick('dropdown1')}
            >
              Temporary↓
            </li>
            <li
              className="navbar1-dropdown2"
              onClick={() => handleDropdownClick('dropdown2')}
            >
              Temporary↓
            </li>
            <li>Temporary</li>
            <li>Temporary</li>
            <li>Temporary</li>
            <li>Temporary</li>
            <li>Temporary</li>
          </ul>
        </div>
        {dropdowns.dropdown1 && <Nav1Dropdown />}
        {dropdowns.dropdown2 && <Nav1dropdown2 />}
        <div className="navbar2">
          <div className="navbar-logo">
            <img className='logo' src={Logo} alt="Logo" />
          </div>
          <div>
            <ul className="navbar2-ul">
              <li
                className="navbar2-dropdown1"
                onClick={() => handleDropdownClick('dropdown3')}
              >
                Temporary↓
              </li>
              <li>Temporary↓</li>
              <li>Temporary↓</li>
              <li>Temporary</li>
              <li>Temporary</li>
              <li>Temporary</li>
              {/* <button>Temporary Temp</button> */}
              <li></li>
            </ul>
            <img
              onClick={() => handleDropdownClick('drawer')}
              src={Hamberger} className='hamberger' alt="Hamburger" />
          </div>
        </div>
        {dropdowns.dropdown3 && <Nav2dropdown1 />}
      </div>

      {dropdowns.drawer && <Drawer />}
    </>
  );
};

export default Navbar;
