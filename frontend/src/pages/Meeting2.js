import React, { useState, useEffect , useRef } from 'react';
import uuid from 'react-uuid';
import '../App.css';
import ZoomMtgEmbedded from '@zoomus/websdk/embedded';

import { useReactMediaRecorder } from "react-media-recorder";
import { uploadfileusingurl } from '../api/api';
function App() {
    
    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ screen: true, audio: true });

    // console.log(mediaBlobUrl, status)
    const client = ZoomMtgEmbedded.createClient();

   

    // useEffect(() => {
    //     if (status == 'stopped') {

    //     }
    // }, [status])


    var authEndpoint = 'http://localhost:4000'
    var sdkKey = 'Q76NcnY5TXmSyBwodgWuyQ'
    //   var meetingNumber = '89708934194'
    //   var passWord = 'UGhht5'
    //   var role = 0
    //   var userName = 'React'
    var userEmail = ''
    var registrantToken = ''
    var zakToken = ''
    const [meetingNumber, setMeetingNumber] = useState('')
    const [passWord, setPassWord] = useState('')
    const [role, setRole] = useState(0)
    const [userName, setUserName] = useState('User')

    function getSignature(e) {
        e.preventDefault();
        console.log(meetingNumber, passWord, userName)

        fetch(authEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                meetingNumber: meetingNumber,
                role: role
            })
        }).then(res => res.json())
            .then(response => {
                startMeeting(response.signature)
            }).catch(error => {
                console.error(error)
            })
    }

    const videoRef = useRef(null);
  const [downloadUrl, setDownloadUrl] = useState("");

  async function uploadVideo(path){
    await uploadfileusingurl(path)
  }
  const handleDownload = async () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    
    let name = uuid()

    let path = "/Users/sparshjhariya/Downloads/" + name + '.webm'
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    await uploadVideo(path)

  };

  const handleStop = (blobUrl) => {
    setDownloadUrl(blobUrl);
  };

  useEffect(() => {
    if(status==="stopped"){
        handleStop(mediaBlobUrl)
    }
   
  }, [status])
  
//   console.log("downloadurl:" ,downloadUrl)

    function startMeeting(signature) {

        let meetingSDKElement = document.getElementById('meetingSDKElement');

        client.init({
            debug: true,
            zoomAppRoot: meetingSDKElement,
            language: 'en-US',
            customize: {
                meetingInfo: ['topic', 'host', 'mn', 'pwd', 'telPwd', 'invite', 'participant', 'dc', 'enctype'],
                toolbar: {
                    buttons: [
                        {
                            text: 'Custom Button',
                            className: 'CustomButton',
                            onClick: () => {
                                console.log('custom button');
                            }
                        }
                    ]
                }
            }
        });

        client.join({
            signature: signature,
            sdkKey: sdkKey,
            meetingNumber: meetingNumber,
            password: passWord,
            userName: userName,
            userEmail: userEmail,
            tk: registrantToken,
            zak: zakToken
        })

        // start recording the Zoom meeting
        // client.startRecord({
        //     success: function (res) {
        //         console.log("Successfully started recording.");
        //     },
        //     error: function (err) {
        //         console.log(err);
        //     },
        // });

        // stop recording the Zoom meeting
        // client.stopRecord({
        //     success: function (res) {
        //         console.log("Successfully stopped recording.");
        //     },
        //     error: function (err) {
        //         console.log(err);
        //     },
        // });
        // client.record()
    }

    return (
        <div className="App">
            <main>
                <h1 className='text-2xl font-bold mb-4 mt-4'>Meeting Page</h1>

                {/* For Component View */}

                <div className='flex flex-col justify-between gap-y-5'>
                    <div className='flex justify-between content-between items-center'>
                        <label className='font-bold'>UserName</label>
                        <input className='rounded-md border-2 border-black p-2' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className='flex justify-between content-between items-center'>
                        <label className='font-bold'>Meeting Number</label>
                        <input className='rounded-md border-2 border-black p-2' type='text' value={meetingNumber} onChange={(e) => setMeetingNumber(e.target.value)} />
                    </div>
                    <div className='flex justify-between content-between items-center'>
                        <label className='font-bold'>Password</label>
                        <input className='rounded-md border-2 border-black p-2' type='text' value={passWord} onChange={(e) => setPassWord(e.target.value)} />
                    </div>
                    {/* <div className='flex justify-between content-between items-center'>
                        <label className='font-bold'>Role</label>
                        <input className='rounded-md border-2 border-black p-2' type='text' value={role} onChange={(e) => setRole(e.target.value)} />
                    </div> */}

                </div>
                <button onClick={getSignature}>Join Meeting</button>
                <div id="meetingSDKElement">
                    {/* Zoom Meeting SDK Component View Rendered Here */}
                </div>
                <div>
                    <h1 className='text-xl font-bold mb-4 mt-4'>Recording Menu</h1>
                    {mediaBlobUrl ? <video ref={videoRef} src={mediaBlobUrl} controls /> :''}
                    {status === "recording" ? (
                        <button onClick={stopRecording}>Stop Recording</button>
                    ) : (
                        <button onClick={startRecording}>Start Recording</button>
                    )}
                    {downloadUrl && <button onClick={handleDownload}>Download Video</button>}
                </div>
                {/* <div>
                    <h1 className='text-xl font-bold mb-4 mt-4'>Recording Menu</h1>
                    <button  className='mr-5' onClick={}>Start Recording</button>
                    <button onClick={stopRecording}>Stop Recording</button>
                </div> */}
            </main>
        </div>
    );
}

export default App;
