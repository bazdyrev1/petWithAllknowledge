import React, { FC } from 'react';

import { RgbButton, Wrapper } from './style';

const CustomButtonComponent: FC<any> = ({ value, setValue, name }): JSX.Element => {
  return (
    <Wrapper>
      <RgbButton
        type     = 'button'
        onClick  = {() => setValue(`${name}`, 'One')}
        isActive = {value === 'One'}
      >
        One
      </RgbButton>
      <RgbButton
        type     = 'button'
        onClick  = {() => setValue(`${name}`, 'Two')}
        isActive = {value === 'Two'}
      >
        Two
      </RgbButton>
      <RgbButton
        type     = 'button'
        onClick  = {() => setValue(`${name}`, 'Three')}
        isActive = {value === 'Three'}
      >
        Three
      </RgbButton>
    </Wrapper>
  );
};

export default CustomButtonComponent;