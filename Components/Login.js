import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import {Form,Button,Container,Navbar} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({Signin, error}) => {

  const[details,setDetails] = useState({name:"",email:"",password:""})
  const navigate = useNavigate()

  const submitHandler = e =>{
    e.preventDefault();
    Signin(details);
  }

  return (
    <div className="App">
      <header className="App-header" >
        <Form onSubmit={submitHandler} afterSubmit={() => navigate('/Forum')}>
          <Form.Group className="mb-3" controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
          </Form.Group>

          <Button type="submit">Login</Button>

          

        </Form>
        <h4 class="fs-6">Don't have an account? <Link to="/Signup">sign up</Link> </h4>
      </header>
    </div>
  )
}

export default Login