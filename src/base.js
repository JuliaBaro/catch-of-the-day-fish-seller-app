import Rebase from 're-base'; //it allows us to mirror our state 
import firebase from 'firebase';

//https://firebase.google.com/ create new project here
//https://console.firebase.google.com/u/0/project/catch-of-the-day-julia-baro/overview
//go to lef side menu > develop > database > get started > enable > rules
/*
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
*/
// > publish

//we need api keys 
//project overview (upper left corner) > then </> icon > 
/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA4Q-4p17DtrK1hqZuJcTRZFKvIT3GD2Hs",
    authDomain: "catch-of-the-day-julia-baro.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-julia-baro.firebaseio.com",
    projectId: "catch-of-the-day-julia-baro",
    storageBucket: "catch-of-the-day-julia-baro.appspot.com",
    messagingSenderId: "261212989211",
    appId: "1:261212989211:web:4b0624270d5df4634d55be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/ 
//copy only the followinf from the object above: apiKey, authDomain, databaseURL

//here I created a Firebase App
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4Q-4p17DtrK1hqZuJcTRZFKvIT3GD2Hs",
    authDomain: "catch-of-the-day-julia-baro.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-julia-baro.firebaseio.com",
});

//here I created a Rebase binding
const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base; 

/*
GETTING WARNING IN CHROME CONSOLE

[HMR] Waiting for update signal from WDS...

index.ts:18 
It looks like you're using the development build of the Firebase JS SDK.
When deploying Firebase apps to production, it is advisable to only import
the individual SDK components you intend to use.

For the module builds, these are available in the following manner
(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):

CommonJS Modules:
const firebase = require('firebase/app');
require('firebase/<PACKAGE>');

ES Modules:
import firebase from 'firebase/app';
import 'firebase/<PACKAGE>';

Typescript:
import * as firebase from 'firebase/app';
import 'firebase/<PACKAGE>';

./node_modules/firebase/dist/index.cjs.js @ index.ts:18
__webpack_require__ @ bootstrap:785
fn @ bootstrap:150
./src/base.js @ base.js:1
__webpack_require__ @ bootstrap:785
fn @ bootstrap:150
./src/components/App.js @ AddFishForm.js:44
__webpack_require__ @ bootstrap:785
fn @ bootstrap:150
./src/components/Router.js @ Order.js:44
__webpack_require__ @ bootstrap:785
fn @ bootstrap:150
./src/index.js @ helpers.js:97
__webpack_require__ @ bootstrap:785
fn @ bootstrap:150
1 @ sample-fishes.js:84
__webpack_require__ @ bootstrap:785
checkDeferredModules @ bootstrap:45
webpackJsonpCallback @ bootstrap:32
(anonymous) @ main.chunk.js:1
WebSocketConnection.ts:401 [Violation] 'setInterval' handler took 57ms
*/
