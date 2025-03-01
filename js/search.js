// Get DOM elements
const searchInputs = document.querySelectorAll('.search');
const carCards = document.querySelectorAll('.car');

// Add event listeners to all search inputs
searchInputs.forEach(searchInput => {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        carCards.forEach(car => {
            // Get car details
            const title = car.querySelector('h4')?.textContent.toLowerCase() || '';
            const price = car.querySelector('h3')?.textContent.toLowerCase() || '';
            const details = Array.from(car.querySelectorAll('.flex span'))
                .map(span => span.textContent.toLowerCase())
                .join(' ');
            
            // Check if car matches search term
            const matches = title.includes(searchTerm) || price.includes(searchTerm) || details.includes(searchTerm);
            
            // Show/hide car based on match
            if (matches) {
                car.style.display = '';
                car.style.opacity = '1';
                car.style.transform = 'scale(1)';
            } else {
                car.style.display = 'none';
                car.style.opacity = '0';
                car.style.transform = 'scale(0.8)';
            }
        });
        
        // Add smooth transitions
        carCards.forEach(car => {
            car.style.transition = 'all 0.3s ease-in-out';
        });
        
        // Sync other search input
        searchInputs.forEach(input => {
            if (input !== e.target) {
                input.value = e.target.value;
            }
        });
    });
});
