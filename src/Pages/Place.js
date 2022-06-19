import React from 'react'

function Place() {
    return (
        <div>
          <main>
          <div className='centerplan'>
            <div class="plan">
              <div class="plpl plac">
                <h1>Ou nous trouver</h1>
                <hr noshade="noshade" />
                <br />
                Métro : Ligne 2 Epeule Montesquieu<br />
                adresse : 226 RUE DE LILLE <br />
                59100 ROUBAIX
              </div>
              <div class="plpl plou">
                <a href='https://goo.gl/maps/75WqftjYHzWfq4jD6' target="blank"><img src="https://res.cloudinary.com/dsx6152nt/image/upload/v1654252617/crousty/mapscroustychaud_leheh2.jpg" alt="plan du lieu" className='planimg' /></a>
              </div>
            </div>
          </div>
          </main>
        </div>
      );
    }

export default Place