import * as React from 'react';
import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
import { menuTheme } from '../styles/menuStyles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const onClickMenuProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMobileMenu = () => {
    setMobileMoreAnchorEl(null);
  };

  const onCloseMenuClose = () => {
    setAnchorEl(null);
    onCloseMobileMenu();
    // onProfileCard()
  };

  // const onProfileCard = () => {
  //   profileCard();
  // }

  const onClickMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMenuOpen}
      onClose={onCloseMenuClose}
    >
      <MenuItem onClick={onCloseMenuClose}>Profile</MenuItem>
      <MenuItem onClick={onCloseMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={onCloseMobileMenu}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={onClickMenuProfile}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Stack direction="row" spacing={2} className="profileImage">
            <Avatar/>
          </Stack>
          {/* <AccountCircle /> */}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
    <ThemeProvider theme={menuTheme}>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className='z-index'>
            <Toolbar>
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open"
              sx={{ mr: 2}}
              >
                <MenuIcon />
              </IconButton>
              <Typography
              variant="h6"
              noWrap
              component={"div"}
              sx={{display: {xs: 'none', sm: 'block' }}}
              >
                Mimos da Ana
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase 
                placeholder="Procurar..."
                inputProps={{ 'aria-label' : 'search'}}/>
              </Search>
              <Box sx={{ flexGrow: 1}}/>
              <Box sx={{ display: {xs: 'none', md: 'flex'}}}>
                {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color='error'>
                    <MailIcon/>
                  </Badge>
                </IconButton> */}
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton
                size="large"
                edge="end"
                arial-label="acconut of current user"
                aria-controls={menuId}
                aria-haspopup={true}
                onClick={onClickMenuProfile}
                color="inherit"
                >
                  <Stack direction="row" spacing={2} className="profileImage">
                    <Avatar/>
                  </Stack>
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none"}}}>
                <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup={true}
                onClick={onClickMobileMenu}
                color="inherit"
                >
                  <MoreIcon/>
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
    </ThemeProvider>
    </>
  )
}