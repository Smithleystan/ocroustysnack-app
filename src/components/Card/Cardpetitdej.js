import React from "react";

import petitdej from "../../assets/images-menu/petit-dej.jpg";

function Cardpetitdej() {
  return (
    <div>
      <img
        id="petitdej"
        src={petitdej}
        alt="petit-dejeunner"
        className="card"
      />
    </div>
  );
}

export default Cardpetitdej;
