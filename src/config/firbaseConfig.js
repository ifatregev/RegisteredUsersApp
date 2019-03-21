import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAilTgfgKUGTGL6MKjOBBlSBFn-FKK_0ts",
    authDomain: "hoc-employee-test.firebaseapp.com",
    databaseURL: "https://hoc-employee-test.firebaseio.com",
    projectId: "hoc-employee-test",
    storageBucket: "",
    messagingSenderId: "596374656058"
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.dbRef = firebase.database().ref();
    }
}

export const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default Firebase;