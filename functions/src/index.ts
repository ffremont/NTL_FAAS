import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express = require('express');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
if(process.env.GOOGLE_APPLICATION_CREDENTIALS){
    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
    let serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}else{
    admin.initializeApp();
}


const app = express();
const db = admin.firestore();

console.log('Server config : '+functions.config().my.apikey);

const runtimeOpts = {
    timeoutSeconds: 300,
    memory: functions.VALID_MEMORY_OPTIONS[1]
}   

app.get('/api/hello', (req,res) => {
    res.send("Hello from Firebase!");
});
app.get('/api/my-private-data', async (req:any,res) => {
    const idToken = req.headers.authorization.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    // @see https://firebase.google.com/docs/reference/admin/node/admin.auth.UserRecord
    const userRecord = await admin.auth().getUser(decodedToken.uid);

    res.send(`Hello ${userRecord.email} !`);
});
/*

*/
app.post('/api/messages', async (req,res) => {
    await db.collection('messages').doc((new Date()).getTime()+'').set({text : req.body, created: (new Date()).getTime()});
    console.log(req.body)
    res.send("Hello from Firebase!");
});
export const api = functions.runWith(runtimeOpts).https.onRequest(app);


 export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });
