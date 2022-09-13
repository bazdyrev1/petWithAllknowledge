import React, { useEffect } from 'react';
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Button } from "@mui/material";
import { ControlButtons, Image, ImageItem, ImageItemButtonsWrapper, UploadImageBlock, Wrapper, Error } from './style';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ImageDonwload = ({ maxFiles, imageDefault, getFiles, error, textError }) => {
  const [images, setImages] = React.useState([]);
  useEffect(() => {
    setImages(imageDefault as never[]);
  }, []);
  useEffect(() => { getFiles(images) }, [images])
  const maxNumber = maxFiles;
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);

  };
  return (
    <Wrapper>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <UploadImageBlock>
            <ControlButtons>
              <Button
                variant="outlined"
                color={isDragging ? 'success' : 'secondary'}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </Button>
              &nbsp;
              <Button
                variant="outlined"
                color='secondary'
                onClick={onImageRemoveAll}
                startIcon={<DeleteIcon />}
              >
                Remove all images
              </Button>
            </ControlButtons>
            {imageList.map((image, index) => (
              <ImageItem key={index}>
                <Image src={image.dataURL} alt="" />
                <ImageItemButtonsWrapper>
                  <Button
                    onClick={() => onImageUpdate(index)}
                    variant="outlined"
                    color='secondary'
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => onImageRemove(index)}
                    variant="outlined"
                    color='secondary'
                    startIcon={<DeleteIcon />}
                  >
                    Remove
                  </Button>
                </ImageItemButtonsWrapper>
              </ImageItem>
            ))}
          </UploadImageBlock>
        )}
      </ImageUploading>
      {(error ?
        <Error>
          <ErrorOutlineIcon />
          {textError}
        </Error> : 
        <></>
      )}
    </Wrapper>
  )
}
export default ImageDonwload;