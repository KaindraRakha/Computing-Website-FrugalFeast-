// Add search functionality
document.querySelector('.search-icon').addEventListener('click', function() {
    // You can implement the search functionality here
    alert('Search functionality will be implemented here');
});

// Add hover effect for recommendation items
document.querySelectorAll('.recommendation-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}); 