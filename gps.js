//  to handle the button click event

document.getElementById('getLocationButton').addEventListener('click', getLocation);

// Function to get the user's current location
function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const locationText = `Latitude: ${latitude} , Longitude: ${longitude}.`;
            document.getElementById('location').textContent = locationText;
        }, function (error) {
            console.error("Error getting location:", error);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}