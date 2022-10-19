import React, { FC } from 'react';
import { RgbButton } from './style';

const CustomButtonComponent:FC<any> = ({ value, setValue } ): JSX.Element => {
    console.log(value)
    return (
        <div>
            <RgbButton onClick={() => setValue('switcher', 'One')}>
                One
            </RgbButton>
            <RgbButton onClick={() => setValue('switcher', 'Two')}>
                Two
            </RgbButton>
            <RgbButton onClick={() => setValue('switcher', 'Three')}
            
            >
                Three
            </RgbButton>
        </div>
    )
}

export default CustomButtonComponent;