import React, { FC } from 'react';

const CustomButtonComponent:FC<any> = ({ name, value, onChange, setValue } ): JSX.Element => {
    console.log(value)
    return (
        <div>
            <button onClick={() => setValue('switcher', 'One')}>
                One
            </button>
            <button onClick={() => setValue('switcher', 'Two')}>
                Two
            </button>
            <button onClick={() => setValue('switcher', 'Three')}>
                Three
            </button>
        </div>
    )
}

export default CustomButtonComponent;