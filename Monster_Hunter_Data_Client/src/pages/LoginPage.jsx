import { useEffect, useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import {Link, useNavigate} from "react-router-dom"
import { serverSide } from "../utils/axios"

export default function Login(){
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async(event) =>{
    event.preventDefault()
    console.log({email, password})
    try {
      const {data} = await serverSide.post("/login",{
        email,
        password,
      })
      console.log(data.token)
      localStorage.setItem("access_token", data.token)
      navigate("/")
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'back'
      })
    }
  }

  async function handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      const tokenGoogle = response.credential
      console.log({tokenGoogle})

        try {
            const {data} = await serverSide.post("/login/google", {
                tokenGoogle
              })
              localStorage.setItem("access_token", data.token)
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'back'
              })
        }
    }
    useEffect(() =>{
        google.accounts.id.initialize({
            client_id: "882440757919-niaodh2jfd9lkifvs7q2moojb4p3o21n.apps.googleusercontent.com",
            callback: handleCredentialResponse
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
          );
        //   google.accounts.id.prompt(); // also display the One Tap dialog
    }, [])
  return(
    <>
        <br /><br />
            <h1 className="d-flex justify-content-center ">Login</h1><br />
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
                <small id="emailHelp" className="form-text text-muted">Your data, it's out there being mishandled and use for scams.</small>
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
            </div><br />
            <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Submit</button><br />
            <div className="d-flex justify-content-center">or</div><br />
            <div className="d-flex justify-content-center">
            <div id="buttonDiv"></div>
            </div>
            </form>
            </div><br />
            <h6 className="d-flex justify-content-center">Don't have an account?&nbsp;<Link to={"/register"}>Register now</Link> </h6>
    </>
  )
}