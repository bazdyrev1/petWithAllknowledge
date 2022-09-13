import React, { useState } from "react";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ErrorsMessage, InputsPassWrapper } from "./style";

interface IStateVisible {
    password: boolean,
}

const InputPassword = ({ form: { errors, touched, values, setFieldValue, handleBlur, setFieldTouched }, field: { name } }) => {
    
    const item= name;
    const [visible, setVisible] = useState<IStateVisible>({
        password: false,
    });

    const handleClickShowPassword = () => {
        setVisible({
            ...visible,
            password: !visible.password
        });
    };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <InputsPassWrapper>
            <FormControl>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    error={Boolean(errors[item]) && touched[item]}
                    id="outlined-adornment-password"
                    name={item}
                    type={visible.password ? 'text' : 'password'}
                    value={values[item]}
                    onBlur={handleBlur}
                    onChange={(e: any) => setFieldValue(item, e.target.value)}
                    onClick={()=> setFieldTouched(item, true)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {visible.password ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label={name}
                />
                {errors[item] && touched[item] && (
                    <ErrorsMessage>{errors[item]}</ErrorsMessage>
                )}

            </FormControl>
</InputsPassWrapper>

    )
}

export default InputPassword;