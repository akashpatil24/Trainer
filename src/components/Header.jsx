import React from 'react'
import Navbar from './Navbar'
import logo from '../assets/logo.jpg'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      <img src={logo} alt='logo' className='logo'></img>
      </NavLink>
    <Navbar></Navbar>
    </MainHeader>
  )
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 60%;
  }
`;

export default Header
