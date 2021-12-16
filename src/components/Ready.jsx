import React from "react";

import Header from "./Header";
import Title from "./Title";
import { Link } from "react-router-dom";

const Ready = ({ dataFromServer }) => {
  return (
    <>
      <Header />
      <Title title={"Přáníčko je připravené"} />

      <main className="content">
        <div className="pickup">
          <p className="pickup__label">Přímý odkaz na přáníčko</p>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <Link to={`/card/${dataFromServer?.data.id}`} className="pickup__url">
                https://vanocni-pranicko.netlify.app/card/{dataFromServer?.data.id}
              </Link>
              <p className="pickup__description">Tento odkaz pošli emailem, přes messenger nebo ho dej na sociální sítě. Po kliknutí na odkaz se zobrazí tvoje přáníčko.</p>
            </div>
          </div>

          <p className="pickup__label">Kód tvého přáníčka</p>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <div className="pickup__code">{dataFromServer?.data.id}</div>
              <p className="pickup__description">S tímto kódem si kdokoliv může vyzvednout tvoje uložené přáníčko. Hodí se, když chceš přáníčko poslat třeba SMSkou a nechceš opisovat celou adresu.</p>
            </div>
          </div>

          <Link to="/vytvor-prani">
            <button className="button button--big">Vytvořit další přáníčko</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Ready;
