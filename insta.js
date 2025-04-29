document.addEventListener("DOMContentLoaded", function () {
    // Like Button Functionality
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            button.classList.toggle('liked'); // Toggle 'liked' class
            const likeCount = button.querySelector('.like-count');
            if (button.classList.contains('liked')) {
                likeCount.textContent = parseInt(likeCount.textContent) + 1; // Increment like count
            } else {
                likeCount.textContent = parseInt(likeCount.textContent) - 1; // Decrement like count
            }
        });
    });

    // Follow/Unfollow Button Functionality
    const followButtons = document.querySelectorAll('.follow-button');
    followButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.textContent === "Follow") {
                button.textContent = "Following";
                button.classList.add('following');
            } else {
                button.textContent = "Follow";
                button.classList.remove('following');
            }
        });
    });

    // Notification Toggle Functionality
    const notificationIcon = document.querySelector('.fa-bell');
    const notificationDropdown = document.querySelector('.notification-dropdown');
    notificationIcon.addEventListener('click', function () {
        notificationDropdown.classList.toggle('show');
    });

    // Search Bar Auto-Suggestions
    const searchInput = document.querySelector('.search-bar input');
    const suggestionsBox = document.createElement('div');
    suggestionsBox.classList.add('suggestions-box');
    searchInput.after(suggestionsBox);

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        if (query.length > 0) {
            suggestionsBox.innerHTML = ''; // Clear previous suggestions
            const suggestions = getSuggestions(query); // Get new suggestions based on query
            suggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = suggestion;
                suggestionItem.classList.add('suggestion-item');
                suggestionsBox.appendChild(suggestionItem);
                suggestionItem.addEventListener('click', function () {
                    searchInput.value = suggestion; // Set input value to selected suggestion
                    suggestionsBox.innerHTML = ''; // Clear suggestions
                });
            });
        } else {
            suggestionsBox.innerHTML = ''; // Clear suggestions when input is empty
        }
    });

    function getSuggestions(query) {
        const allUsers = ["Benjamin Hardman", "John Doe", "Jane Smith", "Alice Brown", "Robert Johnson"];
        return allUsers.filter(user => user.toLowerCase().includes(query));
    }

    // Add Post Button Functionality
    const addPostButton = document.querySelector('.post-new button');
    addPostButton.addEventListener('click', function () {
        alert("This would trigger the post creation flow (currently not implemented).");
    });

    // Dropdown Menu in Profile Section
    const profileImage = document.querySelector('.profile-img');
    const profileMenu = document.querySelector('.profile-menu');
    profileImage.addEventListener('click', function () {
        profileMenu.classList.toggle('show');
    });
});
