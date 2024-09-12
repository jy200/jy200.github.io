particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: ["#ff4d5a", "#fff34d"] },
    shape: {
      type: "circle",
      stroke: { width: 0.0, color: "#ffffff" },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: { enable: true, speed: 0.5, opacity_min: 0, sync: false },
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: true, speed: 1, size_min: 2.0, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 90,
      color: "#51a2e9",
      opacity: 0.7,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 100, line_linked: { opacity: 0.5 } },
      repulse: { distance: 400, duration: 0.2 },
      push: { particles_nb: 3 },
      remove: { particles_nb: 4 },
      bubble: { distance: 300, size: 7, duration: 1.4 },
    },
  }
});
