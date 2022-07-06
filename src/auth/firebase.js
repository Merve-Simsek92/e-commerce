// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import {
    toastErrorNotify,
    toastSuccessNotify,
    toastWarnNotify,
  } from "../helpers/ToastNotify";
  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6h2rYn_mAsARsGmdjDocDg_9lUJVwr3s",
  authDomain: "e-commerce-f94a3.firebaseapp.com",
  projectId: "e-commerce-f94a3",
  storageBucket: "e-commerce-f94a3.appspot.com",
  messagingSenderId: "798058090599",
  appId: "1:798058090599:web:75cb241c6809a62f0444c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)


export const createUser = async (email, password, displayName, navigate) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/");
      toastSuccessNotify("Registered successfully!");
      console.log(userCredential);
    } catch (err) {
      toastErrorNotify(err.message);
      //alert(err.message);
    }
  };
  
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  export const signIn = async (email, password, navigate) => {
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
      console.log(userCredential);
    } catch (err) {
      toastErrorNotify(err.message);
      // alert(err.message);
    }
  };
  export const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully!");
  };
  
  export const userObserver = (setCurrentUser) => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        // User is signed out
        setCurrentUser(false);
      }
    });
  };
  
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  export const signUpProvider = (navigate) => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };
  
  export const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toastWarnNotify("Please check your mail box!");
        // alert("Please check your mail box!");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
        // alert(err.message);
        // ..
      });
  };
  