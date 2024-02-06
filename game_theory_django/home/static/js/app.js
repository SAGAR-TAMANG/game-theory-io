var currentFileName = window.location.pathname.split('/').pop();

if (currentFileName == '') {
  document.addEventListener('DOMContentLoaded', function () {
    var count = 0;

    var video = document.querySelector('.video');

    video.addEventListener('ended', function () {
      if (count < 1) {
        video.src = "static/video/repeat.mp4";
        count += 1;
        console.log("VIDEO ENDED");
        video.loop = true;
      }
    });
    playButton = document.querySelector('.play_button');
    tutorialCard = document.querySelector('.tutorial_card');

    playButton.addEventListener('click', function () {
      console.log("CLICKED");
      tutorialCard.style.transform = "translate(10%, -90vh)";
    });

    skipButton = document.getElementById('skipBtn');

    skipButton.addEventListener('click', function () {
      tutorialCard.innerHTML = `
      <div class="col-12">
        <p class="text-center">
          Select the game type
          <br>
          <br>
          <br>
        </p>
      </div>
      <div class="col-12">
        <dir class="justify-content-between-special">
          <a class="px-5 py-3" href="#">Human-CPU Duel</a>
          <a class="px-5 py-3" href="/play">CPU Solitaire</a>
        </dir>
      </div>
    `;      
    });
  });
}

if (currentFileName == 'play') {
}


console.log("LOADED");