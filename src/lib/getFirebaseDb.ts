import firebaseAdmin, { database } from 'firebase-admin';
import { Base64 } from 'js-base64';
import get from 'lodash/get';

const FIREBASE_BASE_URL = 'https://api-temperature.firebaseio.com/';

const FIREBASE_TEMPERATURE_CREDENTIALS = process.env.FIREBASE_TEMPERATURE_CREDENTIALS;

const FIREBASE_TEMPERATURE_CREDENTIALS_KEY = get(FIREBASE_TEMPERATURE_CREDENTIALS, ['data', 'key.json']);

const credentials: firebaseAdmin.ServiceAccount = FIREBASE_TEMPERATURE_CREDENTIALS_KEY
    ? JSON.parse(Base64.decode(FIREBASE_TEMPERATURE_CREDENTIALS_KEY))
    : undefined;

if (credentials) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(credentials),
        databaseURL: FIREBASE_BASE_URL,
    });
}

export const getDatabase = (): database.Database => firebaseAdmin.database();
