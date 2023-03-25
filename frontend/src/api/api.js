import axios from 'axios'

const api = 'http://localhost:5050'

export const uploadfileusingurl = (url) =>{
    try {
        console.log(url)
        axios.post(`${api}/api/test/storage/upload-via-url` , {url:url} )
        return "success"
    } catch (error) {
        return error
    }
}