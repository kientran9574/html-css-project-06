const $ = document.querySelector.bind(document);
const video = $(".about__video");
const btn = $(".about__btn");
const btnPlay = $(".about__video-play");
const btnPause = $(".about__video-pause");
const overlay = $(".media-overlay");


btnPlay.addEventListener("click", function () {
    if(btnPlay){
        video.play();
        btnPlay.classList.add('hide')
        btnPause.classList.add("show")
        btnPlay.classList.remove('show')
    }
  });
  
  btnPause.addEventListener("click", function () {
    if(btnPause){
        video.pause()
        btnPause.classList.remove('show')
        btnPlay.classList.add("show")
    }
  });

  overlay.onclick = function () {
  
    if (overlay.style.display === 'none') {
      showOverlay();
    } else {
      hideOverlay();
    }
  };
  
  function showOverlay() {
    overlay.style.display = "block";
    btn.classList.toggle('show')
    video.pause();
  }
  function hideOverlay() {
    overlay.style.display = "none";
    btn.classList.toggle('hide')
    video.play();
    // Set up a new click event for the overlay to show it again and pause the video
  }