import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form,Button,Container,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Signup = (SignUp,error) => {

  const[details,setDetails] = useState({name:"",passtest:"",password:""})

  const submitHandler = e =>{
    e.preventDefault();
    SignUp(details);
  }

  return (
    <div className="App">
      <header className="App-header" >
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId='formBasicEmail'>
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Username" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId='formBasicPassword'>
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={e => setDetails({...details, passtest: e.target.value})} value={details.passtest}/>
          </Form.Group>

          <Button>Sign Up</Button>

        </Form>
        <h4 class="fs-6">Have an account? <Link to="/Login">log in</Link> </h4>
      </header>
    </div>
  )
}

export default Signup