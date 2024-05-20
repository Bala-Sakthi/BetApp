import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';


const ReactSidebar = ({ sidebarItems, onClick }) => {
  const location = useLocation();

  const renderMenuItems = (items) => {
    return items.map((item) => {
      const isActive = location.pathname === item.url;
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            className='fs-15 text-bolder'
            active={isActive}
            rootStyles={{
              backgroundColor: isActive ? 'white' : '#FFFFFF',
              color: 'black',
            }}
            key={item.id}
            title={item.label}
            label={item.label}
            icon={item.icon}
          >
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Link
            className='textDecoration-none color-white'
            to={item.url}
            style={{ textDecoration: 'none' }}
            key={item.id} // Ensure unique key for each link
          >
            <MenuItem
              onClick={onClick}
              className='fs-15 text-bolder'
              active={isActive}
              rootStyles={{
                backgroundColor: isActive ? '#bcc3e6' : '#FFFFFF',
                color: isActive ? 'black' : 'black',
              }}
              icon={item.icon}
            >
              {item.label}
            </MenuItem>
          </Link>
        );
      }
    });
  };

  return (
    <div className="sidebar-container" style={{ width: 'auto', height: '100vh', overflow: 'hidden' }}>
      <Sidebar
        backgroundColor='#FFFFFF'
        rootStyles={{
          backgroundColor: '#313947',
          color: 'white',
          fontWeight: 'bolder',
          height: '100%',
          overflow: 'hidden', 
        }}
      >
        <div className="menu-container">
          <Menu iconShape='circle'>{renderMenuItems(sidebarItems)}</Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default ReactSidebar;
