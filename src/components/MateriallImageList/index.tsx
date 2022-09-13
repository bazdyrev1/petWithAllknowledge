import React from "react";
import ImageList from "@mui/material/ImageList";
import MaterialDialogIcon from "../MaterialDialogIcon";

const MaterialmageList = ({listImage, ...props}) => {
    const arrayImages = listImage;
return(
    <ImageList {... props}>
    {arrayImages.map((item) => {
        return(
            <MaterialDialogIcon item={item.dataURL} key={item} />
     
    )})}
  </ImageList>
);
}

export default MaterialmageList;