import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { signInApi } from '../api/api'

function SignIn() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')  
  const navigate = useNavigate()

  async function SignInFunction(){
    const user = {
        email:email,
        password:password
    }
   await signInApi(user)
   navigate("/")
  }
  return (
    <div className='flex flex-col justify-center w-[50vw] m-auto mt-[20vh]'>
        <p className='text-center text-2xl font-bold'>Sign In</p>
        <div className='flex justify-between mt-5'>
            <label className='font-bold'>Email</label>
            <input className='rounded-sm border-[1px] border-black p-1' type='text' value={email} onChange={(e) => setEmail(e.target.value)}  />
        </div>
        <div className='flex justify-between mt-5'>
            <label className='font-bold'>Password</label>
            <input className='rounded-sm border-[1px] border-black p-1' type='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <button className='bg-blue-600 w-[120px] text-white p-1 rounded-md text-center' onClick={SignInFunction}>SignIn</button>

    </div>
  )
}

export default SignIn