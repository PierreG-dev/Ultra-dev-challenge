import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Layout/Footer";
import { BsChevronRight } from "react-icons/bs";

const Login = ({ setConnected }) => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState(false);

  const handleConnection = (e) => {
    e.preventDefault();
    if (mail === "secret") {
      setError(false);
      setConnected(true);
      return;
    } else {
      setError(true);
      return;
    }
  };

  return (
    <MainContainer>
      <header>
        <div className="header-content">
          <h1>Films, séries TV et bien plus en illimité.</h1>
          <p>Où que vous soyez. Annulez à tout moment.</p>

          <form onSubmit={handleConnection}>
            <label>
              Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
              abonner ou réactiver votre abonnement.
            </label>
            <div className={"form-input"}>
              <input
                type="text"
                placeholder={"Adresse e-mail"}
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <button>
                Commencer <BsChevronRight />
              </button>
            </div>
            {error ? (
              <p style={{ color: "red", fontSize: "0.9rem" }}>
                Identifiants incorrects.
              </p>
            ) : null}
          </form>
        </div>
      </header>

      <section>
        <div>
          <h2>Regardez Netflix sur votre TV.</h2>
          <p>
            Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast,
            Apple TV, lecteurs Blu-ray et bien plus.
          </p>
        </div>
        <video autoPlay="" playsInline="" muted="" loop="">
          <source
            src={
              "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            }
            type={"video/mp4"}
          />
        </video>
      </section>
      <section className={"second-section"}>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
        />

        <div>
          <h2>
            Téléchargez vos séries préférées pour les regarder hors connexion.
          </h2>
          <p>
            Enregistrez vos programmes préférés et ayez toujours quelque chose à
            regarder.
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>Où que vous soyez.</h2>
          <p>
            Regardez des films et séries TV en accès illimité sur votre TV,
            smartphone, tablette et ordinateur, tout compris.
          </p>
        </div>
        <video autoPlay="" playsInline="" muted="" loop="">
          <source
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            type={"video/mp4"}
          />
        </video>
      </section>
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  header {
    color: #fafafa;
    width: 100%;
    height: 75vh;
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/8ef88e03-6f89-4c75-ae51-f8da7d252358/cc4aac7c-7f98-467d-a8eb-dbdd892ccc0d/FR-fr-20210208-popsignuptwoweeks-perspective_alpha_website_small.jpg");
    background-blend-mode: saturation;
    background-color: rgba(0, 0, 0, 0.45);
    background-position: center;
    background-size: cover;
    box-shadow: inset 0px 0px 150px 50px rgba(0, 0, 0, 1);
    border: 2px solid #373737;
    border-top: none;
    h1 {
      font-size: 3rem;
      margin-bottom: 0;
    }
    p {
      font-size: 1.9rem;
    }

    .header-content {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    form {
      margin-top: 2rem;
      label {
        font-size: 1.2rem;
      }

      .form-input {
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
        height: 60px;

        input {
          height: 100%;
          width: 55%;
          padding: 0 15px;
          margin: 0;
          border: none;
        }
        button {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 20px;
          height: 100%;
          width: 30%;
          color: #fafafa;
          margin-left: 0.5px;
          background: #e50914;
          font-size: 1.7rem;
          border: none;
        }
      }
    }
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fafafa;
    padding: 75px;
    background: black;
    margin: 0;
    border: 4px solid #373737;
    border-left: 1px solid #373737;
    border-right: 1px solid #373737;

    div {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h2 {
        font-size: 2.9rem;
        margin: 0;
      }
      p {
        font-size: 1.6rem;
      }
    }

    video {
      width: 35%;
    }
    img {
      width: 40%;
    }
  }
`;

export default Login;
