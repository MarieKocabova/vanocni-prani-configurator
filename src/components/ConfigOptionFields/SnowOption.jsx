import React from "react";

const SnowOption = ({ description, value, idx, handleSelect }) => {
  return (
    <>
      <div className="field__radio">
        <input
          type="radio"
          name="snow"
          id={`snow-${idx}`}
          onClick={() => {
            handleSelect(value);
          }} /* checked */
        />
        <label htmlFor={`snow-${idx}`}>{description}</label>
      </div>
    </>
  );
};

export default SnowOption;
