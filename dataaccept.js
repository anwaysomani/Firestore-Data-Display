// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyANMWVu1TaOr2cA8IXY-ByExnjR6DRRMUI",
authDomain: "firestore-library.firebaseapp.com",
databaseURL: "https://firestore-library.firebaseio.com",
projectId: "firestore-library",
storageBucket: "firestore-library.appspot.com",
messagingSenderId: "359796583976",
appId: "1:359796583976:web:6f501be35dd843e0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Form submit
document.getElementById('contact_form').addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();

	// Get values
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;

	// Save message
	saveMessage(name, email, subject, message);


	console.log(name);
	console.log(email);
	console.log(subject);
	console.log(message);
}

// Save message to firebase
function saveMessage(name, email, subject, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
}