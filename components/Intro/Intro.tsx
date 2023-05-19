import React from 'react';

import packageJson from '../../package.json';

export const Intro = () => {
  return (
    <>
      <h1 style={{ fontFamily: 'Signika', fontWeight: 700 }}>
        Alchemy Design System - v$
        {packageJson.version}
      </h1>
    </>
  );
};
