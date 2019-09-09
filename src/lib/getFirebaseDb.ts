import firebaseAdmin, { database } from 'firebase-admin';

const FIREBASE_BASE_URL = 'https://api-temperature.firebaseio.com/';

const FIREBASE_TEMPERATURE_CREDENTIALS = process.env.FIREBASE_TEMPERATURE_CREDENTIALS;

const credentials: firebaseAdmin.ServiceAccount = FIREBASE_TEMPERATURE_CREDENTIALS
    ? JSON.parse(FIREBASE_TEMPERATURE_CREDENTIALS)
    : undefined;

if (credentials) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(credentials),
        databaseURL: FIREBASE_BASE_URL,
    });
}

export const getDatabase = (): database.Database => firebaseAdmin.database();
