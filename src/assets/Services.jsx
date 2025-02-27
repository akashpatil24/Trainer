import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import body from './body-conditioning.jpg'
import cardio from './cardio-strength.jpg'
import mobility from './mobility.png'

const Services = () => {
  return (
    <Wrapper className="section">
        <h2 className="common-heading">Our Services</h2>
    <div className="container grid grid-three-column">
    <div  className="card">
            <figure>
                <a href='services/1' ><img src={body} alt='services image'></img></a>
            </figure>
            <div className="card-data">
            <h3>Body Conditioning</h3>
                <p>Body conditioning exercises target your whole body, using lots of different muscles to strengthen, shape, and tone your body.</p>
                <NavLink to="/services">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>

            <div  className="card">
            <figure>
                <a href='services/1' ><img src={cardio} alt='services image'></img></a>
            </figure>
            <div className="card-data">
            <h3>Cardio & Stregth Training</h3>
                <p>Both cardio and strength training can help you to burn more calories each day and reach a caloric deficit to lose body fat.</p>
                <NavLink to="/services">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
            <div  className="card">
            <figure>
                <a href='servicess/1' ><img src={mobility} alt='services image'></img></a>
            </figure>
            <div className="card-data">
            <h3>Stability & Mobility Training</h3>
                <p>Stability and mobility  are elements of fitness that help us bend, move and stay in control of our movements, respectively.</p>
                <NavLink to="/services">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
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
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
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
export default Services
