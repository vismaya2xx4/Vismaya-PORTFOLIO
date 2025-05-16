const particlesConfig = {
  particles: {
    number: { value: 10000, density: { enable: true, value_area: 8000 } },
    color: { value: "#6c63ff" }, 
    shape: { type: "circle" },
    opacity: { value: 0.2 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#6c63ff",
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 9 } },
      push: { particles_nb: 2 }
    }
  },
  retina_detect: true
};
