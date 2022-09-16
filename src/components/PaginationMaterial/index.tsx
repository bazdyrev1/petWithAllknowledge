import React, { FC } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IPaginationMaterial } from './types';

const PaginationMaterial: FC<IPaginationMaterial> = ({ ...props }): JSX.Element => {
  
  return (
    <Stack spacing={1}>
      <Pagination {...props} />
    </Stack>
  );
}

export default PaginationMaterial
