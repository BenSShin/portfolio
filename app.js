const tl = gsap.timeline({ defaults: { duration: 0.75 } });

new Vivus("box", {
  type: "sync",
  duration: 120,
  animTimingFunction: Vivus.EASE,
});

new Vivus("top-line", {
  type: "sync",
  duration: 120,
  animTimingFunction: Vivus.EASE,
});

new Vivus("bottom-line", {
  type: "sync",
  duration: 120,
  animTimingFunction: Vivus.EASE,
});

new Vivus("my-name", {
  type: "sync",
  duration: 500,
  animTimingFunction: Vivus.EASE,
});
