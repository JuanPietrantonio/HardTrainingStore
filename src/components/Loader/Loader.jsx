import React from 'react';
import { LeapFrog } from '@uiball/loaders';

function Loader({size, speed, color}) {
  return (
   <LeapFrog size={size} speed={speed} color={color} />
  );
}

export default Loader;