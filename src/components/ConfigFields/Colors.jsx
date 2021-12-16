import React from "react";
import ColorsOption from "../ConfigOptionFields/ColorsOption";

const Colors = ({ configuration, handleSelect }) => {
  return (
    <div className="field">
      <label className="field__label">Barva přáníčka</label>

      <div className="field__swatch-group field__swatch-group--round">
        {configuration.colors.map((ele, idx) => (
          <ColorsOption description={ele.description} value={ele.value} key={idx} handleSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default Colors;
