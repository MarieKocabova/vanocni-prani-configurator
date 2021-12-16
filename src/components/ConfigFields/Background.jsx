import React from "react";

import BackgroundOption from "../ConfigOptionFields/BackgroundOption";

const Background = ({ configuration, handleSelect }) => {
  return (
    <div className="field">
      <label className="field__label">Pozadí stránky</label>

      <div className="field__swatch-group field__swatch-group--round">
        {configuration.backgrounds.map((ele, idx) => (
          <BackgroundOption description={ele.description} value={ele.value} key={idx} handleSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default Background;
