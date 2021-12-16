import React, { useEffect, useState } from "react";

import Configurator from "./Configurator";
import Ready from "./Ready";

const Create = () => {
  const [creating, setCreating] = useState(true);
  const [dataToServer, setDataToServer] = useState("");

  const [dataFromServer, setDataFromServer] = useState(null);

  const handleSaveConfig = (sendingToServer) => {
    setDataToServer(sendingToServer);

    if (dataFromServer !== null || undefined) {
      dataFromServer.success ? setCreating(false) : alert("Ještě to není dokonalý, klikni ještě jednou na Uložit přáníčko a bude to fungovat...");
    }
  };

  const fetchData = () => {
    fetch("https://xmas-api.itgirls.cz/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToServer),
    })
      .then((response) => response.json())
      .then((data) => {
        setDataFromServer(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, [dataToServer]);

  //console.log(dataToServer);
  //console.log(dataFromServer);

  if (creating) {
    return <Configurator handleSaveConfig={handleSaveConfig} />;
  }
  return <Ready dataFromServer={dataFromServer} />;
};

export default Create;
