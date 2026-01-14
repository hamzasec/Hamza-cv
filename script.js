// Smooth scrolling
const lenis = new Lenis({
  smooth: true,
  lerp: 0.08
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// GSAP scroll animations
gsap.registerPlugin(ScrollTrigger)

// Hero zoom on scroll
gsap.to(".hero-img", {
  scale: 1.25,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
})

// Text reveal
gsap.from(".hero-text", {
  y: 50,
  opacity: 0,
  duration: 1.2
})
