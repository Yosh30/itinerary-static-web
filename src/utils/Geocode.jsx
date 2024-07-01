import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

const geocodingClient = mbxGeocoding({ accessToken: 'pk.eyJ1IjoieW9zdWFtYW5hbm9tYSIsImEiOiJja21qMm1oem4wbjQ1Mm90bnp2dHZkc2JxIn0.2NHkrsIv8sHqh30FEBiqjw' });

export const geocodePlace = async (placeName) => {
  try {
    const response = await geocodingClient.forwardGeocode({
      query: placeName,
      limit: 1
    }).send();

    const match = response.body.features[0];
    if (match) {
      return {
        coordinates: match.center, // [longitude, latitude]
        placeName: match.place_name  // Full name of the place
      };
    } else {
      throw new Error('No matching location found');
    }
  } catch (error) {
    throw new Error('Geocoding error: ' + error.message);
  }
};
