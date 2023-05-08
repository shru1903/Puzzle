import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User created successfully
    const user = userCredential.user;
  })
  .catch((error) => {
    // Handle errors here
    const errorCode = error.code;
    const errorMessage = error.message;
  });

