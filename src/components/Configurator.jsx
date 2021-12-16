import React, { useState } from "react";

import configuration from "../configuration.js";

import Header from "./Header";
import Title from "./Title";
import Background from "./ConfigFields/Background";
import Colors from "./ConfigFields/Colors";
import Covers from "./ConfigFields/Covers";
import Snow from "./ConfigFields/Snow";
import Music from "./ConfigFields/Music.jsx";
import Text from "./ConfigFields/Text.jsx";
import Sender from "./ConfigFields/Sender.jsx";

const Configurator = ({ handleSaveConfig }) => {
  const [backgroundValue, setBackgroundValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [coverValue, setCoverValue] = useState("");
  const [snowValue, setSnowValue] = useState("");
  const [musicValue, setMusicValue] = useState("");
  const [text, setText] = useState("");
  const [signature, setSignature] = useState("");

  const backgroundSelect = (value) => {
    setBackgroundValue(value);
  };

  const colorSelect = (value) => {
    setColorValue(value);
  };

  const coverSelect = (value) => {
    setCoverValue(value);
  };

  const snowSelect = (value) => {
    setSnowValue(value);
  };

  const musicSelect = (value) => {
    setMusicValue(value);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const signatureChange = (e) => {
    setSignature(e.target.value);
  };

  const sendingToServer = {
    background: backgroundValue,
    color: colorValue,
    cover: coverValue,
    music: musicValue,
    snow: snowValue,
    text: text,
    sender: signature,
  };

  // console.log(sendingToServer);

  return (
    <>
      <Header />
      <Title title={"Vytvořit přáníčko"} />
      <main className="content">
        <div className="box">
          <div className="box__inside">
            <div className="configurator">
              <Background configuration={configuration} handleSelect={backgroundSelect} />
              <Colors configuration={configuration} handleSelect={colorSelect} />
              <Covers configuration={configuration} handleSelect={coverSelect} />
              <Snow configuration={configuration} handleSelect={snowSelect} />
              <Music configuration={configuration} handleSelect={musicSelect} />
              <Text handleChange={textChange} text={text} />
              <Sender handleChange={signatureChange} signature={signature} />

              {/* <!-- tlačítko pro odeslání --> */}
              <button
                type="submit"
                className="button button--big mt-30"
                onClick={() => {
                  handleSaveConfig(sendingToServer);
                }}
              >
                Uložit přáníčko
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Configurator;
