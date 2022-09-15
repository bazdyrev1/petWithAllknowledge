import React, { FC } from 'react';
import { IPaginationMaterial } from './types';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationMaterial: FC<IPaginationMaterial> = ({ ...props }): JSX.Element => {
  return (
    <Stack spacing={1}>
      <Pagination {...props} />
    </Stack>
  );
}

export default PaginationMaterial
