import "firebase/auth";
import { app, Auth, User, UserCredential } from "/prelude/firebase";
import { React, ReactElement } from "/prelude/react";

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_API_KEY,
};

export class Firebase {
    private auth: Auth;

    public constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // Auth API

    // Returns the currently signed in user, or `null` if there is none.
    public user(): User {
        return this.auth.currentUser;
    }

    // Create a new user with the given email and password strings.
    public createUser(
        email: string,
        password: string,
    ): Promise<UserCredential> {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    // Sign in a user with the given email and password strings.
    public signInUser(
        email: string,
        password: string,
    ): Promise<UserCredential> {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // Signs out the currently logged in user.
    public signOutUser(): void {
        this.auth.signOut();
    }

    // Reset the password for the given email address.
    public passwordReset(email: string): void {
        this.auth.sendPasswordResetEmail(email);
    }

    // Update the password for the currently logged in user.
    public passwordUpdate(password: string): void {
        this.auth.currentUser.updatePassword(password);
    }
}
