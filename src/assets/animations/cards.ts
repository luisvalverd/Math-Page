import anime from "animejs";

const animationCardVisionStart = () => {
  anime({
    targets: "#card_vision",
    skew: -3,
    width: "70%",
    height: "27rem",
    loop: false,
  });
};

const animationCardMisionStart = () => {
  anime({
    targets: "#card_mision",
    skew: -3,
    width: "70%",
    height: "27rem",
    loop: false,
  });
};

const animationCardVisionEnd = () => {
  anime({
    targets: "#card_vision",
    skew: 0,
    width: "66.666667%",
    height: "24rem",
    loop: false,
  });
};

const animationCardMisionEnd = () => {
  anime({
    targets: "#card_mision",
    skew: 0,
    width: "66.666667%",
    height: "24rem",
    loop: false,
  });
};

export {
  animationCardMisionStart,
  animationCardMisionEnd,
  animationCardVisionEnd,
  animationCardVisionStart,
};
