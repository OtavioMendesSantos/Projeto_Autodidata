import Timeout from "./Timeout.js";
export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    timeout;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.index = 0;
        this.slide = this.slides[this.index];
        this.timeout = null;
        this.init();
    }
    prev() {
        console.log(this.time);
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }
    next() {
        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(next);
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
    }
    hide(el) {
        el.classList.remove("active");
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[index];
        this.slides.forEach((slide) => this.hide(slide));
        this.slides[index].classList.add("active");
        this.auto(this.time);
    }
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => {
            console.log("ativou");
            this.next();
        }, time);
    }
    init() {
        this.addControls();
        this.show(this.index);
    }
}
//# sourceMappingURL=Slide.js.map