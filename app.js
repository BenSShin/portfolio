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

  aboutClose.addEventListener("click", function () {
    aboutModal.style.display = "none";
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
  });

  var skillsModal = document.getElementById("skills-container");
  var skillsBtn = document.getElementById("skills-btn");
  var skillsClose = document.getElementById("skills-close");

  skillsBtn.onclick = function () {
    skillsModal.style.display = "block";
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

  skillsClose.addEventListener("click", function () {
    skillsModal.style.display = "none";
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
  });

  var portfolioModal = document.getElementById("portfolio-container");
  var portfolioBtn = document.getElementById("portfolio-btn");
  var portfolioClose = document.getElementById("portfolio-close");

  portfolioBtn.onclick = function () {
    portfolioModal.style.display = "block";
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

  portfolioClose.addEventListener("click", function () {
    portfolioModal.style.display = "none";
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
  });

  var contactModal = document.getElementById("contact-container");
  var contactBtn = document.getElementById("contact-btn");
  var contactClose = document.getElementById("contact-close");

  contactBtn.onclick = function () {
    contactModal.style.display = "block";
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

  contactClose.addEventListener("click", function () {
    contactModal.style.display = "none";
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
  });
});
