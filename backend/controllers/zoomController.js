import { getCallLogsForAUser } from "../middleware/zoom/calls"

async function getCallLogsByUserId(req , res){
    try {
        const x = await getCallLogsForAUser(req.body.userid)
        res.status(200).json(x)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getCallLogsByUserId}