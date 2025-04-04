import Timeout from "./Timeout.js";

export default class Slide {
  container;
  slides;
  controls;
  time;
  paused: boolean;
  index: number;
  slide: Element;
  timeout: Timeout | null;
  pausedTimeout: Timeout | null;

  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;
    this.paused = false;


    this.index = 0;
    this.slide = this.slides[this.index];

    this.timeout = null;
    this.pausedTimeout = null;

    this.init();
  }

  prev() {
    if (this.paused) return;
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
    this.show(prev);
  }
  
  next() {
    if (this.paused) return;
    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
    this.show(next);
  }

  pause() {
    this.pausedTimeout = new Timeout(() => {
      this.paused = true;
    }, 300)
  }

  continue() {
    this.pausedTimeout?.clear();
    if (this.paused) {
      this.paused = false;
      this.auto(this.time);
    };
  }

  addControls() {
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");
    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);
    prevButton.innerHTML = "Slide anterior";
    nextButton.innerHTML = "Próximo slide";
    nextButton.addEventListener("pointerup", () => this.next());
    prevButton.addEventListener("pointerup", () => this.prev());

    this.controls.addEventListener("pointerdown", () => this.pause());
    this.controls.addEventListener("pointerup", () => this.continue());
  }

  auto(time: number) {
    this.timeout?.clear();
    this.timeout = new Timeout(() => {
      this.next();
    }, time);
  }

  hide(el: Element) {
    el.classList.remove("active");
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[index];

    this.slides.forEach((slide) => this.hide(slide));
    this.slides[index].classList.add("active");

    this.auto(this.time);
  }

  private init() {
    this.addControls();
    this.show(this.index);
  }
}
