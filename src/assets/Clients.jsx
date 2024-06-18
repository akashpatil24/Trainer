import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import insta1 from './insta1.png'
import insta2 from './insta2.png'
import insta3 from './insta3.png'

const Clients = () => {
  return (
    <Wrapper className="section">
         <h2 className="common-heading">Our Clients</h2>
    <div className="container grid grid-three-column">
    <div  className="card">
            <figure>
                <a href='services/1' ><img src={insta1} alt='services image'></img></a>
                
            </figure>
            <NavLink to="https://www.instagram.com/p/C7CkfhZBrz-/" target='blank'>
                  <Button className="btn">Know More</Button>
                </NavLink>
            </div>
            <div  className="card">
            <figure>
                <a href='services/1' ><img src={insta2} alt='services image'></img></a>
            </figure>
            <NavLink to="https://www.instagram.com/p/C5gwKPPLzHX/" target='blank'>
                  <Button className="btn">Know More</Button>
                </NavLink>
            </div>
            <div  className="card">
            <figure>
                <a href='servicess/1' ><img src={insta3} alt='services image'></img></a>
            </figure>
            <NavLink to="https://www.instagram.com/p/C4uphkJtdGW/" target='blank'>
                  <Button className="btn">Read More</Button>
                </NavLink>
            </div>
        </div>
     </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
    width: 280px;
  height: 300px;
      
      margin-top: 1.5rem;
     
      transition: all 0.2s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Clients
