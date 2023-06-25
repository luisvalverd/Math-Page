import anime from "animejs";

const navbarAnimationStart = () => {
  anime({
    targets: "#navbar",
    height: "96px",
    duration: 600,
    delay: 0,
    loop: false,
  });
};

const navbarAnimationEnd = () => {
  anime({
    targets: "#navbar",
    duration: 1000,
    delay: 0,
    height: "256px",
    loop: false,
  });
};

export { navbarAnimationEnd, navbarAnimationStart };
