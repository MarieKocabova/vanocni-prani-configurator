import React from "react";

import CoversOption from "../ConfigOptionFields/CoversOption";

const Covers = ({ configuration, handleSelect }) => {
  return (
    <div className="field">
      <label className="field__label">Obrázek na obálce</label>

      <div className="field__swatch-group field__swatch-group--big">
        {configuration.covers.map((ele, idx) => (
          <CoversOption description={ele.description} value={ele.value} key={idx} handleSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default Covers;
