import React from "react";

import MusicOption from "../ConfigOptionFields/MusicOption";

const Music = ({ configuration, handleSelect }) => {
  return (
    <div className="field">
      <label className="field__label ">Hudba</label>
      <div className="field__radio-group">
        {configuration.music.map((ele, idx) => (
          <MusicOption description={ele.description} value={ele.value} key={idx} idx={idx} handleSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default Music;
