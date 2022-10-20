import React, { FC } from 'react';

import { RgbButton, Wrapper } from './style';

const CustomButtonComponent: FC<any> = ({ value, setValue }): JSX.Element => {
  return (
    <Wrapper>
      <RgbButton
        type     = 'button'
        onClick  = {() => setValue('switcher', 'One')}
        isActive = {value === 'One'}
      >
        One
      </RgbButton>
      <RgbButton
        type     = 'button'
        onClick  = {() => setValue('switcher', 'Two')}
        isActive = {value === 'Two'}
      >
        Two
      </RgbButton>
      <RgbButton
        type     = 'button'
        onClick  = {() => setValue('switcher', 'Three')}
        isActive = {value === 'Three'}
      >
        Three
      </RgbButton>
    </Wrapper>
  );
};

export default CustomButtonComponent;