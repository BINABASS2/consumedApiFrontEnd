import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";
import { Nav } from "reactstrap";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import './Sidebar.css';
import hmylogo from 'assets/img/hmylogo.png'; // Correctly import the logo

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebarRef = React.useRef(null);

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  const { routes, rtlActive, logo } = props;
  let logoImg = null;
  let logoText = null;
  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a href={logo.outterLink} className="logo-img">
          <img
            src={hmylogo} // Use the imported logo here
            alt="inventory-logo"
            style={{ width: '300px', height: 'auto' }} // Modify the width and height here
          />
        </a>
      );
    } else {
      logoImg = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img
              src={logo.imgSrc || hmylogo}  // Fallback to hmylogo if logo.imgSrc is not provided
              alt="react-logo"
              style={{ width: '950px', height: 'auto' }}  // Adjust the size
            />
          </div>
        </Link>
      );
      logoText = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-normal"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </Link>
      );
    }
  }

  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper" ref={sidebarRef}>
            <Nav>
            {logoImg}
            {logoText}
            <hr/>
              {routes.map((prop, key) => {
                if (prop.redirect) return null;
                return (
                  <li
                    className={
                      activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      onClick={props.toggleSidebar}
                    >
                      <i className={prop.icon} />
                      <p>{rtlActive ? prop.rtlName : prop.name}</p>
                    </NavLink>
                  </li>
                );
              })}
              <li className="active-pro"></li>
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    text: PropTypes.node,
    imgSrc: PropTypes.string,
    imgStyle: PropTypes.object, // Ensure imgStyle is defined
  }),
  toggleSidebar: PropTypes.func,
};

export default Sidebar;
