import React,{useState} from 'react'

export const Login = (props) =>{
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email)
    }
    return(
        <div className='form-cont'>
            <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" id="email" name="email" value={email}/>
            <label htmlFor="password">password</label>
            <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="password" id="password" name="password" value={pass}/>
            <button type="submit">Login</button>
        </form>
        <button className='link-btn' type="button" onClick={()=>props.onFormSwitch('register')}>Don't have an account ? Register here </button>
        </div>
    )
}