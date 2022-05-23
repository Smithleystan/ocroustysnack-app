import React from 'react'

function Contact() {
  return (
    <div>
        <main class="mainform">
      <div class="formulaire">
        <p>Contactez-nous</p>
        <hr width="200px" />
        <form action="" method="post">
          Nom <br />
          <br />
          <input name="firstname " placeholder="Dupond" />
          <br />
          <br />
          Mail <br /><br />
          <input type="email" required /><br /><br />
          Questions et remarques <br /><br />
          <textarea name="" id="" cols="30" rows="5" required></textarea
          ><br /><br />
          <button class="buttonrouge">ENVOYER</button>
        </form>
      </div>
    </main>
    </div>
  )
}

export default Contact