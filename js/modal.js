// Add click event listeners to all car cards
document.querySelectorAll('.car').forEach(car => {
    car.addEventListener('click', function() {
        
        // Get car details from the card
        const image = this.querySelector('img').src;
        const title = this.querySelector('h4').textContent;
        const price = this.querySelector('h3').textContent;
        const mileage = this.querySelector('.flex:has(.ri-speed-up-fill) p')?.textContent || '90,700 km';
        const fuel = this.querySelector('.flex:has(.ri-gas-station-fill) span')?.textContent || 'Diesel';
        const transmission = this.querySelector('.flex:has(.ri-steering-2-fill) span')?.textContent || 'Automatic';

        // Populate modal with car details
        document.getElementById('modalCarImage').src = image;
        document.getElementById('modalCarTitle').textContent = title;
        document.getElementById('modalCarPrice').textContent = price;
        document.getElementById('modalCarMileage').textContent = mileage;
        document.getElementById('modalCarFuel').textContent = fuel;
        document.getElementById('modalCarTransmission').textContent = transmission;

        // Show modal
        const modal = document.getElementById('carDetailsModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    });
});

// Close modal function
function closeCarModal() {
    const modal = document.getElementById('carDetailsModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Close modal when clicking outside
document.getElementById('carDetailsModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCarModal();
    }
});

// Close modal when pressing ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCarModal();
    }
});
