import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ ItemNumber, title, link, isActive, toggleActive }) {
  return (
    <div className='block z-10'>
      <NavLink
        to={link}
        className={`text-3xl font-extralight`}
        onClick={toggleActive}
      >
        <div className={`nav-item hover:bg-white p-10 bg-gray-200 text-4xl font-light text-black ${isActive ? 'active-nav-item' : ''}`}>
          {ItemNumber}
        </div>
        {title}
      </NavLink>
    </div>
  );
}

function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleToggle = (navItemNumber) => {
    setActiveNavItem(navItemNumber);
  };

  return (
    <div className='flex w-full mt-5 justify-center p-1/2'>
      <div className='z-5 flex w-full justify-around ml-20 mr-10 mt-5'>
        <NavItem
          ItemNumber={1}
          title={"Initial Information"}
          link={"/path1"}
          isActive={activeNavItem === 1}
          toggleActive={() => handleToggle(1)}
        />
        <NavItem
          ItemNumber={2}
          title={"Party Information"}
          link={"/path2"}
          isActive={activeNavItem === 2}
          toggleActive={() => handleToggle(2)}
        />
          <NavItem
          ItemNumber={3}
          title={"Logistics"}
          link={"/path3"}
          isActive={activeNavItem === 3}
          toggleActive={() => handleToggle(3)}
        />
          <NavItem
          ItemNumber={4}
          title={"Additional Services"}
          link={"/path4"}
          isActive={activeNavItem === 4}
          toggleActive={() => handleToggle(4)}
        />
        {/* Add more NavItem components as needed */}
      </div>

      <div className="w-2/3 h-1 absolute top-24 bg-black"></div>
    </div>
  );
}

export default Navbar;
