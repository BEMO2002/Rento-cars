        // Get modal elements
const createCarModal = document.getElementById('createCarModal');
const createCarForm = document.getElementById('createCarForm');
const createProductBtn = document.getElementById('createProductBtn');
const cancelCreateCarBtn = document.getElementById('cancelCreateCar');

// Show modal when clicking Create Product button
createProductBtn.addEventListener('click', () => {
    createCarModal.classList.remove('hidden');
    createCarModal.classList.add('flex');
});

// Hide modal when clicking Cancel
cancelCreateCarBtn.addEventListener('click', () => {
    createCarModal.classList.add('hidden');
    createCarModal.classList.remove('flex');
});

// Handle form submission
createCarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(createCarForm);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    Swal.fire({
        title: 'Success!',
        text: 'Car has been created successfully',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#1B4E6B'
    }).then(() => {
        // Close modal and reset form
        createCarModal.classList.add('hidden');
        createCarModal.classList.remove('flex');
        createCarForm.reset();
    });
});

// Close modal when clicking outside
createCarModal.addEventListener('click', (e) => {
    if (e.target === createCarModal) {
        createCarModal.classList.add('hidden');
        createCarModal.classList.remove('flex');
    }
});

// Sample car data
const cars = [
    {
        image: "Assets/rent/kia sportag.webp",
        name: "Kia Sportage",
        model: "2024",
        transmission: "Automatic",
        passengers: "4 Seats",
        features: "Air Conditioning",
        extraFeatures: "GPS Navigation",
        dayPrice: "500 EGP",
        monthPrice: "15000 EGP",
        status: "Available"
    },
    {
        image: "Assets/rent/vol.webp",
        name: "Volkswagen T-Roc",
        model: "2023",
        transmission: "Automatic",
        passengers: "5 Seats",
        features: "Leather Seats",
        extraFeatures: "Parking Sensors",
        dayPrice: "600 EGP",
        monthPrice: "15000 EGP",
        status: "Available"
    },
    {
        image: "Assets/rent/pmw.webp",
        name: "BMW X5",
        model: "2024",
        transmission: "Automatic",
        passengers: "5 Seats",
        features: "Panoramic Roof",
        extraFeatures: "360° Camera",
        dayPrice: "800 EGP",
        monthPrice: "20000 EGP",
        status: "Rented"
    }
];

// Function to create a table row for a car
function createCarRow(car) {
    const row = document.createElement('tr');
    row.className = "hover:bg-gray-50";
    row.innerHTML = `
        <td class="px-6 py-4 border">
            <img src="${car.image}" alt="${car.name}" class="w-16 h-12 object-cover rounded">
        </td>
        <td class="px-6 py-4 border">${car.name}</td>
        <td class="px-6 py-4 border">${car.model}</td>
        <td class="px-6 py-4 border">${car.transmission}</td>
        <td class="px-6 py-4 border">${car.passengers}</td>
        <td class="px-6 py-4 border">${car.features}</td>
        <td class="px-6 py-4 border">${car.extraFeatures}</td>
        <td class="px-6 py-4 border text-primary">${car.dayPrice}</td>
        <td class="px-6 py-4 border text-primary">${car.monthPrice}</td>
        <td class="px-6 py-4 border">
            <span class="px-3 py-1 rounded-full ${car.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                ${car.status}
            </span>
        </td>
        <td class="px-6 py-4 border">
            <div class="flex items-center gap-2">
                <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    <i class="ri-eye-line"></i> View
                </button>
                <button class="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                    <i class="ri-edit-line"></i> Edit
                </button>
                <button class="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                    <i class="ri-delete-bin-line"></i> Delete
                </button>
            </div>
        </td>
    `;
    return row;
}

// Populate the table with car data
document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('carTableBody');
    cars.forEach(car => {
        tableBody.appendChild(createCarRow(car));
    });
});