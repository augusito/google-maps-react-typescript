import * as React from 'react';
import { GoogleMapProps } from './types';

export default function GoogleMap({ children, center, zoom }: GoogleMapProps) {
  const ref = React.useRef<any>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    setMap(
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      })
    );
  }, [center, zoom]);

  return (
    <div ref={ref} id="map">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map } as any);
        }
      })}
    </div>
  );
}
