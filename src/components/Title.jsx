import React from "react";

const Title = ({title}) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
    </div>
  );
};

export default Title;
