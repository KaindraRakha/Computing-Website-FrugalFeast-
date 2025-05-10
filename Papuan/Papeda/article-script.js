document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
        // Hover effect
        star.addEventListener('mouseover', () => {
            for (let i = 0; i <= index; i++) {
                stars[i].textContent = '★';
            }
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => {
                if (!s.classList.contains('selected')) {
                    s.textContent = '☆';
                }
            });
        });

        // Click effect
        star.addEventListener('click', () => {
            // First, remove selected class from all stars
            stars.forEach(s => s.classList.remove('selected'));
            
            // Then add selected class and fill stars up to the clicked one
            for (let i = 0; i <= index; i++) {
                stars[i].textContent = '★';
                stars[i].classList.add('selected');
            }
            
            // Clear stars after the clicked one
            for (let i = index + 1; i < stars.length; i++) {
                stars[i].textContent = '☆';
            }
        });
    });
}); 