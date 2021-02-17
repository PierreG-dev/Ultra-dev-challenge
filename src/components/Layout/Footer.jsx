import React from "react";
import styled from "styled-components";

const Page = () => {
  return (
    <MainContainer>
      <div className="links-container">
        <ul>
          <li>Audio et sous-titres</li>
          <li>Presse</li>
          <li>Confidentialité</li>
          <li>Nous contacter</li>
        </ul>
        <ul>
          <li>Audiodescription</li>
          <li>Relations Investisseurs</li>
          <li>Informations Légales</li>
        </ul>
        <ul>
          <li>Centre d'aide</li>
          <li>Recrutement</li>
          <li>Préférences de cookies</li>
        </ul>
        <ul>
          <li>Cartes cadeaux</li>
          <li>Conditions d'utilisation</li>
          <li>Mentions légales</li>
        </ul>
      </div>
      <label>@1997 - 2021 Netflux, Inc.</label>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #171717;
  color: grey;

  .links-container {
    margin: auto;
    display: flex;

    ul {
      list-style: none;
    }

    li {
      margin: 20px 0;
      font-size: 0.9rem;
    }
  }

  label {
    margin: auto;
  }
`;

export default Page;
