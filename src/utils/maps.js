export const API_KEY_MAPS = 'AIzaSyDnoPW8rVvyLqxdRiQkVCZxHoJbp65bNn0';

export const URL_MAPS = (
  lat,
  long,
  zoom = 14,
) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:C%7C${lat},${long}&key=${API_KEY_MAPS}`;

export const URL_GEOCODING = (lat, long) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${API_KEY_MAPS}`;
