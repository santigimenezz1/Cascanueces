import * as React from 'react';
import '../Modal/modal.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import BotonFondoFijo from '../../SectionHome/FondoFijo/BotonFondoFijo/BotonFondoFijo';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadiuis:"10px"
};

export default function ModalCart() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
      <BotonFondoFijo  text={"Borrar carrito"} />
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className='container-modal'  >
            <Typography style={{textAlign:"center"}} id="transition-modal-title" variant="h6" component="h2">
              Borrar carrito
            </Typography>
            <Typography style={{fontSize:"15px"}} id="transition-modal-description" sx={{ mt: 2 }}>
              ¿Seguro que quieres eliminar los productos del carrito?
            </Typography>
            <div className='modal__botones'>
            <BotonFondoFijo text={"Aceptar"} />
            <BotonFondoFijo text={"Cancelar"} />
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}