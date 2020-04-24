// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Config} from '../config';

export const environment: Config = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA8QX_uGwN9mOt_XVDljtqLMrpNHJo47kg',
    authDomain: 'spotify-watcher-185e9.firebaseapp.com',
    databaseURL: 'https://spotify-watcher-185e9.firebaseio.com',
    projectId: 'spotify-watcher-185e9',
    storageBucket: 'spotify-watcher-185e9.appspot.com',
    messagingSenderId: '230581828104',
    appId: '1:230581828104:web:ab83862d48b29f1ad06fbd'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
