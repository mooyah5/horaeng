import React from 'react';
import {NavLink, useLocation, Link} from 'react-router-dom';
import './MainNavBar.scss';

function MainNavBar() {
  const {pathname} = useLocation();
  console.log(pathname);

  const activeTabClassName = active => {
    const prefix = 'nav-left-text__link fs-16 btn--';
    return active ? `${prefix}active` : `${prefix}unactive`;
  };
  return (
    <nav
      id="MainNavBar"
      className={
        pathname === '/'
          ? 'homeClick flex align-center justify-center'
          : 'noneClick flex align-center justify-center'
      }
      // style = {pathname==="/" ? {background-color : transparent} : {background-color : "#000000"} }
    >
      <div className="nav-container flex align-center">
        <nav className="nav-left preMid flex align-center">
          <Link to="/" className="nav-left_img fs-28 preBold ">
            성냥팔이 호랭이
          </Link>
          <>
            <NavLink
              className={({isActive}) => activeTabClassName(isActive)}
              to="/notice">
              공지사항
            </NavLink>
            <NavLink
              className={({isActive}) => activeTabClassName(isActive)}
              to="/commu">
              커뮤니티
            </NavLink>
            <NavLink
              className={({isActive}) => activeTabClassName(isActive)}
              to="/mission">
              공통미션
            </NavLink>
          </>
        </nav>
        <nav className="nav-right">
          <NavLink className="nav-right preMid fs-16" to="/login">
            로그인
          </NavLink>
        </nav>
      </div>
    </nav>
  );
}

export default MainNavBar;
