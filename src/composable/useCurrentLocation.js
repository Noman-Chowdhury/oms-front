import { ref } from 'vue';

export function useCurrentLocation() {
    const locationName = ref(null);
    const latitude = ref(null);
    const longitude = ref(null);
    const error = ref(null);

    const fetchLocation = async () => {
        if (!navigator.geolocation) {
            error.value = 'Geolocation is not supported by your browser';
            return;
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
            latitude.value = position.coords.latitude;
            longitude.value = position.coords.longitude;

            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude.value}&lon=${longitude.value}`
                );
                const data = await response.json();

                if (data) {
                    locationName.value = data.display_name; // This gives you the detailed address
                } else {
                    error.value = 'Failed to fetch location name';
                }
            } catch (err) {
                error.value = 'Failed to fetch location name';
            }
        }, () => {
            error.value = 'Unable to retrieve your location';
        });
    };

    fetchLocation();

    return {
        locationName,
        latitude,
        longitude,
        error,
    };
}
