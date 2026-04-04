import React, { createContext, useState, useEffect, use } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth,db, GoogleProvider } from "../utilities/firebaseConfig";
import {doc, setDoc,Timestamp} from "firebase/firestore";

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
  const navigate = useNavigate();

  const addUserToFirestore = async (user) => {
    try {
      await setDoc(doc(db, "users", user.uid), {  
        email: user.email,
        name: user.displayName || "Anonymous",
        createdAt: Timestamp.now(),
      });
    
    } catch (error) {
      console.error("Error adding user to Firestore:", error);
    }
  }

  const signup = async (email, name, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setuser(userCredential.user);
      

      await updateProfile(userCredential.user, {
        displayName: name,
      });
      
      await addUserToFirestore(userCredential.user);
      navigate("/login");
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

      setuser(auth.currentUser);
      user ? navigate("/dashboard") : navigate("/login");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
    addUserToFirestore(auth.currentUser);
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      navigate("/dashboard");
      setuser(userCredential.user);

      return userCredential.user;
    } catch (error) {
      console.error("Email login error", error);
      throw error;
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      setuser(null);
    } catch (error) {
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
