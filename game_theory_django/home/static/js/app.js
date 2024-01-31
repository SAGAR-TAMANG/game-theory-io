document.addEventListener('DOMContentLoaded', function() {
  var count = 0; // Move count outside the event listener to keep track globally

  var video = document.querySelector('.video');

  video.addEventListener('ended', function() {
    if (count < 1) {
      video.src = "static/video/repeat.mp4";
      count += 1;
      console.log("VIDEO ENDED");
      video.loop = true;
    }
  });
});

console.log("LOADED")