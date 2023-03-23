const db = require('../middleware/gcp/firestore')


async function getFS( req , res) {
    try {
        console.log(db)
    } catch (error) {
        console.log(error)
    }
}

console.log(db)