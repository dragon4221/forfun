const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");
const right = document.getElementById("right");
const left = document.getElementById("left");
const SLIDES_COUNT = slides.length;
let current_slides = 0;
right.addEventListener("click", () => {
    current_slides++;
    if (current_slides > SLIDES_COUNT - 1) {
        current_slides = 0;
    }
    updateCarouse();

})
left.addEventListener("click", () => {
    current_slides--;
    if (current_slides < 0) {
        current_slides = SLIDES_COUNT - 1;
    }
    updateCarouse();
})

function updateCarouse() {
    carousel.style.transform = `translateX(${
        -current_slides*slides[0].offsetWidth
    }px)`;
}