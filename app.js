const track = document.querySelector(".resource-track");
const nextBtn = document.querySelectorAll(".anima")[1];
const prevBtn = document.querySelectorAll(".anima")[0];

let index = 0;

function getCardWidth() {
    const card = document.querySelector(".resource-track a");
    const style = window.getComputedStyle(card);
    return card.offsetWidth + 
           parseInt(style.marginLeft) + 
           parseInt(style.marginRight);
}

function getVisibleCards() {
    const resourceWidth = document.querySelector(".resource").offsetWidth;
    return Math.floor(resourceWidth / getCardWidth());
}

function updateSlider() {
    track.style.transform = `translateX(-${index * getCardWidth()}px)`;
}

nextBtn.addEventListener("click", () => {
    const totalItems = track.children.length;
    const maxIndex = totalItems - getVisibleCards();

    if (index < maxIndex) {
        index++;
        updateSlider();
    }
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});

window.addEventListener("resize", () => {
    updateSlider();
});