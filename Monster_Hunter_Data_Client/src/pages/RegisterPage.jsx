import { useEffect, useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import {Link, useNavigate} from "react-router-dom"

export default function Register(){
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async(event) =>{
    event.preventDefault()
    console.log({email, password})
    try {
      const {data} = await axios.post("http://localhost:3000/Register",{
        email,
        password,
      })
      console.log(data)
      navigate("/login")
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'back'
      })
    }
  }
  return(
    <>
        <br /><br />
            <h1 className="d-flex justify-content-center ">Register</h1><br />
            <div className="d-flex justify-content-center">
            <form className="card p-5" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                />
                <small id="emailHelp" className="d-flex justify-content-center form-text text-muted">Give data, it's for selling purpose and going to be mishandled.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password" 
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}
                />
            </div>
            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Submit</button>
            </form>
            </div>
            <br />
            <h6 className="d-flex justify-content-center">Already have an account?&nbsp;<Link to={"/login"}>Login now</Link> </h6><br />
    </>
  )
}