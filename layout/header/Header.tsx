  import * as React from 'react';
  import AppBar from '@mui/material/AppBar';
  import Box from '@mui/material/Box';
  import CssBaseline from '@mui/material/CssBaseline';
  import Divider from '@mui/material/Divider';
  import Drawer from '@mui/material/Drawer';
  import IconButton from '@mui/material/IconButton';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemText from '@mui/material/ListItemText';
  import MenuIcon from '@mui/icons-material/Menu';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Button from '@mui/material/Button';
  import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
  import Link from 'next/link';
  import Brightness4Icon from '@mui/icons-material/Brightness4';
  import Brightness7Icon from '@mui/icons-material/Brightness7';
  import { createTheme, ThemeProvider } from '@mui/material/styles';

  const drawerWidth = 240;
  const navItems = [
    {
      component: 'Home',
      path: '/'
    },
    {
      component: 'About',
      path: '/about'
    },
    {
      component: 'Image Library',
      path: '/imggalery'
    },
  ];

  interface Props {
    window?: () => Window;
  }

  export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
      
    };

    const handleThemeChange =  () => {
      setDarkMode((prevMode) => !prevMode);
      console.log('theme', darkMode);
      localStorage.setItem('themes', JSON.stringify(darkMode)) 
    }

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <RocketLaunchIcon />
          NASA Explorer
        </Typography>
        <Divider />
        <List>
          {navItems.map((item, key) => (
            <ListItem key={key} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} component={Link} href={item?.path}>
                <ListItemText primary={item?.component} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const [modee, setMode] = React.useState(false)
  React.useEffect(()=>{
    setMode(JSON.parse(localStorage.getItem('themes')))
  },[darkMode])
  console.log('mode', modee);
  
    const theme = createTheme({
      palette: {
        mode: modee ? 'dark' : 'light',
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar color='inherit' component="nav" sx={{ height: "auto" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <RocketLaunchIcon sx={{ mx: 1, color: "#6C5AC9" }} />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "#6C5AC9", fontWeight: "bold" }}
              >
                NASA Explorer
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block', }, }}>
                {navItems.map((item, key) => (
                  <Button key={key} component={Link} href={item?.path} sx={{
                    color: '#6C5AC9', fontWeight: 'bold', '&:hover': {
                      backgroundColor: '#ffffff',
                      boxShadow: 'none',
                      color: '#4535a5'
                    },
                  }}>
                    {item?.component}
                  </Button>
                ))}
              </Box>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="toggle theme"
                onClick={handleThemeChange}
                sx={{ ml: 'auto' }}
              >
                {!modee ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, 
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
