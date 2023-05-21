import React from 'react';

import packageJson from '../../package.json';

export const Intro = () => {
  return (
    <>
      <h1 style={{ fontFamily: 'Signika', fontWeight: 700 }}>
        SolarView Designer System - versão
        {` ${packageJson.version}`}
      </h1>
    </>
  );
};
