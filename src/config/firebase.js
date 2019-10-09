import * as firebase from 'firebase';

import { firebaseConfig } from './constant';

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();

export const todosRefAtHome = databaseRef.child('todos-at-home');
export const todosRefAtOffice = databaseRef.child('todos-at-office');
