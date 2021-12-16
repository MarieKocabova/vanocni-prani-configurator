import React from "react";

const MusicOption = ({ description, value, handleSelect }) => {
  return (
    <>
      <div className="field__radio">
        <input
          type="radio"
          name="music"
          id={`music-${value}`}
          onClick={() => {
            handleSelect(value);
          }} /* checked */
        />
        <label htmlFor={`music-${value}`}>{description}</label>
      </div>
    </>
  );
};

export default MusicOption;
