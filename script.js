gsap.registerPlugin(ScrollTrigger);
var container = document.querySelector("#scroll-container");
var height = container.clientHeight;
document.body.style.height = height + "px";
gsap.to(container, {
  y: -(height - document.documentElement.clientHeight),
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});
