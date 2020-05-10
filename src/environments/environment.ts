// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
	  apiKey: "AIzaSyAi52xqwidI4RCw10MEZJ-c0W0-_c-_O9o",
	  authDomain: "game-tagger.firebaseapp.com",
	  databaseURL: "https://game-tagger.firebaseio.com",
	  projectId: "game-tagger",
	  storageBucket: "game-tagger.appspot.com",
	  messagingSenderId: "371859617310",
	  appId: "1:371859617310:web:25a33f6aadcdc2f81a600f"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
