var popupMap = document.querySelector(".pop-up-map");
var popupFeedback = document.querySelector(".pop-up-feedback");
var feedbackButton = document.querySelector(".feedback-button");
var feedbackClose = popupFeedback.querySelector(".pop-up-close");
var mapClose = popupMap.querySelector(".pop-up-close");
var popupOverlay = document.querySelector(".pop-up-overlay");
var mapButton = document.querySelector(".contacts-map");
var feedbackForm = popupFeedback.querySelector("form");
var feedbackName = popupFeedback.querySelector("[name=feedback-name]");
var feedbackEmail = popupFeedback.querySelector("[name=feedback-email]");
var feedbackMessage = popupFeedback.querySelector("[name=feedback-message]");

var isStorageSuportFeedback = true;
var storageFeedbackName = "";
var storageFeedbackEmail = "";

function initMap() {
  var device = {lat:55.687031, lng:37.529618};
  var map = new google.maps.Map(
      document.getElementById("map"), {zoom: 17, center: device});
  var marker = new google.maps.Marker({position: device, map: map});
}

try {
  storageFeedbackName = localStorage.getItem("FeedbackName");
  storageFeedbackEmail = localStorage.getItem("FeedbackEmail");
} catch (err) {
  isStorageSuportFeedback = false;
}

feedbackName.required = false;
feedbackEmail.required = false;
feedbackMessage.required = false;

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

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    popupFeedback.classList.remove("pop-up-error");
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add("pop-up-error");
      if (!feedbackName.value) {
        feedbackName.focus();
      }
      if (feedbackName.value && (!feedbackEmail.value || !feedbackMessage.value)) {
        feedbackEmail.focus();
      }
      if ((feedbackName.value && feedbackEmail.value) && !feedbackMessage.value) {
        feedbackMessage.focus();
      }
      if (!feedbackName.value) {
        feedbackName.classList.add("pop-up-input-invalid");
      }
      if (!feedbackEmail.value) {
        feedbackEmail.classList.add("pop-up-input-invalid");
      }
      if (!feedbackMessage.value) {
        feedbackMessage.classList.add("pop-up-input-invalid");
      }
    } else {
        if (isStorageSuportFeedback) {
          localStorage.setItem("FeedbackName", feedbackName.value);
          localStorage.setItem("FeedbackEmail", feedbackEmail.value);
        }
      }
});

feedbackName.addEventListener("focusout", function (evt) {
  if (feedbackName.value && feedbackName.classList.contains("pop-up-input-invalid"))
    feedbackName.classList.remove("pop-up-input-invalid");
});

feedbackEmail.addEventListener("focusout", function (evt) {
  if (feedbackEmail.value && feedbackEmail.classList.contains("pop-up-input-invalid"))
    feedbackEmail.classList.remove("pop-up-input-invalid");
});

feedbackMessage.addEventListener("focusout", function (evt) {
  if (feedbackMessage.value && feedbackMessage.classList.contains("pop-up-input-invalid"))
    feedbackMessage.classList.remove("pop-up-input-invalid");
});

feedbackClose.addEventListener("click",
  function(evt) {
    popupFeedback.classList.remove("pop-up-feedback-active");
    popupFeedback.classList.remove("pop-up-error");
    popupOverlay.classList.remove("pop-up-overlay-active");
});

mapButton.addEventListener("click",
  function(evt) {
    evt.preventDefault();
    popupMap.classList.add("pop-up-map-active");
    popupOverlay.classList.add("pop-up-overlay-active");
});

mapClose.addEventListener("click",
  function(evt) {
    popupMap.classList.remove("pop-up-map-active");
    popupOverlay.classList.remove("pop-up-overlay-active");
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
