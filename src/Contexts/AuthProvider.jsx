import React, { createContext, useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth, GoogleProvider } from "../utilities/firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import { use } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => { 

const [user, setuser] = useState(null)


  const signup = async (email, name, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
    } catch (error) {
      console.error(error);
    }
  };
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setuser(user);
      console.log("User is signed in:", user);
      console.log(unsubscribe)
    } else {
      setuser(null);
    }
      return () => unsubscribe();
  });
 
}, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("Login successful", userCredential.user);
      return userCredential.user;
     
    } catch (error) {
      console.error("Email login error", error);
      throw error;
    }
     
  };

  return (
    <AuthContext.Provider value={{ user, signup, login}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
