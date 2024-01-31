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
      tutorialCard.style.transform = "translate(50%, -110%)";
    });
  });
}

if (currentFileName == 'play') {
}


console.log("LOADED");