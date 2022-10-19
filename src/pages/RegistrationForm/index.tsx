import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateSchema } from './schema'
import { addUser } from "../../store/reducers/usersReducer";
import { Inputs, IRegistrationForm } from "./types";
import { ButtonsWrapper, ErrorsMessage, FormWrapper, MaterialButtonCustom, TextFieldCustom, Title, Wrapper } from "./style";

const RegistrationForm: FC = (): JSX.Element => {

  const initialValues: IRegistrationForm = {
    nickName: '',
    authorName: '',
    mail: '',
    password: '',
    examinationPass: '',
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
    getValues
  } = useForm<Inputs>({
    mode: "onTouched",
    defaultValues: initialValues,
    resolver: yupResolver(validateSchema),
  });

  

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addUser(data))
    console.log('submit', data)
    reset();
  }
  console.log(getValues())
  return (
    <Wrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>

                    <Title>Registration new person</Title>

                    <Controller
                      name="authorName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextFieldCustom
                          {...field}
                          variant="outlined"
                          label="Full name"
                          helperText={
                            <ErrorsMessage>
                              {errors?.authorName?.message}
                            </ErrorsMessage>
                          }
                        />
                      )}
                    />

                    <Controller
                      name="nickName"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextFieldCustom
                          {...field}
                          variant="outlined"
                          label="Nick name"
                          helperText={
                            <ErrorsMessage>
                              {errors?.nickName?.message}
                            </ErrorsMessage>
                          }
                        />
                      )}
                    />

                    <Controller
                      name="mail"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextFieldCustom
                          {...field}
                          variant="outlined"
                          label="Email"
                          helperText={
                            <ErrorsMessage>
                              {errors?.mail?.message}
                            </ErrorsMessage>
                          }
                        />
                      )}
                    />

                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
                        <TextFieldCustom
                          label="Password"
                          variant="outlined"
                          value={value}
                          onClick={() => onBlur()}
                          onChange={onChange}
                          error={!!error}
                          helperText={<ErrorsMessage>
                            {errors?.password?.message}
                          </ErrorsMessage>}
                          type="password"
                        />
                      )}
                      />
                      <Controller
                        name="examinationPass"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
                          <TextFieldCustom
                            label="Password"
                            variant="outlined"
                            value={value}
                            onClick={() => onBlur()}
                            onChange={onChange}
                            error={!!error}
                            helperText={<ErrorsMessage>
                              {errors?.examinationPass?.message}
                            </ErrorsMessage>}
                            type="password"
                          />
                        )}
                      />

                    <ButtonsWrapper>
                      <MaterialButtonCustom
                        variant="outlined"
                        color='secondary'
                        children={<p>Home</p>}
                        startIcon={<ArrowBackIosIcon />}
                        onClick={() =>
                            navigate('/')
                        }
                      />

                      <MaterialButtonCustom
                        variant="outlined"
                        color='secondary'
                        children={<p>Register</p>}
                        endIcon={<ArrowForwardIosIcon />}
                        type="submit"
                        disabled={!isValid}
                      />
                    </ButtonsWrapper>
        </form>
      </FormWrapper>
    </Wrapper>
  )
}

export default RegistrationForm;