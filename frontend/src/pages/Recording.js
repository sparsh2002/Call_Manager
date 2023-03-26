import React ,{useState , useEffect} from 'react'
import Header from '../components/Header'
import { useParams , useSearchParams} from 'react-router-dom';
import { getSignedUrlApi } from '../api/api';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ScriptView from '../components/ScriptView';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function Recording() {
  const [url , setUrl] = useState('')
  const {file} = useParams()
  // console.log('params:',useParams())
  const [mode , setMode] = useState(0)
  console.log('fileName:' , file)
  async function getVideoUrl(){
    const x = await getSignedUrlApi(file)
    console.log(x)
    setUrl(x)
  }

  useEffect(() => {
    getVideoUrl()
  }, [file])
  
  return (
   <>
   <Header />
   <div className='p-4'>
    {mode==0? <video src={url} className='h-[80vh]' controls /> : <ScriptView file={file} />}
    <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }}  />}
        label= {mode==0? "Video" : "Transcript"}
        onChange = {() => {
          if(mode==0){
            setMode(1)
          }
          else{
            setMode(0)
          }
        }}
      />
   </div>
   </>
  )
}

export default Recording