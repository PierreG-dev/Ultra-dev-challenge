import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineGift } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <MainContainer>
      <nav>
        <div className="left-side">
          <Link to={"/"}>
            <img
              src={
                "https://www.netz.de/images/180412-netzflix-fake-header_500_300.png"
              }
              alt="logo"
            />
          </Link>
          <Link to={"/"}>Accueil</Link>
          <Link to={"/Series"}>Séries</Link>
          <Link to={"/Films"}>Films</Link>
          <Link to={"/New"}>Nouveautés les plus regardées</Link>
          <Link to={"/List"}>Ma liste</Link>
        </div>
        <div className="right-side">
          <AiOutlineSearch />
          <AiOutlineGift />
          <BsBellFill />
          <img
            src="https://risibank.fr/cache/stickers/d913/91397-full.png"
            alt=""
          />
        </div>
      </nav>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  nav {
    padding: 15px 0;
    width: calc(100vw - 15px);
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fafafa;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(0, 0, 0, 0.7665266790309874) 8%,
      rgba(0, 0, 0, 0.15028018043154767) 74%,
      rgba(0, 0, 0, 0) 100%
    );
    font-size: 0.9rem;

    a {
      color: #fafafa;
      text-decoration: none;
      transition: 0.2s;
    }
    a:hover {
      cursor: pointer;
      color: #aaaaaa;
    }

    .left-side {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      img {
        width: 200px;
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 15%;
      font-size: 1.3rem;

      img {
        width: 50px;
        height: 50px;
        object-fit: cover center;
        border-radius: 7px;
      }
    }
  }
`;

export default Navbar;
