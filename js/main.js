const mobileNav = document.querySelector(".view");
const closeBtn = document.querySelector(".close-btn");
const closeBtnIcn = document.querySelector(".close-btn-icon");

// mobile nav
const arrowLeftClass = 'ri-roadster-fill';
const arrowRightClass = 'ri-close-large-fill';

closeBtn.addEventListener("click", () => {
    if (mobileNav.style.left === "-300px" || mobileNav.style.left === "") {
        mobileNav.style.left = "0";
        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    } else {
        mobileNav.style.left = "-300px";
        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }
});

// switch between cars
let img = document.querySelector(".img");
function car(car){
    img.src = car;
}


// Initialize all form functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Car Photos Upload
    const carPhotosInput = document.getElementById('carPhotos');
    const imagePreview = document.getElementById('imagePreview');

    if (carPhotosInput && imagePreview) {
        carPhotosInput.addEventListener('change', function(e) {
            console.log('Car photos changed'); // Debug log
            imagePreview.innerHTML = ''; // Clear previous previews
            const files = Array.from(e.target.files).slice(0, 5); // Limit to 5 photos
            
            files.forEach(file => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    const imgContainer = document.createElement('div');
                    imgContainer.className = 'relative';
                    
                    reader.onload = function(e) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.className = 'w-full h-40 object-cover rounded-lg';
                        
                        const removeBtn = document.createElement('button');
                        removeBtn.type = 'button';
                        removeBtn.className = 'absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600';
                        removeBtn.innerHTML = '×';
                        removeBtn.onclick = function() {
                            imgContainer.remove();
                        };
                        
                        imgContainer.appendChild(img);
                        imgContainer.appendChild(removeBtn);
                    };
                    
                    reader.readAsDataURL(file);
                    imagePreview.appendChild(imgContainer);
                }
            });
        });
    }

    // ID Card Upload
    const idCardInput = document.getElementById('idCard');
    const idCardPreview = document.getElementById('idCardPreview');

    if (idCardInput && idCardPreview) {
        idCardInput.addEventListener('change', function(e) {
            console.log('ID card changed'); // Debug log
            const file = e.target.files[0];
            
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const previewContainer = document.createElement('div');
                    previewContainer.className = 'relative mt-4';
                    
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'w-full max-w-md h-40 object-cover rounded-lg';
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.type = 'button';
                    removeBtn.className = 'absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600';
                    removeBtn.innerHTML = '×';
                    removeBtn.onclick = function() {
                        idCardPreview.innerHTML = '';
                        idCardInput.value = '';
                    };
                    
                    previewContainer.appendChild(img);
                    previewContainer.appendChild(removeBtn);
                    idCardPreview.innerHTML = '';
                    idCardPreview.appendChild(previewContainer);
                };
                
                reader.readAsDataURL(file);
            }
        });
    }

    // Form submission
    const carRentalForm = document.getElementById('carRentalForm');
    if (carRentalForm) {
        carRentalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Swal.fire({
                title: 'Success!',
                text: 'Your car details have been submitted successfully.',
                icon: 'success',
                confirmButtonColor: '#1F2937'
            });
        });
    }
});

// Initialize Slick Slider for brands
$(document).ready(function(){
    $('.brands-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Loading animation
window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    setTimeout(() => {
        loading.style.display = "none";
    }, 1000);
});

// Scroll to top button
const topBtn = document.querySelector(".top");
window.onscroll = function() {
    if (window.scrollY >= 600) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// Rental Car Popup Functions
const rentalPopup = document.getElementById('rentalPopup');
const rentalForm = document.getElementById('rentalForm');

// Open popup when clicking Rent A Car button
document.getElementById('rent').addEventListener('click', (e) => {
    e.preventDefault();
    openRentalPopup();
});

function openRentalPopup() {
    rentalPopup.classList.remove('hidden');
    rentalPopup.classList.add('flex');
    setTimeout(() => {
        rentalPopup.classList.add('opacity-100', 'scale-100');
        rentalPopup.classList.remove('opacity-0', 'scale-0');
    }, 30);
}

function closeRentalPopup() {
    rentalPopup.classList.remove('opacity-100', 'scale-100');
    rentalPopup.classList.add('opacity-0', 'scale-0');
    setTimeout(() => {
        rentalPopup.classList.add('hidden');
        rentalPopup.classList.remove('flex');
    }, 500);
}

// Close popup when clicking outside
rentalPopup.addEventListener('click', (e) => {
    if (e.target === rentalPopup) {
        closeRentalPopup();
    }
});

// Handle form submission
rentalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you can add code to handle the form submission
    // For example, sending data to a server
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "successfully Booked"
      });
    closeRentalPopup();
});

//mouse hover
let listImage = document.querySelectorAll(".list-image div");
listImage.forEach((image) => {
    image.addEventListener( "mouseover" , function () {
        listImage.forEach((image) => {
            image.classList.remove("active")
        })
        this.classList.add('active')
    })
})

// Check authentication
window.addEventListener('load', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userMenu = document.getElementById('userMenu');
    const loginBtn = document.getElementById('loginBtn');
    const userName = document.getElementById('userName');
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userDropdown = document.getElementById('userDropdown');
    
    if (!currentUser) {
        window.location.href = 'auth.html';
        return;
    }

    // Show user menu
    userMenu.classList.remove('hidden');
    loginBtn.classList.add('hidden');
    userName.textContent = currentUser.name;

    // Handle user menu dropdown
    userMenuBtn.addEventListener('click', () => {
        userDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userMenuBtn.contains(e.target)) {
            userDropdown.classList.add('hidden');
        }
    });

    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'auth.html';
    });
});

//animation loading
document.addEventListener("DOMContentLoaded", function(){
    // Hide loading initially
    const loader = document.getElementById("loading");
    if (loader) {
        loader.style.display = "none";
    }

    // Add click event to all links with class 'link'
    document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("click", function(e){
            e.preventDefault();
            const loader = document.getElementById("loading");
            if (loader) {
                loader.style.display = "flex";
            }
            setTimeout(() => {
                window.location.href = this.href;
            }, 1000);
        });
    });
});







document.addEventListener("DOMContentLoaded", function(){
    // Handle car photos preview
    document.getElementById('carPhotos').addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.innerHTML = '';

        files.forEach(file => {
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'w-full h-32 object-cover rounded-lg';
                    imagePreview.appendChild(img);
                }
                reader.readAsDataURL(file);
            }
        });
    });

    // ID Card preview
    const idCardInput = document.getElementById('idCard');
    if (idCardInput) {
        idCardInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            const preview = document.getElementById('idCardPreview');
            preview.innerHTML = '';

            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'max-w-md h-48 object-contain rounded-lg mt-4';
                    preview.appendChild(img);
                }
                reader.readAsDataURL(file);
            }
        });
    }

    // Form submission
    document.getElementById('carRentalForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        Swal.fire({
            title: 'Success!',
            text: 'Your car details have been submitted successfully.',
            icon: 'success',
            confirmButtonColor: '#1F2937'
        });
    });


});