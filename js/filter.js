// Get filter elements
const carTypeFilter = document.getElementById('carTypeFilter');
const fuelFilter = document.getElementById('fuelFilter');
const transmissionFilter = document.getElementById('transmissionFilter');
const priceFilter = document.getElementById('priceFilter');
const carCards = document.querySelectorAll('.car');

// Function to extract numeric price from string
function extractPrice(priceString) {
    const matches = priceString.match(/\d+/g);
    return matches ? parseFloat(matches.join('')) : 0;
}

// Function to check if a string contains any of the keywords
function containsKeyword(text, keywords) {
    if (!keywords) return true;
    text = text.toLowerCase();
    keywords = keywords.toLowerCase();
    return text.includes(keywords);
}

// Function to apply filters
function applyFilters() {
    const selectedCarType = carTypeFilter.value;
    const selectedFuel = fuelFilter.value;
    const selectedTransmission = transmissionFilter.value;
    const selectedPrice = priceFilter.value;

    carCards.forEach(car => {
        try {
            // Get car details
            const title = car.querySelector('h4')?.textContent || '';
            const fuel = car.querySelector('.flex:has(.ri-gas-station-fill) span')?.textContent || '';
            const transmission = car.querySelector('.flex:has(.ri-steering-2-fill) span')?.textContent || '';
            const priceText = car.querySelector('h3')?.textContent || '0';
            const price = extractPrice(priceText);

            // Check if car matches all selected filters
            let matches = true;

            // Car Type filter
            if (selectedCarType && !containsKeyword(title, selectedCarType)) {
                matches = false;
            }

            // Fuel Type filter
            if (selectedFuel && !containsKeyword(fuel, selectedFuel)) {
                matches = false;
            }

            // Transmission filter
            if (selectedTransmission && !containsKeyword(transmission, selectedTransmission)) {
                matches = false;
            }

            // Price Range filter
            if (selectedPrice) {
                const [min, max] = selectedPrice.split('-').map(Number);
                if (max) {
                    if (price < min || price > max) {
                        matches = false;
                    }
                } else {
                    // For "3000+" option
                    if (price < min) {
                        matches = false;
                    }
                }
            }

            // Show/hide car based on filters
            if (matches) {
                car.style.display = '';
                car.style.opacity = '1';
                car.style.transform = 'scale(1)';
            } else {
                car.style.display = 'none';
                car.style.opacity = '0';
                car.style.transform = 'scale(0.8)';
            }
        } catch (error) {
            console.error('Error filtering car:', error);
        }
    });

    // Check if no cars are visible
    const visibleCars = Array.from(carCards).filter(car => car.style.display !== 'none');
    const noResultsMessage = document.getElementById('noResultsMessage');
    
    if (visibleCars.length === 0) {
        if (!noResultsMessage) {
            const message = document.createElement('div');
            message.id = 'noResultsMessage';
            message.className = 'text-center text-gray-500 mt-8';
            message.textContent = 'No cars found matching your filters';
            document.querySelector('.grid').appendChild(message);
        }
    } else if (noResultsMessage) {
        noResultsMessage.remove();
    }
}

// Add event listeners to filters
carTypeFilter.addEventListener('change', applyFilters);
fuelFilter.addEventListener('change', applyFilters);
transmissionFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('change', applyFilters);

// Add smooth transitions
carCards.forEach(car => {
    car.style.transition = 'all 0.3s ease-in-out';
});

// Initial filter application
applyFilters();
