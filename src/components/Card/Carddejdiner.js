import React from "react";

import platdej from "../../assets/images-menu/lasagne.jpg";

function Carddejdiner() {
  return (
    <>
      <div className="cardmain">
        <div >11€</div>
        {/* <div className="carre"> */}
          <img id="platdej" src={platdej} alt="Lasagne" className="card" />
        </div>
      </div>
    </>
  );
}

export default Carddejdiner;
