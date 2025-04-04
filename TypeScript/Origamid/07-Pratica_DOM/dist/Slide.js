import Timeout from "./Timeout.js";
export default class Slide {
    container;
    slides;
    controls;
    time;
    paused;
    index;
    slide;
    timeout;
    pausedTimeout;
    thumbItems;
    thumb;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.paused = false;
        this.index = localStorage.getItem("activeSlide")
            ? Number(localStorage.getItem("activeSlide"))
            : 0;
        this.slide = this.slides[this.index];
        this.timeout = null;
        this.pausedTimeout = null;
        this.thumbItems = null;
        this.thumb = null;
        this.init();
    }
    prev() {
        if (this.paused)
            return;
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }
    next() {
        if (this.paused)
            return;
        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(next);
    }
    pause() {
        this.pausedTimeout = new Timeout(() => {
            this.paused = true;
            this.timeout?.pause();
            if (this.slide instanceof HTMLVideoElement)
                this.slide.pause();
            if (this.thumb)
                this.thumb.classList.add("paused");
        }, 300);
    }
    continue() {
        this.pausedTimeout?.clear();
        if (this.paused) {
            this.paused = false;
            this.timeout?.continue();
            if (this.slide instanceof HTMLVideoElement)
                this.slide.play();
            if (this.thumb)
                this.thumb.classList.remove("paused");
        }
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
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
        if (this.thumb)
            this.thumb.style.animationDuration = `${time}ms`;
    }
    autoVideo(video) {
        video.muted = true;
        video.play();
        let firstPlay = true;
        video.addEventListener("playing", () => {
            if (firstPlay)
                this.auto(video.duration * 1000);
            firstPlay = false;
        });
    }
    hide(el) {
        el.classList.remove("active");
        if (el instanceof HTMLVideoElement) {
            el.pause();
            el.currentTime = 0;
        }
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[index];
        this.slides.forEach((slide) => this.hide(slide));
        this.slides[index].classList.add("active");
        localStorage.setItem("activeSlide", index.toString());
        if (this.thumbItems) {
            this.thumb = this.thumbItems[this.index];
            this.thumbItems.forEach((el) => el.classList.remove("active"));
            this.thumb.classList.add("active");
        }
        if (this.slide instanceof HTMLVideoElement) {
            this.autoVideo(this.slide);
        }
        else {
            this.auto(this.time);
        }
    }
    addThumbItens() {
        const thumbContainer = document.createElement("div");
        thumbContainer.id = "slide-thumb";
        this.slides.forEach((slide, index) => {
            thumbContainer.innerHTML += '<span><span class="thumb-item"/></span>';
        });
        this.controls.appendChild(thumbContainer);
        this.thumbItems = Array.from(document.querySelectorAll(".thumb-item"));
    }
    init() {
        this.addThumbItens();
        this.addControls();
        this.show(this.index);
    }
}
//# sourceMappingURL=Slide.js.map