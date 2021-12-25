import React, { useState, useEffect } from "react";
import Snowfall from "react-snowfall";
import useAudio from "../hooks/useAudio";

import { useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();

  const [cardData, setCardData] = useState(null);
  const [cardOpen, setCardOpen] = useState("");

  const fetchCardData = () => {
    fetch(`https://xmas-api.itgirls.cz/cards/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCardData(data.data);
      });
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  console.log(cardData?.music);

  const [isPlaying, play, pause] = useAudio(`../assets/audio/jingle-bells.mp3`);
  //const [isPlaying, play, pause] = useAudio(`../assets/audio/${cardData?.music}.mp3`);

  const toggleOpen = () => {
    cardOpen === "" ? setCardOpen("card--open") : setCardOpen("");
    !isPlaying ? play() : pause();
  };

  return (
    <div className={`background background--${cardData?.background}`}>
      <div className="snow">
        <Snowfall snowflakeCount={cardData?.snow} />
      </div>
      <div className={`card card--${cardData?.color} ${cardOpen} `} onClick={toggleOpen}>
        <div className="card">
          <div className="cover">
            <img className="cover__image" src={`../assets/images/covers/${cardData?.cover}.svg`} />
          </div>

          <div className="inside-left">
            <div className="inside-left__content">
              <div className="inside-left__text">{cardData?.text}</div>
              <div className="inside-left__sender">{cardData?.sender}</div>
            </div>
            <img className="inside-left__logo" src="../assets/images/marieKocabova.svg" alt="Czechitas" />
          </div>

          <div className="inside-right">
            <div className="photo photo1">
              <img src="../assets/images/photos/photo1.jpg" />
            </div>
            <div className="photo photo2">
              <img src="../assets/images/photos/photo2.jpg" />
            </div>
            <div className="photo photo3">
              <img src="../assets/images/photos/photo3.jpg" />
            </div>
            <div className="photo photo4">
              <img src="../assets/images/photos/photo4.jpg" />
            </div>
          </div>
        </div>

        <p className="instructions">Kliknutím mě otevři</p>
      </div>
    </div>
  );
};

export default Card;
