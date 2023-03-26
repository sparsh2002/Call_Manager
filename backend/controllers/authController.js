// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// const { getAnalytics } = require("firebase/analytics");
const { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword , signOut } = require('firebase/auth')
const {firebaseConfig} = require('../../fire')


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


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

async function signOutFunction(req  , res) {
    try {
        signOut(auth)
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

async function getCurrentUser(req , res){
    try {
        const user =  auth.currentUser
        res.status(200).json(user)
    } catch (error) {
        console.log(error)

    }
}

module.exports = { signIn, signOutFunction , signUp , getCurrentUser }

