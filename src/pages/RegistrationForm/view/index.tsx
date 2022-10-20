import React, { FC }                          from "react";
import { useDispatch }                        from "react-redux";
import { useNavigate }                        from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon    from "@mui/icons-material/ArrowBackIos";
import { yupResolver }     from "@hookform/resolvers/yup";

import { addUser }           from "../../../store/reducers/usersReducer";
import InputPassword         from "../../../components/InputPassword";
import CustomButtonComponent from "../components/CustomButtomComponent/CustomButtonComponent";

import { validateSchema }            from "../schema";
import { Inputs, IRegistrationForm } from "../types";
import {
  ButtonsWrapper,
  ErrorsMessage,
  FormWrapper,
  MaterialButtonCustom,
  TextFieldCustom,
  Title,
  Wrapper,
} from "../style";

const RegistrationForm: FC = (): JSX.Element => {
  const initialValues: IRegistrationForm = {
    nickName       : "",
    authorName     : "",
    mail           : "",
    password       : "",
    examinationPass: "",
    switcher       : ''
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
    setValue
  } = useForm<Inputs>({
    mode         : "onTouched",
    defaultValues: initialValues,
    resolver     : yupResolver(validateSchema),
    
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addUser(data));
    reset();
    navigate("/");
  };

  return (
    <Wrapper>
      <FormWrapper>
        <form onSubmit = {handleSubmit(onSubmit)}>
          <Title>Registration new person</Title>
          <Controller
            name         = "authorName"
            control      = {control}
            defaultValue = ""
            render       = {({ field }) => (
              <TextFieldCustom
                {...field}
                variant    = "outlined"
                label      = "Full name"
                helperText = {
                  <ErrorsMessage>{errors?.authorName?.message}</ErrorsMessage>
                }
              />
            )}
          />
          <Controller
            name         = "nickName"
            control      = {control}
            defaultValue = ""
            render       = {({ field }) => (
              <TextFieldCustom
                {...field}
                variant    = "outlined"
                label      = "Nick name"
                helperText = {
                  <ErrorsMessage>{errors?.nickName?.message}</ErrorsMessage>
                }
              />
            )}
          />
          <Controller
            name         = "mail"
            control      = {control}
            defaultValue = ""
            render       = {({ field }) => (
              <TextFieldCustom
                {...field}
                variant    = "outlined"
                label      = "Email"
                helperText = {
                  <ErrorsMessage>{errors?.mail?.message}</ErrorsMessage>
                }
              />
            )}
          />
          <Controller
            name         = "password"
            control      = {control}
            defaultValue = ""
            render       = {({
              field     : { onChange, value, onBlur, name, ref },
              fieldState: { error },
            }) => (
              <InputPassword
                onChange = {onChange}
                value    = {value}
                onBlur   = {onBlur}
                name     = {name}
                ref      = {ref}
                error    = {error}
              />
            )}
          />
          <Controller
            name         = "examinationPass"
            control      = {control}
            defaultValue = ""
            render       = {({
              field     : { onChange, value, onBlur, name, ref },
              fieldState: { error },
            }) => (
              <InputPassword
                onChange = {onChange}
                value    = {value}
                onBlur   = {onBlur}
                name     = {name}
                ref      = {ref}
                error    = {error}
              />
            )}
          />

          <ButtonsWrapper>
            <MaterialButtonCustom
              variant   = "outlined"
              color     = "secondary"
              children  = {<p>Home</p>}
              startIcon = {<ArrowBackIosIcon />}
              onClick   = {() => navigate("/")}
            />
            <MaterialButtonCustom
              variant  = "outlined"
              color    = "secondary"
              children = {<p>Register</p>}
              endIcon  = {<ArrowForwardIosIcon />}
              type     = "submit"
              disabled = {!isValid}
            />
          </ButtonsWrapper>
          <Controller
            name         = "switcher"
            control      = {control}
            defaultValue = ""
            render       = {({
              field     : { value, name },
              fieldState: { error },
            }) => (
              <CustomButtonComponent
                value    = {value}
                name     = {name}
                setValue = {setValue}
              />
            )}
          />
        </form>
      </FormWrapper>
    </Wrapper>
  );
};

export default RegistrationForm;
