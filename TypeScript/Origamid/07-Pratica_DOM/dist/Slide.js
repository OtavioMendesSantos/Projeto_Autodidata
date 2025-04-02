export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.index = 0;
        this.slide = this.slides[this.index];
        this.init();
    }
    prev() {
        this.show(this.index > 0 ? this.index - 1 : this.slides.length - 1);
    }
    next() {
        this.show(this.index + 1 < this.slides.length ? this.index + 1 : 0);
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
    init() {
        this.addControls();
        this.show(this.index);
    }
    hide(el) {
        el.classList.remove("active");
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[index];
        this.slides.forEach((slide) => this.hide(slide));
        this.slides[index].classList.add("active");
    }
}
//# sourceMappingURL=Slide.js.map