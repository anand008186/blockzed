import { Card,CardMedia,CardContent,Button, Grid, Typography,Box ,Divider } from '@mui/material'
import React,{useState} from 'react'
import ContactUs from './contact'
import Footer from './footer'
import Navbar from './Navbar'

const Transform = [{
    image:require("../assets/images/gui.jpeg"),
    title:"Graphical User Interface ",
Description:" Our easy-to-use interface simplifies your trading experience, making it accessible and understandable to everyone.",
},
{
    image:require("../assets/images/trade.jpeg"),
    title:"Website ",
Description:"Our website allows you to trade on the go, anytime and anywhere in the world ",
},
{
    image:require("../assets/images/integration.jpeg"),
    title:"Secure Integration",
Description:"Our integration ensures that your assets are safe and secure. We use advanced encryption and security protocols to protect your digital assets. ",
}]

const Blogs = [
    {image:require("../assets/images/defi_blog.avif"),
title:"Understanding Decentralized Finance - In this post, we explore the concept of...",
Description:"In this post, we explore the concept of decentralized finance (DeFi) and its potential to revolutionize the financial industry."},
{image:require("../assets/images/trading.jpeg"),
title:"The Future of Trading  - In this post, we discuss the latest trends and innovations in trading...",
Description:" In this post, we discuss the latest trends and innovations in trading, and how technology is shaping the future of this industry. "}
]
function Home() {
   
  return (
  <Grid container spacing={2}  sx={{ background: `linear-gradient(to bottom, #f5e9fa, #bfd0fc )`}}>
    <Navbar/>

    {/* Home section */}
    <Grid item id="home">
    <Grid container spacing={3}  sx={{height:"100vh",alignItems:"center", background: `linear-gradient(to bottom, #f5e9fa, #bfd0fc )`}}  >
      <Grid item xs={12} sm={7} sx={{
       }}>
      <Typography variant="h1" sx={{
        fontSize: '4.4rem',
        fontWeight: 600,
        color: "#886de5",
        textShadow: `3px 3px 0px dark`,
        px:8
      }}>
        Welcome to Block Zed
      </Typography>
      <Typography variant="body1" sx={{
    fontSize: '1.5rem',
    color: "deepgrey",
    marginTop: "8px",
    px:8
    }}>
        For all things related to blockchain development and digital transformation. Our solutions empower startups in Web3 and crypto space to transform their businesses with cutting-edge technologies and innovative solutions.
      </Typography>
      </Grid>
      <Grid item xs={12} sm={5} textAlign={'center'} >
        <img src={require("../assets/images/home.jpeg")} alt="Right Side Image" style={{ width: '65%',borderRadius:25 }} />
      </Grid>
    </Grid>
    </Grid>
    {/* What we do */}
    <Grid item xs={12} id="transform">
   <Grid>
    <Typography variant='h4' m={8}> <Divider textAlign='left' sx={{color:"#886de5"}}>What We Transform</Divider></Typography>
    <Grid sx={{display:"flex",justifyContent:"space-evenly"}} >
    { Transform.map((item,index) => {
        return (
            <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            // borderRadius={activeTransformCard === index ? 4 : 2}
            // onMouseOver={handleMouseOverTransform(index)}
            // onMouseLeave={handleMouseLeaveTransform()}
            transition="all 0.3s"
          >
              <Card
              raised={false}
               sx={{ maxWidth: 345 ,textAlign:"center",m:2,py:10 ,backgroundColor:'white',borderRadius:5}}>
           <img src={item.image} alt={item.title} style={{width:100}} />
            <CardContent >
             <Typography variant='h5' color={"#bfd0fc " } gutterBottom >{item.title}</Typography>
              <Typography variant="body2" color="black">
              {item.Description}
              </Typography>
            </CardContent>
          </Card>
          </Box>
          
        )
     })}
    </Grid>
   </Grid>
 </Grid>
 {/* digital Transfomation */}
 <Grid item xs={12} align={"center"} id="digital">
   <Grid>
    <Typography variant='h4' m={8}><Divider textAlign='left' sx={{color:"#886de5"}}>Digital Transformation</Divider> </Typography>
    <Grid sx={{width:"80%"}} >
          <Card
             sx={{ m:2,borderRadius:5,display:"flex" }}>
         {/* <CardMedia
        sx={{ width:"100%"}}
        image={require("../assets/images/transform.jpeg")}
        alt={"image-transformation"}
      /> */}
      <img src={require("../assets/images/transform.jpeg")} alt="image-transformation" style={{width:"200px"}} />
          <CardContent >

           <Typography variant='body1' color="text.secondary" sx={{p:2}} gutterBottom> At Block Zed, we are dedicated to revolutionizing the way people conduct business. We believe that the traditional model of centralization and opacity is no longer sustainable in today's fast-paced and rapidly evolving global marketplace. That's why we've built a platform that operates on the principles of decentralization, transparency, and security.

Decentralization means that our platform is powered by a network of distributed nodes, rather than relying on a single central authority. This ensures that our system is resilient and resistant to attacks, and provides users with greater control over their data and assets.
     </Typography>
          </CardContent>
        </Card>
    </Grid>
   </Grid>
 </Grid>

 {/* Interesting Facts */}
 <Grid item xs={12} align={"center"}>
   <Grid>
    <Typography variant='h4' m={8}><Divider textAlign='left' sx={{color:"#886de5"}}>Interesting Facts</Divider> </Typography>
    <Grid sx={{display:"flex",justifyContent:"center",width:"75%"}} >
    <Card
               sx={{ textAlign:"center",m:4,p:8,borderRadius:10 }}>
           <Typography variant='h5'>
           Did you know that Block Zed was founded by a team of passionate software 
           developers who are committed to revolutionizing the industry? 
           We believe that software development and digital transformation can help businesses of all sizes to succeed in the digital age. 
           </Typography>
            <CardContent >
             <Typography variant='h5'></Typography>
            </CardContent>
          </Card>
    
    </Grid>
   </Grid>
 </Grid>

 {/* Blogs */}
 <Grid item xs={12} sx={{m:8}} id="blog">
   <Grid>
    <Typography variant='h4' ><Divider textAlign='left' sx={{color:"#886de5"}}>Blogs</Divider> </Typography>
    <Typography variant='h6' color="InfoText" align='center' m={4}>Check out our latest blog posts on software development and digital transformation: </Typography>
    <Grid sx={{display:"flex",justifyContent:"space-evenly"}} >
    { Blogs.map((item,index) => {
        return (
            <Card
             sx={{ maxWidth: 345,m:2}}>
         <CardMedia
        sx={{ height: 180 }}
        image={item.image}
      />
          <CardContent >
           <Typography variant='h4'>{item.title}</Typography>
           <Typography variant='body1' color="text.secondary">{item.Description}</Typography>
          </CardContent>
        </Card>
          
        )
     })}
    </Grid>
   </Grid>
 </Grid>

 {/* Contact Us */}
<Grid item xs={12} id="contact">
<ContactUs/>
</Grid>

 {/* Footer */}
 <Footer/>
  </Grid>
  )
}



export default Home
