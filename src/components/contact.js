import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Divider
} from '@mui/material';


function ContactUs() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [budget, setBudget] = useState('');
  const [projectBrief, setProjectBrief] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    alert("Your message has been sent successfully")
    setFullName("");
    setBudget("");
    setEmail("");
    setPhoneNumber("");
    setProjectBrief("");

  };

  return (
    <Container sx={{py:4 }}>
      <Typography variant="h4" align="center" sx={{my:4}}>
       <Divider textAlign={"left"} sx={{color:"#886de5"}}> Contact Us</Divider>
      </Typography>
      <form   onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent={"center"} >
       <Grid item  xs={6} >
          <TextField
          sx={{mb:2,width:"100%"}}
          label="Full Name"
          variant="outlined"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
        /></Grid>
        <Grid item xs={6} >
        <TextField
          sx={{mb:2,width:"100%"}}
          label="Email Address"
          variant="outlined"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        </Grid>
        <Grid item xs={6}>
        <TextField
          sx={{mb:2,width:"100%"}}
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        </Grid>
        <Grid item  xs={6} >
        <TextField
          sx={{mb:2,width:"100%"}}
          label="Budget"
          variant="outlined"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
        />
        </Grid>
        <Grid item  xs={12}>
        <TextField
         sx={{mb:2,width:"100%"}}
          label="Project Brief"
          variant="outlined"
          multiline
          rows={4}
          value={projectBrief}
          onChange={(event) => setProjectBrief(event.target.value)}
          required
        />
        </Grid>
        <Grid item xs={6} >
        <Button
          sx={{mt:2,width:"100%"}}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
        </Grid>
        </Grid>
       
        
       
      </form>
    </Container>
  );
}

export default ContactUs;
