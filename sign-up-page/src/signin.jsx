import Button from '@mui/material/Button'
import  TextField  from '@mui/material/TextField'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

    function App() { 

        return (
          <div
          >
        <Appbar></Appbar>
         <Signin></Signin>
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

function Signin() {
  return <div>

      <div style = {{ 
        paddingTop: 150,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center"
      }}>
        <Typography variant = {'h6'}>
         Welcome Back! Sign In Below
         </Typography>
      </div>

  
    <div style = {{display :"flex", 
      justifyContent: "center"}}>
    <Card variant="outlined" style = {{
      width: 400,
      padding: 20
    }}>
 <TextField fullWidth={true} id="outlined-basic" label="E-mail" variant="outlined" />
    <br/><br/>
    <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />
    <br/><br/>
    <Button size='large' variant = "contained">Sign in</Button>
    </Card>
    </div>
    </div>

    }


    
export default App
