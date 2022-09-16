import React, { FC, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { IInputPassword, IStateVisible } from "./types";
import { ErrorsMessage, InputsPassWrapper } from "./style";

const InputPassword: FC<IInputPassword>= ({ form: { errors, touched, values, setFieldValue, handleBlur, setFieldTouched }, field: { name } }): JSX.Element => {
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
          error={Boolean(errors[name]) && touched[name]}
          id="outlined-adornment-password"
          name={name}
          type={visible.password ? 'text' : 'password'}
          value={values[name]}
          onBlur={handleBlur}
          onChange={(e: any) => setFieldValue(name, e.target.value)}
          onClick={()=> setFieldTouched(name, true)}
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
        {errors[name] && touched[name] && (
          <ErrorsMessage>{errors[name]}</ErrorsMessage>
        )}
      </FormControl>
    </InputsPassWrapper>
  )
}

export default InputPassword;