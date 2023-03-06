import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
const pages = [
    {string:"Home",
     link:"#home"},
     {string:"Products",
     link:"#transform"},
     {string:"About",
     link:"#digital"},
     {string:"Blog",
     link:"#blog"},
     {string:"Contact",
     link:"#contact"}
   ];
function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color={"transparent"}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, m: 5 , }}>
        <img src={require("../assets/images/logo.png")} alt="logo" style={{width:"50px" , }} />
        </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } ,mr:1}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{width:"100vw"}}>
                  <Link href={page.link} textAlign="center">{page.string}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 5 , }}>
        <img src={require("../assets/images/logo.png")} alt="logo" style={{width:"50px" , }} />
        </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'  },ml:25}}>
            {pages.map((page) => (
              <Button
                key={page}
                href = {page.link}
                onClick={handleCloseNavMenu}
                sx={{ m: 2, color: '#886de5', display: 'block' }}
              >
                {page.string}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;