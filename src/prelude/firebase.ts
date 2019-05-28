import { auth as _auth, User as _User } from "firebase";
import * as _app from "firebase/app";

export const app = _app;
export type Auth = _auth.Auth;
export type User = _User;
export type UserCredential = _auth.UserCredential;
