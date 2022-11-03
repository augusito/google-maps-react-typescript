import * as React from 'react';
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';
import { STATUS } from './constants';

export type Status = keyof typeof STATUS;

export interface MapProps {
  children?: React.ReactNode;
  center?: google.maps.LatLngLiteral;
  zoom?: number;
}

export interface WrapperProps extends LoaderOptions {
  /**
   * Children wrapped by the `<Wrapper>{elements}</Wrapper`.
   */
  children?: React.ReactNode;
  /**
   * Render prop used to switch on the status.
   */
  render?: (status: Status) => React.ReactElement;
  /**
   * Callback prop used to access `@googlemaps/js-api-loader` and `Status`.
   *
   * Note: The callback be executed multiple times in the lifecycle of the component.
   */
  callback?: (status: Status, loader: Loader) => void;
}
