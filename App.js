import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Forum from "./Components/Forum";
import Home from "./Components/Home";
import {useState} from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import axios from 'axios'

import {Form,Button,Container,Navbar,Nav} from 'react-bootstrap'

const api = axios.create({
  baseURL: 'http://localhost'
})

function App() {

  const[user,setUser] = useState({name:"", email:""});
  const[error,setError] = useState("");
  const[check,setCheck] = useState({name:"", password:""});

  const Signin = details => {
    console.log(details)

    api.get(`/accounts/${details.name}`).then(res => {
        setCheck({
          name: res.username,
          password: res.password
        })
    });

    if(check.username == user.name && check.password == user.password){
      setUser({
        name: details.name,
        email: details.email
      });

      setError("");
    } else{
      setUser({
        name: "",
        email: ""
      });

      setError("Wrong password or username");
    }

    setCheck({
      name: "",
      password: ""
    });

  }
  
  const SignUp = async details => {
    if(details.password == details.passtest){
      let res = await api.post('/accounts',{username: details.name, password: details.password, AdminStatus: false});
      setError("");
      setUser({
        name: details.name,
        email: ""
      });
    } else{
      setError("Passwords must match");
    }
  }

  const deleteAccount = async details => {
    let res = await api.delete(`/accounts/${details.name}`)
    setUser({
      name: "",
      email: ""
    });
  }

  const peek = async () => {
    api.get('/accounts').then(res => 
      console.log(res)
    )
  }

  const Logout =  () => {
    console.log(user)
    setUser({name:"", email:""});
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to='/'><Nav.Link href='/'>Home</Nav.Link></Link>
            <Link to='/Login'><Nav.Link href="Login">Login</Nav.Link></Link>
            <Link to='/Signup'><Nav.Link href="Signup">Sign Up</Nav.Link></Link>
            <Link to='/Forum'><Nav.Link href="Forum">Forum</Nav.Link></Link>
          </Nav>
          <Navbar.Text className="fixed-right">{user.name}</Navbar.Text>
          <Button onClick={peek}>peek</Button>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='/' element={<Home Logout ={Logout} user = {user} deleteAccount={deleteAccount}/>} />
        <Route path='/Login' element={<Login Signin = {Signin} error={error}/>} />
        <Route path='/Signup' element={<Signup SignUp = {SignUp} error={error}/>} />
        <Route path='/Forum' element={<Forum user = {user}/>} />
      </Routes>
    </div>
  );
}

export default App;
