import React, { FC, useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { IInputPassword, IInputPassword2, IStateVisible } from "./types";
import { ErrorsMessage, InputsPassWrapper } from "./style";

const InputPassword: FC<IInputPassword2> = ({
  onChange,
  value,
  onBlur,
  name,
  error,
  
}): JSX.Element => {
  const [visible, setVisible] = useState<IStateVisible>({
    password: false,
  });

  const handleClickShowPassword = () => {
    setVisible({
      ...visible,
      password: !visible.password,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <InputsPassWrapper>
      <FormControl>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

        <OutlinedInput
          error={Boolean(error)}
          id="outlined-adornment-password"
          name={name}
          type={visible.password ? "text" : "password"}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
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
        {error && <ErrorsMessage>{error.message}</ErrorsMessage>}
      </FormControl>
    </InputsPassWrapper>
  );
};

export default InputPassword;
