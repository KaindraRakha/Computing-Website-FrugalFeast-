// Add search functionality
document.querySelector('.search-icon').addEventListener('click', function() {
    // You can implement the search functionality here
    alert('Search functionality will be implemented here');
});

// Carousel Logic
const carouselData = [
    { label: 'Soto Banjar', img: '../Content-Picture/SotoBanjar.png' },
    { label: 'Pisang Pontianak', img: '../Content-Picture/PisangGorengPontianak.png' },
    { label: 'Kepiting Soka', img: '../Content-Picture/KepitingSoka.png' }
];

const cardsContainer = document.querySelector('.carousel-cards');
const leftArrow = document.querySelector('.carousel-arrow.left');
const rightArrow = document.querySelector('.carousel-arrow.right');
const dots = document.querySelectorAll('.carousel-dots .dot');
let currentIndex = 0;

function updateCarousel() {
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
    });
    
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex >= carouselData.length - 3;
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < carouselData.length - 3) {
        currentIndex++;
        updateCarousel();
    }
});

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        if (idx <= carouselData.length - 3) {
            currentIndex = idx;
            updateCarousel();
        }
    });
});

// Initialize carousel
updateCarousel(); 