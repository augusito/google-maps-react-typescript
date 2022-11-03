import * as React from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import type { Status, WrapperProps } from './types';
import { STATUS } from './constants';

export default function Wrapper({
  children,
  render,
  callback,
  ...options
}: WrapperProps): React.ReactElement {
  const [status, setStatus] = React.useState<Status>(STATUS.loading);

  React.useEffect(() => {
    const loader = new Loader(options);

    const setStatusAndExecuteCallback = (status: Status) => {
      if (callback) callback(status, loader);
      setStatus(status);
    };

    setStatusAndExecuteCallback(STATUS.loading);

    loader.load().then(
      () => setStatusAndExecuteCallback(STATUS.success),
      () => setStatusAndExecuteCallback(STATUS.failure)
    );
  }, [callback, options]);

  if (status === STATUS.success && children) return <>{children}</>;

  if (render) return render(status);

  return <></>;
}
