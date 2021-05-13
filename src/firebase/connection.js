require('dotenv').config();
const admin = require('firebase-admin');

const adminConfig = {
	projectId: process.env.FIREBASE_PROJECT_ID,
	privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
	clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

admin.initializeApp({
	credential: admin.credential.cert(adminConfig),
	databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.firestore();

module.exports = db;