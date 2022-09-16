import React, { FC, useState } from "react";
import { ImageListItem, Modal } from "@mui/material";
import { IMaterialDialogIcon } from "./types";
import { CustomBox, Wrapper } from "./style";

const MaterialDialogIcon: FC<IMaterialDialogIcon> = ({ item }): JSX.Element => {
  const [open, setOpen] = useState({ opened: false, img: "" });

  const handleOpen = (src: string) => setOpen({ opened: true, img: src });
  const handleClose = () => setOpen({ opened: false, img: "" });

  return (
    <Wrapper>
      <ImageListItem>
        <img
          src={item}
          srcSet={item}
          alt='Additional pictures'
          loading="lazy"
          onClick={() => handleOpen(item)}
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