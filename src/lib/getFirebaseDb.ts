import firebaseAdmin, { database } from 'firebase-admin';

const credentials: firebaseAdmin.ServiceAccount = process.env.FIREBASE_TEMPERATURE_CREDENTIALS
    ? JSON.parse(process.env.FIREBASE_TEMPERATURE_CREDENTIALS)
    : undefined;

const FIREBASE_BASE_URL = 'https://api-temperature.firebaseio.com/';

if (credentials) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(credentials),
        databaseURL: FIREBASE_BASE_URL,
    });
}

export const getDatabase = (): database.Database => firebaseAdmin.database();
