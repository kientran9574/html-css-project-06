const $ = document.querySelector.bind(document);
const video = $(".about__video");
const btn = $(".about__btn");
const btnPlay = $(".about__video-play");
const btnPause = $(".about__video-pause");
const videoOverlay = $(".media-overlay");
const iconBars = $(".fa-bars");
const iconOff = $(".fa-xmark");
const mobileOverlay = $(".menu-overlay");
const navBar = $(".menu-drawer");

iconBars.addEventListener("click", function () {
  mobileOverlay.classList.toggle("show");
  navBar.classList.toggle("active");
});
iconOff.addEventListener("click", function () {
  mobileOverlay.classList.toggle("show");
  navBar.classList.toggle("active");
});
mobileOverlay.addEventListener("click", function (e) {
  mobileOverlay.classList.toggle("show");
  navBar.classList.toggle("active");
});
btnPlay.addEventListener("click", function () {
  if (btnPlay) {
    video.play();
    btnPlay.classList.add("hide");
    btnPause.classList.add("show");
    btnPlay.classList.remove("show");
  }
});
btnPause.addEventListener("click", function () {
  if (btnPause) {
    video.pause();
    btnPause.classList.remove("show");
    btnPlay.classList.add("show");
  }
});
video.addEventListener("pause", function () {
  btn.classList.remove("hide");
  btn.classList.add("show");
});
video.addEventListener("play", function () {
  btn.classList.remove("show");
  btn.classList.add("hide");
});
// overlay.addEventListener("click", () => {
//   if (overlay) {
//     video.pause()
//     btn.classList.remove("hide");
//     btn.classList.add("show");
//   }
//   // else{
//   //   video.play()
//   //   btn.classList.remove("show");
//   //   btn.classList.add("hide");
//   // }
// });

// video.addEventListener("play", function () {
//   btnPlay.classList.add("hide");
//   btnPause.classList.add("show");
//   btnPlay.classList.remove("show");
// });
// video.addEventListener('pause', function () {
//   btnPause.classList.remove('show')
//   btnPlay.classList.add("show")
// })
// overlay.onclick = function () {

//   if (overlay.style.display === 'none') {
//     showOverlay();
//   } else {
//     hideOverlay();
//   }
// };

// function showOverlay() {
//   overlay.style.display = "block";
//   btn.classList.toggle('show')
//   video.pause();
// }
// function hideOverlay() {
//   overlay.style.display = "none";
//   btn.classList.toggle('hide')
//   video.play();
//   // Set up a new click event for the overlay to show it again and pause the video
// }
