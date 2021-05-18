// config file for react-particles
export const options={
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
      },
      onHover: {
        enable: false,
      },
      resize: false,
    }
  },
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      enable: false,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "top-right",
      enable: true,
      outMode: "out",
      random: true,
      speed: 0.1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 120,
    },
    opacity: {
      value: 0.9,
    },
    shape: {
      type: "star",
      polygon: {
        nb_sides: 6,

      },
    },
    size: {
      anim: {
        enable: true,
        speed: 4,
        size_min: 0.1,
      },
      random: true,
      value: 1.5,
    },
  },
  detectRetina: true,
}