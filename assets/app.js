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

  const homeFadeOut = () => {
    anime
      .timeline({
        duration: 3000,
      })
      .add({ targets: "#welcome", color: "rgba(255, 255, 255, 0)" }, 0)
      .add({ targets: "#about-btn", color: "rgba(255, 255, 255, 0)" }, 0)
      .add({ targets: "#skills-btn", color: "rgba(255, 255, 255, 0)" }, 0)
      .add({ targets: "#portfolio-btn", color: "rgba(255, 255, 255, 0)" }, 0)
      .add({ targets: "#contact-btn", color: "rgba(255, 255, 255, 0)" }, 0);
    anime({
      targets: ".line",
      opacity: 0,
      duration: 600,
      easing: "easeInOutQuad",
    });
  };

  const homeFadeIn = () => {
    anime
      .timeline({
        duration: 3000,
      })
      .add({ targets: "#welcome", color: "rgba(255, 255, 255, 1)" }, 0)
      .add({ targets: "#about-btn", color: "rgba(255, 255, 255, 1)" }, 0)
      .add({ targets: "#skills-btn", color: "rgba(255, 255, 255, 1)" }, 0)
      .add({ targets: "#portfolio-btn", color: "rgba(255, 255, 255, 1)" }, 0)
      .add({ targets: "#contact-btn", color: "rgba(255, 255, 255, 1)" }, 0);
    anime({
      targets: ".line",
      opacity: 1,
      duration: 600,
      easing: "easeInOutQuad",
    });
  };

  anime
    .timeline({
      duration: 3000,
      delay: delayTime,
    })
    .add({ targets: "#welcome", color: "rgba(255, 255, 255, 1)" }, 0)
    .add({ targets: "#about-btn", color: "rgba(255, 255, 255, 1)" }, 0)
    .add({ targets: "#skills-btn", color: "rgba(255, 255, 255, 1)" }, 0)
    .add({ targets: "#portfolio-btn", color: "rgba(255, 255, 255, 1)" }, 0)
    .add({ targets: "#contact-btn", color: "rgba(255, 255, 255, 1)" }, 0);

  var aboutModal = document.getElementById("about-container");
  var aboutBtn = document.getElementById("about-btn");
  var aboutClose = document.getElementById("about-close");

  aboutBtn.onclick = function () {
    aboutModal.style.display = "block";
    anime
      .timeline({
        duration: 800,
        easing: "easeInBack",
      })
      .add({ targets: "#about-container", opacity: 0.95, top: 570 });
    homeFadeOut();
  };

  aboutClose.addEventListener("click", function () {
    homeFadeIn();
    anime
      .timeline({
        duration: 200,
      })
      .add({
        targets: "#about-container",
        opacity: 0,
        top: 590,
        easing: "easeInQuad",
      })
      .add({
        targets: "#about-container",
        duration: 0,
        complete: function () {
          setTimeout(function () {
            document.getElementById("about-container").style.display = "none";
          });
        },
      });
  });

  var skillsModal = document.getElementById("skills-container");
  var skillsBtn = document.getElementById("skills-btn");
  var skillsClose = document.getElementById("skills-close");

  skillsBtn.onclick = function () {
    skillsModal.style.display = "block";
    anime
      .timeline({
        duration: 800,
        easing: "easeInBack",
      })
      .add({ targets: "#skills-container", opacity: 0.95, top: 570 });
    homeFadeOut();
  };

  skillsClose.addEventListener("click", function () {
    homeFadeIn();
    anime
      .timeline({
        duration: 200,
      })
      .add({
        targets: "#skills-container",
        opacity: 0,
        easing: "easeInQuad",
        top: 600,
      })
      .add({
        targets: "#skills-container",
        duration: 0,
        complete: function () {
          setTimeout(function () {
            document.getElementById("skills-container").style.display = "none";
          });
        },
      });
  });

  var portfolioModal = document.getElementById("portfolio-container");
  var portfolioBtn = document.getElementById("portfolio-btn");
  var portfolioClose = document.getElementById("portfolio-close");

  portfolioBtn.onclick = function () {
    portfolioModal.style.display = "block";
    homeFadeOut();
    anime
      .timeline({
        duration: 800,
        easing: "easeInBack",
      })
      .add({ targets: "#portfolio-container", opacity: 0.95, top: 570 });
  };

  portfolioClose.addEventListener("click", function () {
    homeFadeIn();
    anime
      .timeline({
        duration: 200,
      })
      .add({
        targets: "#portfolio-container",
        opacity: 0,
        easing: "easeInQuad",
        top: 600,
      })
      .add({
        targets: "#portfolio-container",
        duration: 0,
        complete: function () {
          setTimeout(function () {
            document.getElementById("portfolio-container").style.display = "none";
          });
        },
      });
  });

  var contactModal = document.getElementById("contact-container");
  var contactBtn = document.getElementById("contact-btn");
  var contactClose = document.getElementById("contact-close");

  contactBtn.onclick = function () {
    contactModal.style.display = "block";
    homeFadeOut();
    anime
      .timeline({
        duration: 800,
        easing: "easeInBack",
      })
      .add({ targets: "#contact-container", opacity: 0.95, top: 570 });
  };

  contactClose.addEventListener("click", function () {
    homeFadeIn();
    anime
      .timeline({
        duration: 200,
      })
      .add({
        targets: "#contact-container",
        opacity: 0,
        easing: "easeInQuad",
        top: 600,
      })
      .add({
        targets: "#contact-container",
        duration: 0,
        complete: function () {
          setTimeout(function () {
            document.getElementById("contact-container").style.display = "none";
          });
        },
      });
  });
});
