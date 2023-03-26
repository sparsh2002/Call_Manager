import React,{useState , useEffect} from 'react'
import { getTranscriptApi } from '../api/api'
import CircularProgress from '@mui/material/CircularProgress';
function ScriptView({file}) {
    const [data , setDate] = useState(null)
    const [loading , setLoading] = useState(true)
    async function getTranscript(){
        setLoading(true)
        const x = await getTranscriptApi(file)
        var arr = []
        for(var i=0 ; i<x.length ; i++){
            var paragraph = []
            for(var j=0 ; j<x[i].alternatives.length ; j++){
                paragraph.push(x[i].alternatives[j].transcript)
            }
            arr.push(paragraph)
        }
        console.log(arr)
        setDate(arr)
        setLoading(false)
    }
    useEffect(() => {
      getTranscript()
    }, [file])
    
  return (
    <div className='w-[100vw] min-h-[80vh]'>
        <p className='text-2xl font-bold'>Transcripted Conversation</p>
        {
            loading || data===undefined  ? <CircularProgress /> : <div className='flex flex-col gap-y-4'>
                {
                    data && data.length>0 ? data.map(paragraph => <div>
                        {paragraph.map(sentence => <p>{sentence}</p>)}
                    </div>) : ""
                }
            </div>
        }
    </div>
  )
}

export default ScriptView