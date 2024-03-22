async function fetchProfilePicture() {
    const username = document.getElementById('username').value;
    const profilePictureContainer = document.getElementById('profilePictureContainer');

    try {
        // Fetch user data from GitHub API
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const userData = await response.json();

        // Extract profile picture URL from user data
        const profilePictureUrl = userData.avatar_url;

        // Create an image element and set its source to the profile picture URL
        const img = document.createElement('img');
        img.src = profilePictureUrl;
        img.alt = `Profile picture for ${username}`;

        // Clear previous content and append the image to the container
        profilePictureContainer.innerHTML = '';
        profilePictureContainer.appendChild(img);
    } catch (error) {
        console.error('Error fetching profile picture:', error);

        // Display placeholder image in case of error
        profilePictureContainer.innerHTML = `<img src="static/placeholder.png" alt="Placeholder">`;
    }
}
