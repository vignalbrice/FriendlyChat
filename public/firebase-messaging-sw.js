importScripts("/__/firebase/6.0.4/firebase-app.js");
importScripts("/__/firebase/6.0.4/firebase-messaging.js");
importScripts("/__/firebase/init.js");

firebase.messaging();
/*firebase.messaging().onMessage((payload) => {
  console.log("Message received. ", payload);
  // [START_EXCLUDE]
  // Update the UI to include the received message.
  appendMessage(payload);
  // [END_EXCLUDE]
});
firebase.messaging().setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});*/
