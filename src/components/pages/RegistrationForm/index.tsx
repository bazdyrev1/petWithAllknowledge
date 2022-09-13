import { Form, Formik, Field } from "formik";
import React, { FC } from "react";
import { ButtonsWrapper, ErrorsMessage, FormWrapper, MaterialButtonCustom, TextFieldCustom, Title, Wrapper } from "./style";
import { validateSchema } from './schema'
import InputPassword from "../../InputPassword";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/reducers/usersReducer";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface IRegistrationForm {
    nickName: string,
    authorName: string,
    mail: string,
    password: string,
    examinationPass: string,
}

const RegistationForm: FC<{}> = () => {
    const initialValues: IRegistrationForm = {
        nickName: '',
        authorName: '',
        mail: '',
        password: '',
        examinationPass: '',
    }
    const dispatch = useDispatch();
    const history = useNavigate();
    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                onSubmit={() => { }}
                validationSchema={validateSchema}
                validateOnMount
            >
                {({ values, errors, touched, dirty, setFieldValue, setFieldTouched, handleChange, handleBlur }) => {
                    
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
                                helperText={errors?.authorName && touched?.authorName && (
                                    <ErrorsMessage>{errors?.authorName}</ErrorsMessage>
                                )}
                                onClick={() => setFieldTouched("authorName", true)}
                                onChange={(e: any) => setFieldValue("authorName", e.target.value)}
                            />
                            <Field
                                id="nickName"
                                name="nickName"
                                onBlur={handleBlur}
                                component={TextFieldCustom}
                                variant="outlined"
                                label="Nick name"
                                helperText={errors?.nickName && touched?.nickName && (
                                    <ErrorsMessage>{errors?.nickName}</ErrorsMessage>
                                )}
                                onClick={() => setFieldTouched("nickName", true)}
                                onChange={(e: any) => setFieldValue("nickName", e.target.value)}
                            />
                            <Field
                                id="mail"
                                name="mail"
                                onBlur={handleBlur}
                                component={TextFieldCustom}
                                variant="outlined"
                                label="Email"
                                helperText={errors?.mail && touched?.mail && (
                                    <ErrorsMessage>{errors?.mail}</ErrorsMessage>
                                )}
                                onClick={() => setFieldTouched("mail", true)}
                                onChange={(e: any) => setFieldValue("mail", e.target.value)}
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
                                    children={<p>Return home</p>}
                                    startIcon={<ArrowBackIosIcon />}
                                    onClick={() =>
                                        history('/')
                                    }
                                />
                                <MaterialButtonCustom
                                    variant="outlined"
                                    color='secondary'
                                    children={<p>Register</p>}
                                    endIcon={<ArrowForwardIosIcon />}
                                    onClick={() => {
                                        dispatch(addUser(values))
                                        history('/')
                                    }}
                                    disabled={Boolean(Object.keys(errors).length)}
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

export default RegistationForm;