import React, { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth, GoogleProvider } from "../utilities/firebaseConfig";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);

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
      Navigate((to = "/login"));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
      return () => unsubscribe();
    });
  }, []);

  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);

      const user = result.user;

      <Navigate to="/dashboard" />;
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      <Navigate to="/dashboard" />;
      setuser(userCredential.user);
      return userCredential.user;
    } 
    catch (error) {
      console.error("Email login error", error);
      throw error;
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      <Navigate to="/" />;
    } 
    catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, googleSignIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
