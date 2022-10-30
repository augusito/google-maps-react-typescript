import * as React from 'react';

export default function Marker(options: google.maps.MarkerOptions) {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      marker?.setMap(null);
    };
  }, [marker]);

  React.useEffect(() => {
    marker?.setOptions(options);
  }, [marker, options]);

  return null;
}
