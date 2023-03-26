import axios from 'axios'

const api = 'http://localhost:5050'

export const uploadfileusingurl = async (url) =>{
    try {
        console.log(url)
        await axios.post(`${api}/api/test/storage/upload-via-url` , {url:url} )
        return "success"
    } catch (error) {
        return error
    }
}

export const signUpApi = async (user) =>{
    try {
        console.log(user)
        const res = await axios.post(`${api}/api/auth/signup` , user)
        return res

    } catch (error) {
        return error
    }
}

export const signInApi = async (user) =>{
    try {
        console.log(user)
        const res = await axios.post(`${api}/api/auth/signin` , user)
        return res

    } catch (error) {
        return error
    }
}

export const getSignedUrlApi = async(file) =>{
    try {
        const res = await axios.post(`${api}/api/test/storage/get-signed-url` , {file:file})
        return res.data.url
    } catch (error) {
        return error
    }
}

export const getTranscriptApi = async(file) =>{
    try {
        let address = "gs://video-call-transcript/" +file
        const res = await axios.post(`${api}/api/test/video/transcript` , {file:address})
        return res.data.response.speechTranscriptions
    } catch (error) {
        return error
    }
}