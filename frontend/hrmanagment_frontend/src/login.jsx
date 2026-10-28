import {useState} from 'react'

import {useNavigate} from 'react-router-dom'

function login(){
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let handlelogin=async(event)=>{
        event.preventDefault()
        if(email=="admin@gmail.com"&& password=="admin123"){
            navigate("/admiinhome")
            
        }else{


        }
    }

    return(<div>
        <h1>login page</h1>
        <form onSubmit={handlelogin}>
            <input type="email"
            onchange={(e)=>setEmail(e.target.value)}
            value={email}
            placeholder="Email"/><br/>

            <input type="password"
            onchange={(e)=>setPassword(e.target.value)}
            value={password}
            placeholder="Password"/>
            <button type="submit">Login</button>
        </form>
    </div>)
}
export default login;