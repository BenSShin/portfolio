document.addEventListener("DOMContentLoaded", function () {
  var nameDelay = 0;
  var delayTime = 800;

  // Use Anime.js to animate the drawing of the SVG path
  anime({
    targets: "#my-name",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2000,
    delay: nameDelay,
  });

  anime({
    targets: ".line",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1000,
    delay: delayTime,
  });
  var aboutModal = document.getElementById("about-container");
  var aboutBtn = document.getElementById("about-btn");
  var aboutClose = document.getElementById("about-close");

  aboutBtn.onclick = function () {
    aboutModal.style.display = "block";
  };

  aboutClose.addEventListener("click", function () {
    aboutModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === aboutModal) {
      aboutModal.style.display = "none";
    }
  });

  var skillsModal = document.getElementById("skills-container");
  var skillsBtn = document.getElementById("skills-btn");
  var skillsClose = document.getElementById("skills-close");

  skillsBtn.onclick = function () {
    skillsModal.style.display = "block";
  };

  skillsClose.addEventListener("click", function () {
    skillsModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === skillsModal) {
      skillsModal.style.display = "none";
    }
  });

  var portfolioModal = document.getElementById("portfolio-container");
  var portfolioBtn = document.getElementById("portfolio-btn");
  var portfolioClose = document.getElementById("portfolio-close");

  portfolioBtn.onclick = function () {
    portfolioModal.style.display = "block";
  };

  portfolioClose.addEventListener("click", function () {
    portfolioModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === portfolioModal) {
      portfolioModal.style.display = "none";
    }
  });

  var contactModal = document.getElementById("contact-container");
  var contactBtn = document.getElementById("contact-btn");
  var contactClose = document.getElementById("contact-close");

  contactBtn.onclick = function () {
    contactModal.style.display = "block";
  };

  contactClose.addEventListener("click", function () {
    contactModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === contactModal) {
      contactModal.style.display = "none";
    }
  });
});
