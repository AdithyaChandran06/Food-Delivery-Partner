// Search restaurant functionality
const searchRestaurantInput = document.getElementById('searchRestaurant');
const restaurantCards = document.querySelectorAll('.card');

searchRestaurantInput.addEventListener('input', function () {
    const searchValue = searchRestaurantInput.value.toLowerCase();
    restaurantCards.forEach(card => {
        const restaurantName = card.getAttribute('data-name').toLowerCase();
        if (restaurantName.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Modal functionality
const modal = document.getElementById('restaurantModal');
const modalName = document.getElementById('restaurantName');
const modalDetails = document.getElementById('restaurantDetails');
const closeModal = document.querySelector('.close');

// Open modal when restaurant is clicked
restaurantCards.forEach(card => {
    card.addEventListener('click', function () {
        modal.style.display = 'flex';
        modalName.textContent = this.querySelector('h3').textContent;
        modalDetails.textContent = this.querySelector('p').textContent;
    });
});

// Close modal when close button is clicked
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
