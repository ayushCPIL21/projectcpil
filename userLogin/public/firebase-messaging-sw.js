// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyBBWAM8hegFXDGe-A2IOuMvnWTKkoZ5Ih8",
    authDomain: "cpilconsole.firebaseapp.com",
    projectId: "cpilconsole",
    storageBucket: "cpilconsole.appspot.com",
    messagingSenderId: "328501984595",
    appId: "1:328501984595:web:a87e76ea00f569a0cfb5a6",
    measurementId: "G-QBNS0N045L"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});