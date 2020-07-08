var popupMap = document.querySelector(".pop-up-map");
var popupFeedback = document.querySelector(".pop-up-feedback");
var feedbackButton = document.querySelector(".feedback-button");
var feedbackClose = popupFeedback.querySelector(".pop-up-feedback-close");
var popupOverlay = document.querySelector(".pop-up-overlay");
var mapButton = document.querySelector(".contacts-map");

feedbackButton.addEventListener("click",
  function(evt) {
    evt.preventDefault();
    popupFeedback.classList.add("pop-up-feedback-active");
    popupOverlay.classList.add("pop-up-overlay-active");
});

feedbackClose.addEventListener("click",
  function(evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("pop-up-feedback-active");
    popupOverlay.classList.remove("pop-up-overlay-active");
});

mapButton.addEventListener("click",
  function(evt) {
    evt.preventDefault();
    popupMap.classList.add("pop-up-map-active");
    popupOverlay.classList.add("pop-up-overlay-active");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode == 27) {
    if (popupFeedback.classList.contains("pop-up-feedback-active") || popupMap.classList.contains("pop-up-map-active")) {
      evt.preventDefault();
      popupFeedback.classList.remove("pop-up-feedback-active");
      popupMap.classList.remove("pop-up-map-active");
      popupOverlay.classList.remove("pop-up-overlay-active");
    }
  }
});

popupOverlay.addEventListener("click", function(evt) {
  if (popupFeedback.classList.contains("pop-up-feedback-active") || popupMap.classList.contains("pop-up-map-active")) {
    popupFeedback.classList.remove("pop-up-feedback-active");
    popupMap.classList.remove("pop-up-map-active");
    popupOverlay.classList.remove("pop-up-overlay-active");
  }
});
