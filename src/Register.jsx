import React,{useState} from 'react'

export const Register = (props) =>{
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [name,setName] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email)
    }
    return(
        <div className='form-cont'>
            <h2>Register</h2>
        <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Your Name" id="name" name="name" value={name}/>
            <label htmlFor="email">email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" id="email" name="email" value={email}/>
            <label htmlFor="password">password</label>
            <input type="password" onChange={(e)=>setPass(e.target.value)} placeholder="password" id="password" name="password" value={pass}/>
            <button type="submit">create account</button>
        </form>
        <button className='link-btn' type="button" onClick={()=>props.onFormSwitch('login')}>Already have an account ? Login here </button>
        </div>
    )
}