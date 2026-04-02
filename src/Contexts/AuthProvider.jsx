import React, { createContext, useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth, GoogleProvider } from "../utilities/firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile

} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => { 


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
    <AuthContext.Provider value={{ signup, login, }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
