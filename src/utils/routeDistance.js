export const getRouteDistance = async (start, end) => {
  const accessToken = 'pk.eyJ1IjoieW9zdWFtYW5hbm9tYSIsImEiOiJja21qMm1oem4wbjQ1Mm90bnp2dHZkc2JxIn0.2NHkrsIv8sHqh30FEBiqjw';
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.routes && data.routes.length > 0) {
      return data.routes[0].distance; // distance in meters
    }
  } catch (error) {
    console.error('Error fetching route distance:', error);
  }

  return null;
};