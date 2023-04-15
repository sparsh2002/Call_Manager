const { db } = require('../middleware/gcp/firestore')


async function getFS( req , res) {
    try {
        console.log(db)
    } catch (error) {
        console.log(error)
    }
}

async function addUser(req , res){
    try {
        const id = req.body.username
        const docRef = db.collection('user')
            .doc(id);

        const x = await docRef.set(req.body);

        res.status(201).json(x)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {addUser}