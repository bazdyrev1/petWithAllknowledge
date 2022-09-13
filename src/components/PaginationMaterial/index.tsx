import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationMaterial = ({ ...props }) => {
  return (
    <Stack spacing={1}>
      <Pagination {...props} />
    </Stack>
  );
}

export default PaginationMaterial
