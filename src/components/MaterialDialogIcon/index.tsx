import React from "react";
import { ImageListItem, Modal } from "@mui/material";
import { CustomBox, Wrapper } from "./style";



const MaterialDialogIcon = ({ item }) => {

  const [open, setOpen] = React.useState({ opened: false, img: "" });
  const handleOpen = (src) => setOpen({ opened: true, img: src });
  const handleClose = () => setOpen({ opened: false, img: "" });
  return (
    <Wrapper>
      <ImageListItem>
        <img
          src={item}
          srcSet={item}
          alt='Additional pictures'
          loading="lazy"
          onClick={(e) => handleOpen(item)}
        />
      </ImageListItem>

      <Modal
        open={open.opened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <CustomBox>
          <img src={open.img} alt="asd" />
       </CustomBox>


      </Modal>
    </Wrapper>
  );
}
export default MaterialDialogIcon;