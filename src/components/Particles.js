import React from 'react';
import Particles from 'react-particles-js'

const Canvas = () => {
  return (
    <Particles
      params={{
        "particles": {
          "number": {
            "value": 180,
            "density": {
              "enable": true,
              "value_area": 1803.4120608655228
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "polygon": {
              "nb_sides": 4
            },
          },
          "opacity": {
            "value": 0.4008530152163807,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 8,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 5,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 0,
            "color": "#ffffff",
            "opacity": 0.3687847739990702,
            "width": 0.6413648243462091
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            // "onhover": {
            //   "enable": true,
            //   "mode": "repulse"
            // },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 100,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 1
            }
          }
        },
        style: {
          position: "relative",
          height: "100%",
        },
        "retina_detect": true
      }} />
  );
}

export default Canvas;
