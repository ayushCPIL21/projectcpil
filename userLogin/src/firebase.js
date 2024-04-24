import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage} from 'firebase/messaging';

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
var firebaseConfig = {
 //... 
 apiKey: "AIzaSyBBWAM8hegFXDGe-A2IOuMvnWTKkoZ5Ih8",
  authDomain: "cpilconsole.firebaseapp.com",
  projectId: "cpilconsole",
  storageBucket: "cpilconsole.appspot.com",
  messagingSenderId: "328501984595",
  appId: "1:328501984595:web:a87e76ea00f569a0cfb5a6",
  measurementId: "G-QBNS0N045L"
};

initializeApp(firebaseConfig);
const messaging = getMessaging();


export const  requestForToken = async() => {
    return getToken(messaging, { vapidKey: "BLSZ1qXypKHmceAqxTAX9fPqDsvyfiJMciIQ4YpGhkGvJx3x345arfBwg5vabGASKR8c8uJG5A17Lm1NPGAtj7k" })
      .then((currentToken) => {
        if (currentToken) {
          console.log('current token for client: ', currentToken);
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  };

  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });