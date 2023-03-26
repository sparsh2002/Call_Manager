import React,{useState} from 'react'

function ScriptView({file}) {
    const [data , setDate] = useState(null)
    async function getTranscript(){

    }
  return (
    <div className='w-[100vw] h-[80vh]'>
        <p className='text-2xl font-bold'>Transcripted Conversation</p>
    </div>
  )
}

export default ScriptView