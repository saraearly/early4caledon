let loop = horizontalLoop(".image", {speed: 1, repeat: -1, paddingRight: 25});

function setDirection(value) {
  if (loop.direction !== value) {
    gsap.to(loop, {timeScale: value, duration: 0.3, overwrite: true});
    loop.direction = value;
  }
}

Observer.create({
  target: window,
  type: "wheel,scroll,touch",
  onDown: () => setDirection(1),
  onUp: () => setDirection(-1)
})
