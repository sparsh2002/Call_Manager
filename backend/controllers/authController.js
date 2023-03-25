// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// const { getAnalytics } = require("firebase/analytics");
const { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword } = require('firebase/auth')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDl6EOsOo4zYwgZqvPJZMz6v6m0u_cAvwk",
    authDomain: "demo1212-606bb.firebaseapp.com",
    projectId: "demo1212-606bb",
    storageBucket: "demo1212-606bb.appspot.com",
    messagingSenderId: "618368048589",
    appId: "1:618368048589:web:b46cc16e2ae730d929b884",
    measurementId: "G-GGF85CNCHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);
// async function signIn(req , res){
//     try {
//         const email = req.body.email
//         const password = req.body.password
//         auth.createUser({
//             email: email,
//             password: password
//           })
//           .then((userRecord) => {
//             console.log(`User ${userRecord.uid} created successfully`);
//             res.status(201).json({'id':userRecord.uid})
//           })
//           .catch((error) => {
//             console.error('Error creating user:', error);
//           });




//         // await admin.auth().signInWithEmailAndPassword(email, password)
//         // .then((userCredential) => {
//         //     // User is authenticated
//         //     console.log(`User ${userCredential.user.email} authenticated successfully`);
//         //     res.status(200).json(userCredential)
//         // })
//         // .catch((error) => {
//         //     console.error('Error authenticating user:', error);
//         // });
//         // res.status(200).json({'success':true})
//     } catch (error) {
//         console.log(error)
//     }

// }

// const auth = firebase.auth()

async function signIn(req, res) {
    try {
        // console.log(auth)
        const email = req.body.email
        const password = req.body.password
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                res.status(200).json(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    } catch (error) {
        console.log(error)
    }
}

async function signUp(req, res) {
    try {
        // console.log(auth)
        const email = req.body.email
        const password = req.body.password
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                res.status(200).json(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    } catch (error) {
        console.log(error)
    }
}

async function login(req, res) {
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await auth.getUserByEmail(email)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
}

async function signOut() {
    try {
        await admin.auth().signOut()
            .then(() => {
                console.log('User logged out successfully');
            })
            .catch((error) => {
                console.error('Error logging out user:', error);
            });
        res.status(200).json({ 'logout': true })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { signIn, signOut, login , signUp }

