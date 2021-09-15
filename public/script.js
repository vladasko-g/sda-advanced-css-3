const animationToggle = document.querySelector("#animation-toggle");
const animatedBall = document.querySelector("#animated-ball");

const isAnimatedStatePaused = (el) => el.style.animationPlayState === "paused";
const prepareAnimatedState = (newState) => (el) => {
  el.style.animationPlayState = newState;
};
const pauseAnimatedState = prepareAnimatedState("paused");
const runAnimatedState = prepareAnimatedState("running");

animationToggle.onclick = () => {
  if (isAnimatedStatePaused(animatedBall)) {
    runAnimatedState(animatedBall);
    return;
  }

  pauseAnimatedState(animatedBall);
};
