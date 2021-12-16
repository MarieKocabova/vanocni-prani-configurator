import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Title from "./Title";

const Pickup = () => {
  const [code, setCode] = useState("");
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <>
      <Header />
      <Title title={"Vyzvednout přáníčko"} />

      <main className="content">
        <form className="pickup" autoComplete="off">
          <label htmlFor="pickup-code" className="pickup__label">
            Zadej šestimístný kód přáníčka
          </label>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <input id="pickup-code" className="pickup__code" type="text" maxLength="6" autoComplete="off" value={code} onChange={handleChange} />
            </div>
          </div>

          <Link to={`/card/${code}`}>
            <button className="button button--big">Vyzvednout přáníčko</button>
          </Link>
        </form>
      </main>
    </>
  );
};

export default Pickup;
