import * as React from 'react';
import OverlayView from './overlay-view';
import { CustomMarkerProps } from './types';

export default function CustomMarker({
  position,
  map,
}: CustomMarkerProps): React.ReactElement {
  return (
    <>
      {map && (
        <OverlayView
          position={position}
          map={map}
          styles={{
            backgorundColor: 'DarkGray',
            color: 'white',
          }}
        >
          <button>{2.4}</button>
        </OverlayView>
      )}
    </>
  );
}
