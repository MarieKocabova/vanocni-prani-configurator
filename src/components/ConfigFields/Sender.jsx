import React, { useState } from "react";

const Sender = ({ signature, handleChange }) => {
  //const [signature, setSignature] = useState("");

  /* const handleChange = (e) => {
    setSignature(e.target.value);
  };
  console.log(signature); */

  return (
    <div className="field">
      <label className="field__label" htmlFor="sender">
        Odesílatel (podpis)
      </label>
      <input className="field__input" type="text" name="sender" id="sender" rows="3" maxLength="20" autoComplete="off" value={signature} onChange={handleChange} />
    </div>
  );
};

export default Sender;
