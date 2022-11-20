import React, {useState, useEffect} from 'react';
import {NavLink, useLocation, Link} from 'react-router-dom';
import './MainNavBar.scss';
import {useSelector, useDispatch} from 'react-redux';
import {DELETE_TOKEN} from '../../store/Auth';

function MainNavBar() {
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state: any) => state.authToken.authenticated,
  );
  const {pathname} = useLocation();

  const logout = () => {
    console.log('로그아웃 시도');
    dispatch(DELETE_TOKEN());
    localStorage.setItem('token', '');
  };

  return (
    <nav
      id="MainNavBar"
      className={
        pathname === '/'
          ? 'homeClick flex align-center justify-center'
          : 'noneClick flex align-center justify-center'
      }>
      <div className="nav-container flex align-center">
        <nav className="nav-left preMid flex align-center">
          <Link to="/" className="nav-left_home fs-24 preBold ">
            성냥팔이 호랭이
          </Link>
          <>
            <NavLink
              className="nav-left-text__link fs-16 preMid"
              style={
                pathname === '/notice' ? {color: '#f0801a'} : {color: '#3a3a3a'}
              }
              to="/notice">
              공지사항
            </NavLink>
            <NavLink
              className="nav-left-text__link fs-16 preMid"
              style={
                pathname === '/commu' ? {color: '#f0801a'} : {color: '#3a3a3a'}
              }
              to="/commu">
              신고관리
            </NavLink>
            <NavLink
              className="nav-left-text__link fs-16 preMid"
              style={
                pathname === '/mission'
                  ? {color: '#f0801a'}
                  : {color: '#3a3a3a'}
              }
              to="/mission">
              공통미션
            </NavLink>
          </>
        </nav>
        <nav className="nav-right">
          {!authenticated ? (
            <NavLink
              className="nav-right preMid fs-16"
              to="/login"
              style={
                pathname === '/login' ? {color: '#f0801a'} : {color: '#3a3a3a'}
              }>
              로그인
            </NavLink>
          ) : (
            <button onClick={logout}>
              <p>로그아웃</p>
            </button>
          )}
        </nav>
      </div>
    </nav>
  );
}

export default MainNavBar;
