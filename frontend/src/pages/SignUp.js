import React ,{useState} from 'react'
import { signUpApi } from '../api/api'

function SignUp() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')  

  async function SignUpFunction(){
    const user = {
        email:email,
        password:password
    }
    await signUpApi(user)
  }

  return (
    <div className='flex flex-col justify-center w-[50vw] m-auto mt-[20vh]'>
        <p className='text-center text-2xl font-bold'>Sign Up</p>
        <div className='flex justify-between mt-5'>
            <label className='font-bold'>Email</label>
            <input className='rounded-sm border-[1px] border-black p-1' type='text' value={email} onChange={(e) => setEmail(e.target.value)}  />
        </div>
        <div className='flex justify-between mt-5'>
            <label className='font-bold'>Password</label>
            <input className='rounded-sm border-[1px] border-black p-1' type='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <button className='bg-blue-600 w-[120px] text-white p-1 rounded-md text-center' onClick={SignUpFunction}>SignUp</button>

    </div>
  )
}

export default SignUp