import api from './api';

const saveRoute = async (coordinates) => {
  try {
    if (coordinates && coordinates.length > 0) {
      await api.post('routes', {
        coordinates: coordinates.map((coordinate) => ({
          longitude: coordinate.lat,
          latitude: coordinate.lng,
        })),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default saveRoute;
