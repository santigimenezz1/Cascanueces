import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import ModalCart from '../../../Common/SectionCart/Modal/Modal';
import CerrarSesion from '../CerrarSesion/CerrarSesion';

export default function UserLogin() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cerrarSesion = ()=>{
    alert("secion cerrada")
    handleClose()
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <div style={{display:"flex", alignItems:"center"}}>
      <h1 style={{fontSize:"15px"}}>Santiago gimenez</h1>
      <ArrowDropDownIcon color='secondary' />
      </div>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem style={{display:"flex", gap:"5px", justifyContent:"center", alignItems:"center"}} onClick={handleClose}>
        <AccountCircleIcon />
       <Link to={"/miCuenta"} style={{textDecoration:"none"}}><h1>Mi cuenta</h1></Link> 
        </MenuItem>
        <MenuItem  style={{display:"flex", gap:"5px", justifyContent:"center", alignItems:"center"}} >
        <ExitToAppIcon  />
       <Link  style={{textDecoration:"none"}}><CerrarSesion titulo={"Cierre de sesion"} subtitulo={"¿Seguro que quieres cerrar la sesión?"} />
       </Link> 
        </MenuItem>
      </Menu>
    </div>
  );
}