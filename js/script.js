var popupMap = document.querySelector(".pop-up-map");
var popupFeedback = document.querySelector(".pop-up-feedback");
var feedbackButton = document.querySelector(".feedback-button");
var feedbackClose = popupFeedback.querySelector(".pop-up-feedback-close");
var popupOverlay = document.querySelector(".pop-up-overlay");
var mapButton = document.querySelector(".contacts-map");
var feedbackForm = popupFeedback.querySelector("form");
var feedbackName = popupFeedback.querySelector("[name=feedback-name]");
var feedbackEmail = popupFeedback.querySelector("[name=feedback-email]");
var feedbackMessage = popupFeedback.querySelector("[name=feedback-message]");

var isStorageSuportFeedback = true;
var storageFeedbackName = "";
var storageFeedbackEmail = "";

try {
  storageFeedbackName = localStorage.getItem("FeedbackName");
  storageFeedbackEmail = localStorage.getItem("FeedbackEmail");
} catch (err) {
  isStorageSuportFeedback = false;
}

feedbackButton.addEventListener("click",
  function(evt) {
    evt.preventDefault();
    popupFeedback.classList.add("pop-up-feedback-active");
    popupOverlay.classList.add("pop-up-overlay-active");

    if (storageFeedbackName, storageFeedbackEmail) {
    feedbackName.value = storageFeedbackName;
    feedbackEmail.value = storageFeedbackEmail;
    feedbackMessage.focus();
    } else {
    feedbackName.focus();
  }
});

feedbackForm.addEventListener("submit", function(evt) {

  if (isStorageSuportFeedback) {
    localStorage.setItem("FeedbackName", feedbackName.value);
    localStorage.setItem("FeedbackEmail", feedbackEmail.value);
  }
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
