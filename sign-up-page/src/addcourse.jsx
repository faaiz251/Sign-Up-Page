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
    <Addcourse></Addcourse>
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
       onClick={() => {
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

function Addcourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
return <div style = {{display :"flex", 
    justifyContent: "center"}}>
  <Card variant="outlined" style = {{
    width: 400,
    padding: 20
  }}>
     <TextField 
 onChange= {(e) => {
  setTitle(e.target.value)
 }}
fullWidth={true}  label="Title" variant="outlined" />

<TextField 
 onChange= {(e) => {
    setDescription(e.target.value)
 }}
fullWidth={true}  label="Description" variant="outlined" />


<Button 
size="large"
variant="contained"
onClick = {() => {
    fetch("http://localhost:3000/admin/Addcourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
      title: title,
    description: description
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
}}
>Add Course</Button>

</Card>
</div>


}


export default App