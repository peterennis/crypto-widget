import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'crypto-widget',
  outputTargets: [
    {
      type: 'dist',
      dir: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
