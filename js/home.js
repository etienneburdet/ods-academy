(() => {
  const homepageFR = /*html*/`
    <div id="why-academy" class="hero">
      <h1>Pourquoi apprendre avec <strong>ODS Academy</strong> ?</h1>
      <div id="why-cards">
        <div class="why-card">
          <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/meter.svg" alt="compteur">
          <h3>Gagnez en autonomie sur ODS</h3>
          <p>Apprenez à réaliser des opérations de plus en plus avancées sur la plateforme. Suivez les cours à votre rythme, testez vos connaissances grâce à des quizzes et des exercices, et formez à votre tour vos collègues et vos partenaires.</p>
        </div>
        <div class="why-card">
          <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/pen.svg" alt="compteur">
          <h3>Composez votre menu pédagogique</h3>
          <p>Parcours interactif, cours rapide ou tutoriel express, trouvez le contenu adapté à vos objectifs, à votre niveau et au temps que vous avez devant vous. Commencez une leçon et revenez-y quand vous le souhaitez, sans perdre votre progression.</p>
        </div>
        <div class="why-card">
          <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/hands.svg" alt="compteur">
          <h3>Valorisez vos savoirs et savoir-faire</h3>
          <p>Combinez votre maîtrise d’ODS avec une solide connaissance du cycle de vie des données. Servez-vous de vos compétences pour faire grandir les projets numériques dans votre organisation, et booster vos opportunités de carrière.</p>
        </div>
      </div>
    </div>

    <!-- <div class="bg-purple">
      <div class="hero">
        <div>
          <p>Opendatasoft est enregistré comme organisme de formation.</p>
          <h1>Nos formations sont reconnues. Vos compétences aussi.</h1>
        </div>
      </div>
    </div> -->
  `

  const homepageEN = /*html*/`
      <div id="why-academy" class="hero">
        <h1>Why learn with <strong>ODS Academy</strong> ?</h1>
        <div id="why-cards">
          <div class="why-card">
            <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/meter.svg" alt="compteur">
            <h3>Become an ODS independant power user</h3>
            <p>Learn how to manage increasingly advanced operations on the platform. Follow self-paced courses, test your knowledge with quizzes and exercices, and start training your colleagues and partners with your newly acquired skills.</p>
          </div>
          <div class="why-card">
            <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/pen.svg" alt="compteur">
            <h3>Compose your own educational menu</h3>
            <p>Hands-on courses, short lessons or quick how-tos... find the content that meets best your goals, level and time you have to offer. Start a lesson and go back to it whenever you want, without losing your progress.</p>
          </div>
          <div class="why-card">
            <img src="https://eu.ftp.opendatasoft.com/odsacademy/img/hands.svg" alt="compteur">
            <h3>Promote your knowledge and skills</h3>
            <p>Combine your ODS power user skills with a solid knowledge of the data lifecycle. Leverage those to develop digital projects in your organization and boost your career opportunities.</p>
          </div>
        </div>
      </div>

      <!-- <div class="bg-purple">
        <div class="hero">
          <div>
            <p>Opendatasoft is registered as a training organization.</p>
            <h1>Our trainings are recognized. Your skills too.</h1>
          </div>
        </div>
      </div> -->
  `

  const homepageContent = document.querySelector('.sj-page-catalog-root #skilljar-content') || document.querySelector('[data-catalog-page="homepage"] #skilljar-content')

  if (homepageContent) {
    (window.location.toString() === 'https://academy.opendatasoft.com/')
      ? homepageContent.insertAdjacentHTML('beforeend', homepageFR)
      : homepageContent.insertAdjacentHTML('beforeend', homepageEN)
  }
})();
