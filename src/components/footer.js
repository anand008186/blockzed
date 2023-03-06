import { Box, Typography, Link, Grid } from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
const Footer = () => {
  return (
    <Box bgcolor="#f2f2f2" p={8} sx={{width:"100%"}}>
      <Typography variant="h6" align="center" gutterBottom>
       
      </Typography>
      <Grid container spacing={4} align={"left"} justifyContent={"center"}>
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" gutterBottom>
            About Us
          </Typography>
          <Link href="#" color="textSecondary">
            Aim
          </Link>
          <br />
          <Link href="#" color="textSecondary">
            Vision
          </Link>
          <br />
          <Link href="#" color="textSecondary">
            Testimonials
          </Link>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" gutterBottom>
            Services
          </Typography>
          <Link href="#" color="textSecondary">
            BlockChain
          </Link>
          <br />
          <Link href="#" color="textSecondary">
            Decentralised Finance
          </Link>
          <br />
        </Grid>
     
        <Grid item xs={12} sm={3}>
          <Typography variant="subtitle1" gutterBottom>
            Social Media
          </Typography>
          <Link href="https://www.linkedin.com/company/block-zed-labs/" target={"_blank"} color="textSecondary">
            <LinkedInIcon style={{ marginRight: 10 }} />
            LinkedIn
          </Link>
          <br />
          <Link href="#" color="textSecondary">
            <InstagramIcon style={{ marginRight: 10 }} />
            Instagram
          </Link>
          <br />
          <Link href="#" color="textSecondary">
            <TwitterIcon style={{ marginRight: 10 }} />
            Twitter
          </Link>
          <br />
          <Link href="#" color="textSecondary">
            <YouTubeIcon style={{ marginRight: 10 }} />
            YouTube
          </Link>
        </Grid>
      </Grid>
        <Typography variant='h6' align='center' gu>© 2023 All Rights Reserved. Block Zed.</Typography>
    </Box>
  );
};

export default Footer;
