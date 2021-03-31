import "./assets/style.css";
import "./assets/navbar.css";
import React from "react";
import Lottie from "react-lottie";
import animation from "./animation.json";
import Particles from "react-particles-js";
import LetterAnimation from "./components/letterAnimation";
import Nav from "./components/nav";
import * as THREE from "three";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollup: false,
    };
  }
  componentDidMount() {
    this.prev = window.scrollY;
    window.addEventListener("scroll", (e) => this.handleNavigation(e));
  }
  handleNavigation = (e) => {
    const window = e.currentTarget;

    if (this.prev > window.scrollY) {
      console.log("scrolling up");
      this.setState({ scrollup: true });
    } else if (this.prev < window.scrollY) {
      console.log("scrolling down");
      this.setState({ scrollup: false });
    }
    this.prev = window.scrollY;
  };
  render() {
    const bodymovinOptions = {
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation,
    };
    const particlesOptions = {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 1000 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 0.5,
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: { enable: false, mode: "repulse" },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 200,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
    return (
      <div className="App">
        <Nav />
        <div id="introcontainer">
          <p className="block">Maker | Developer | Designer</p>
        </div>
        <div className="container">
          <Particles params={particlesOptions} />
          <div className="bm">
            <Lottie options={bodymovinOptions} />
          </div>
          <div className="line">
            <LetterAnimation letter="Y" />
            <LetterAnimation letter="I" />
            <LetterAnimation letter="Y" />
            <LetterAnimation letter="I" />
            <LetterAnimation letter="S" id="custom-space" />
            <LetterAnimation letter="H" />
            <LetterAnimation letter="A" />
            <LetterAnimation letter="O" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
