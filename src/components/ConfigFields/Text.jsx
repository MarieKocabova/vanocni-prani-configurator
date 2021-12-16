import React from "react";

const Text = ({ text, handleChange }) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor="text">
        Text uvnitř přáníčka
      </label>
      <textarea className="field__input" name="text" id="text" rows="3" maxLength="100" autoComplete="off" value={text} onChange={handleChange}>
        {text}
      </textarea>
      <p className="field__description">
        Zbývá <strong>{100 - text.length}</strong>/100 znaků.
      </p>
    </div>
  );
};

export default Text;
