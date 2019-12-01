import React from 'react';
import _ from 'underscore';
const events = new Set();
const onResize = () => events.forEach((fn: any) => fn());


const useWindowSize = (options: any = {}) => {
  const { throttleMs = 100 } = options;
  const [size, setSize] = React.useState({
    width: process.browser && window.innerWidth,
    height: process.browser && window.innerHeight,
  });

  const handle = _.throttle(() => {
    setSize({
      width: process.browser && window.innerWidth,
      height: process.browser && window.innerHeight,
    });
  }, throttleMs);

  React.useEffect(() => {
    if (events.size === 0) {
      window.addEventListener('resize', onResize, true);
    }

    events.add(handle);

    return () => {
      events.delete(handle);

      if (events.size === 0) {
        window.removeEventListener('resize', onResize, true);
      }
    };
  }, []);

  return size;
};

export default useWindowSize;