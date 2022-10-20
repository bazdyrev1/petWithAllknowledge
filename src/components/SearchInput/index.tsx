import React                                  from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { Button }      from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import { validateSchema } from "./schema";
import { Inputs }         from "./types";

import { Wrapper, TextFieldCustom, ErrorMessage } from "./style";

const SearchInput = ({ searchParameter }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    mode    : "onBlur",
    resolver: yupResolver(validateSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    searchParameter(data.nickNameSearchPerson);
    reset();
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name         = "nickNameSearchPerson"
          control      = {control}
          defaultValue = ""
          render       ={({ field }) => (
            <TextFieldCustom
              {...field}
              variant    = "outlined"
              label      = "Full name"
              helperText = {
                <ErrorMessage>
                  {errors.nickNameSearchPerson?.message}
                </ErrorMessage>
              }
            />
          )}
        />
        <Button 
          children = {'Search'}
          variant  = "outlined"
          color    = "secondary"
          type     = "submit"
        />
      </form>
    </Wrapper>
  );
};

export default SearchInput;
