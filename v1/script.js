// Select the HTML elements
const routeSelect = document.getElementById('route');
const locationInput = document.getElementById('current-location');
const startButton = document.getElementById('start-button');
const statusMessage = document.getElementById('status-message');

// Track the interval for location updates
let locationInterval;

// Function to update location (mocking real-time location update)
function updateLocation() {
  const location = locationInput.value;

  if (!location) {
    alert("Please enter your current location.");
    return;
  }

  // Update status message
  statusMessage.textContent = `Your location is: ${location} | Updating in 1 minute...`;

  // Simulate location update every minute (60 seconds)
  locationInterval = setInterval(() => {
    statusMessage.textContent = `Your location is: ${location} | Updating in 1 minute...`;
  }, 60000); // 60000ms = 1 minute
}

// Start Button Click Event
startButton.addEventListener('click', () => {
  const selectedRoute = routeSelect.value;

  if (selectedRoute === 'More routes coming soon...') {
    alert('This route will be available soon.');
    return;
  }

  updateLocation();
});
