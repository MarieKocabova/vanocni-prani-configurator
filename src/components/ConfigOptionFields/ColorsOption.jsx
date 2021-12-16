import React from "react";

const ColorsOption = ({ description, value, handleSelect }) => {
  return (
    <div className="field__swatch">
      <input
        type="radio"
        name="color"
        id={`color-${value}`}
        onClick={() => {
          handleSelect(value);
        }} /* checked */
      />
      <label htmlFor={`color-${value}`} className={`swatch--${value}`} data-description={description}></label>
    </div>
  );
};

export default ColorsOption;
