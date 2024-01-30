document.addEventListener('DOMContentLoaded', function() {
  var count = 0; // Move count outside the event listener to keep track globally

  var video = document.querySelector('.video');
  var playButton = document.querySelector('.play_button');

  video.addEventListener('ended', function() {
    if (count < 1) {
      video.src = "static/video/repeat.mp4";
      count += 1;
      console.log("VIDEO ENDED");
      video.loop = true;
    }
  });

  playButton.addEventListener('click', function() {
    // Your logic for handling the button click event
    alert('Game started!');
  });
});



console.log("LOADED")