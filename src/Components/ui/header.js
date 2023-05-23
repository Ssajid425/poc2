import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Typography from '@mui/material/Typography';
import logo from "../../Assets/logo1.svg";
import { styled } from '@mui/material/styles';

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  background: '#FFFFFF',
  color: theme.palette.text.primary,
}));

const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '40px',
}));

const IconButtonsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const Text = styled(Typography)(({ theme }) => ({
marginRight: theme.spacing(1),
fontFamily: 'Noto Sans',
fontStyle: "normal",
fontWeight: "400",
fontSize: "20px",

/* identical to box height, or 167% */

letterSpacing: "0.02em",
color: "#5B6A88",
}));

export default function Header(props) {
  return (
    <HeaderAppBar position="static">
      <HeaderToolbar>
        <div>
          <LogoImage src={logo} alt="company logo" />
        </div>
        <IconButtonsContainer>
          <StyledIconButton size="large" edge="start" color="inherit" aria-label="menu">
            <Text variant="body1">Live Chat</Text>
            <MessageOutlinedIcon />
          </StyledIconButton>          
          <StyledIconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </StyledIconButton>
        </IconButtonsContainer>
      </HeaderToolbar>
    </HeaderAppBar>
  );
}

