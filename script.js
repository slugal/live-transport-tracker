// Select the HTML elements
const routeSelect = document.getElementById('route');
const locationInput = document.getElementById('current-location');
const startButton = document.getElementById('start-button');
const statusMessage = document.getElementById('status-message');

// Google Maps Variables
let map, marker;

// Initialize the Google Map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.8103, lng: 90.4125 }, // Default to Dhaka coordinates
    zoom: 12,
  });

  marker = new google.maps.Marker({
    map: map,
  });
}

// Update Location on Map
function updateLocationOnMap(location) {
  // Get the location from the input (e.g., "Town Hall")
  const geocoder = new google.maps.Geocoder();
  
  geocoder.geocode({ 'address': location }, (results, status) => {
    if (status === 'OK') {
      const latLng = results[0].geometry.location;
      marker.setPosition(latLng);
      map.setCenter(latLng);
      statusMessage.textContent = `Your location is: ${location} | Updating in 1 minute...`;
    } else {
      alert('Geocode was not successful: ' + status);
    }
  });
}

// Function to start the tracking
function startTracking() {
  const selectedRoute = routeSelect.value;

  if (selectedRoute === 'More routes coming soon...') {
    alert('This route will be available soon.');
    return;
  }

  const location = locationInput.value;
  if (!location) {
    alert("Please enter your current location.");
    return;
  }

  // Update the location on the map and start tracking
  updateLocationOnMap(location);
  setInterval(() => updateLocationOnMap(location), 60000); // Update every minute
}

// Start Button Click Event
startButton.addEventListener('click', startTracking);
