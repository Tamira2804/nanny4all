// import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../../firebase";
// import { resetAuthState } from "./authSlice";

// export const register = createAsyncThunk(
//   "auth/register",
//   async ({ name, email, password }, thunkAPI) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       console.log("User", user);

//       await updateProfile(user, { displayName: name });

//       // return { id: user.uid, email: user.email, name: user.displayName };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const register = createAsyncThunk(
//   "auth/register",
//   async ({ name, email, password }, thunkAPI) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       console.log("User", user);

//       await updateProfile(user, { displayName: name });

//       // return { id: user.uid, email: user.email, name: user.displayName };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const response = await signInWithEmailAndPassword(auth, email, password);

//       const user = response.user;
//       return { name: user.displayName, email: user.email };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
//   try {
//     await auth.signOut();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const refreshUser = createAsyncThunk(
//   "auth/current",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       thunkAPI.dispatch(resetAuthState());
//       return thunkAPI.rejectWithValue();
//     }

//     try {
//       const currentUser = auth.currentUser;
//       return currentUser;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
