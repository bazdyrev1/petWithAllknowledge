import React, { FC } from "react";
import ImageList from "@mui/material/ImageList";
import MaterialDialogIcon from "../MaterialDialogIcon";
import { IMaterialImageList } from "./types";

const MaterialImageList: FC<IMaterialImageList> = ({ listImage, cols, rowHeight }): JSX.Element => {

  return (
    <ImageList
      cols={cols}
      rowHeight={rowHeight}
    >
      {listImage.map((item, index) => {
        
        return (
          <MaterialDialogIcon item={item.dataURL} key={index} />
        )
      })}
    </ImageList>
  );
}

export default MaterialImageList;