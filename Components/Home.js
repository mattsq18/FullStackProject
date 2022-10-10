import React from 'react'
import {useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Home = ({Logout,user,deleteAccount}) => {
  return (
    
    <div className="App">
      <header className='App-header'>
        {(user.name != "") ? (
          <div className="App">
            <h2 class="fs-1">Welcome, </h2>
            <h2>{user.name}</h2>
            <Form>
              <br></br>
              <br></br>
              <Button onclick ={Logout} href="/">Logout</Button>
              <br></br>
              <Button onclick ={deleteAccount} href="/">Delete Account</Button>
            </Form>
          </div>
        ) : (
          <Form>
            <Form.Label class="fs-1">Welcome</Form.Label>
            <br></br>
            <br></br>
            <Link to="/Login"><Button href="Login">Sign In</Button></Link>
            <br></br>
            <Link to='/Signup'><Button >Sign Up</Button></Link>
          </Form>
          

        )}
      </header>
    </div>
  )
}

export default Home