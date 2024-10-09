import Button from '@mui/material/Button'
import  TextField  from '@mui/material/TextField'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

    function App() { 

        return (
          <div
          >
        <Appbar></Appbar>
        <SignUp></SignUp>
          </div>
        );
      }

function Appbar() {
  return (
  <div style= {{
    display: "flex",
    justifyContent: "space-between",
    padding: 4
  }}> 
  <div>
    <Typography variant = {'h6'}>Coursera</Typography>
    </div>
    <div style= {{display: "flex"}}>
    <div style={{marginRight: 10}}>
    <Button variant='contained' 
    onClick={()=> {
      window.location="./signup"
    }}>Sign up</Button>
    </div>
    <div>
    <Button variant='contained'
     onClick={()=> {
      window.location="./signin"
    }}>Sign In</Button>
  
    </div>
  </div>
  </div>
  )
  
  }

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <div>

      <div style = {{ 
        paddingTop: 150,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center"
      }}>
        <Typography variant = {'h6'}>
         Welcome to Coursera. Sign Up Below
         </Typography>
      </div>

  
    <div style = {{display :"flex", 
      justifyContent: "center"}}>
    <Card variant="outlined" style = {{
      width: 400,
      padding: 20
    }}>
 <TextField 
 onChange= {(e) => {
  setEmail(e.target.value);
 }}
 id = {"username"} fullWidth={true}  label="E-mail" variant="outlined" />
    <br/><br/>
    <TextField 
     onChange= {(e) => {
      setPassword(e.target.value);
     }}
    id = {"password"} fullWidth={true} label="Password" variant="outlined" type ={"password"}/>
    <br/><br/>
    <Button 
  size="large"
  variant="contained"
  onClick={() => {
    fetch("http://localhost:3000/admin/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Signup successful", data);
        localStorage.setItem("token", data.token)
      })
      .catch((error) => {
        console.error("Error during signup", error);
      });

    console.log("Username:", username);
    console.log("Password:", password);
  }}
>Sign Up
</Button>

    </Card>
    </div>
    </div>

    }


    
export default App
