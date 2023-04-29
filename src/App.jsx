import CardDescription from "./components/CardDescription";
import Author from "./components/Author";
import dataDB from "./assets/db/phrases.json";
import { useState } from "react";
import Fondo1 from "./assets/img/fondo1.png";
import Fondo2 from "./assets/img/fondo2.png";
import Fondo3 from "./assets/img/fondo3.png";
import Fondo4 from "./assets/img/fondo4.png";

const App = () => {
  const [fortune, setFortune] = useState({
    author: "",
    phrase: "",
  });
  const [showCookie, setShowCookie] = useState(false);

  const imgBg = [Fondo1, Fondo2, Fondo3, Fondo4];
  const getRandomNumber = (limit) => Math.floor(Math.random() * limit);

  const randomFortune = () => {
    setShowCookie(true);
    setTimeout(() => {
      setFortune(dataDB[getRandomNumber(dataDB.length)]);
      document.body.style.backgroundImage = `url(${
        imgBg[getRandomNumber(imgBg.length)]
      })`;
      setShowCookie(false);
    }, 2000);
  };

  return (
    <>
      <div className="container">
        <p className="container-title">GALLETAS DE LA FORTUNA</p>
        <div className="container-btn">
          <button
            type="button"
            className={showCookie ? "btn-no-drop" : ""}
            disabled={showCookie}
            onClick={randomFortune}
          >
            <box-icon
              type="solid"
              animation="tada"
              name="magic-wand"
              pull="right"
              size="20px"
            ></box-icon>
            PROBAR MI SUERTE
          </button>
        </div>
        {showCookie && (
          <div className="cookie-animation">
            <img src="/cookie-favicon.png" alt="img_cookie" />
          </div>
        )}
        {!showCookie && fortune.phrase && (
          <CardDescription phrase={fortune.phrase} />
        )}
      </div>
      {!showCookie && fortune.author && <Author author={fortune.author} />}
    </>
  );
};

export default App;
