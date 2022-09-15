import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field } from "formik";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { validateSchema } from './schema'
import { isEmpty } from "lodash";
import InputPassword from "../../components/InputPassword";
import { addUser } from "../../store/reducers/usersReducer";
import { IRegistrationForm } from "./types";
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

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={() => { }}
        validationSchema={validateSchema}
        validateOnMount
      >
      {({ values, errors, touched, setFieldValue, setFieldTouched, handleChange, handleBlur }) => {

          return (
            <FormWrapper>
              <Form>
                  <Title>Registration new person</Title>

                  <Field
                    id="authorName"
                    name="authorName"
                    onBlur={handleBlur}
                    component={TextFieldCustom}
                    variant="outlined"
                    label="Full name"
                    helperText={(errors?.authorName && touched?.authorName) &&
                        <ErrorsMessage>{errors?.authorName}</ErrorsMessage>
                    }
                    onClick={() => setFieldTouched("authorName", true)}
                    onChange={(e:  React.ChangeEvent<HTMLInputElement>) => setFieldValue("authorName", e.target.value)}
                  />

                  <Field
                    id="nickName"
                    name="nickName"
                    onBlur={handleBlur}
                    component={TextFieldCustom}
                    variant="outlined"
                    label="Nick name"
                    helperText={(errors?.nickName && touched?.nickName) &&
                        <ErrorsMessage>{errors?.nickName}</ErrorsMessage>
                    }
                    onClick={() => setFieldTouched("nickName", true)}
                    onChange={(e:  React.ChangeEvent<HTMLInputElement>) => setFieldValue("nickName", e.target.value)}
                  />

                  <Field
                    id="mail"
                    name="mail"
                    onBlur={handleBlur}
                    component={TextFieldCustom}
                    variant="outlined"
                    label="Email"
                    helperText={(errors?.mail && touched?.mail) &&
                        <ErrorsMessage>{errors?.mail}</ErrorsMessage>
                    }
                    onClick={() => setFieldTouched("mail", true)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue("mail", e.target.value)}
                  />

                  <Field
                    id='password'
                    name='password'
                    component={InputPassword}
                  />

                  <Field
                    id='examinationPass'
                    name='examinationPass'
                    component={InputPassword}
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
                      onClick={() => {
                          dispatch(addUser(values))
                          navigate('/')
                      }}
                      disabled={!isEmpty(errors)}
                    />
                  </ButtonsWrapper>
              </Form>
            </FormWrapper>
          )
        }}
      </Formik>
    </Wrapper>
  )
}

export default RegistrationForm;