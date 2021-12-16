import React from "react";

const CoversOption = ({ description, value, handleSelect }) => {
  return (
    <div className="field__swatch">
      <input
        type="radio"
        name="cover"
        id={`cover-${value}`}
        onClick={() => {
          handleSelect(value);
        }} /* checked */
      />
      <label htmlFor={`cover-${value}`} className={`swatch--cover-${value}`} data-description={description}></label>
    </div>
  );
};

export default CoversOption;
