import React, { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IBackgroundLetterAvatars } from './types';
import { stringAvatar } from './suggestions'

const BackgroundLetterAvatars: FC<IBackgroundLetterAvatars> = ({ name }): JSX.Element => {
  
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar(name)} />
    </Stack>
  );
}

export default BackgroundLetterAvatars;