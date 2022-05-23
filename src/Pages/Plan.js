import React from 'react'
import plann from '../assets/images-menu/Plann.PNG'

function Plan() {
  return (
    <div>

<main>
      <div class="plan">
        <div class="plplplac">
          <h1>Ou nous trouver</h1>
          <hr noshade="noshade" />
          <br />
          Métro : Ligne 2 <br />
          adresse : 21 rue de Lille
        </div>
        <div class="plpl plou">
          <img src={plann} alt="plan du lieu" />
        </div>
      </div>
    </main>
    </div>
  )
}

export default Plan