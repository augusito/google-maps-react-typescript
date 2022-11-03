import * as React from 'react';
import { createPortal } from 'react-dom';
import { createOverlay } from './overlay';
import { OverlayProps } from './types';

export default function OverlayView({
  position,
  pane = 'floatPane',
  map,
  zIndex,
  children,
}: OverlayProps) {
  const container = React.useMemo(() => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    return div;
  }, []);

  const overlay = React.useMemo(() => {
    return createOverlay(container, pane, position);
  }, [container, pane, position]);

  React.useEffect(() => {
    overlay?.setMap(map);
    return () => overlay?.setMap(null);
  }, [map, overlay]);

  // to move the container to the foreground and background
  React.useEffect(() => {
    container.style.zIndex = `${zIndex}`;
  }, [zIndex, container]);

  return createPortal(children, container);
}
