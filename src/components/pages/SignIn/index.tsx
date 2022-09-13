import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../../../store/reducers/signInReducer'
import { getAllUsers } from '../../../store/reducers/usersReducer'


import { ButtonMaterialCustom, ErrorText, FormWrapper, Navigate, NavigateForward, TextFieldCustom, Title, Wrapper } from './style'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ErrorIcon from '@mui/icons-material/Error';

const SignIn: any = (): JSX.Element => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false);
    const history = useNavigate();

    const dispatch = useDispatch()
    const userList: any = useSelector(getAllUsers)

    const handleSubmit = () => {

        if (login === process.env.REACT_APP_ADMIN_LOGIN && password === process.env.REACT_APP_ADMIN_PASSWORD) {
            dispatch(authUser({ isAdmin: true, isAuth: true, login: 'admin' }))
            history('/')
            return
        }

        if (!!userList.length) {

            const finedUser = userList.find((item) => item.mail === login)
            // console.log(finedUser)
            if (finedUser && finedUser.mail === login && finedUser.password === password) {
                dispatch(authUser({ isAdmin: false, isAuth: true, login }))
                history('/')
            } else {
                setError(true)
                console.log('Not found')}
            return
        }

        console.log('Some error')

    }
    return (
        <Wrapper>
            <FormWrapper>
                <Title>
                   Autorization 
                </Title>
                <Navigate>
                <ButtonMaterialCustom 
                    variant="outlined"
                    color='secondary'
                    onClick={() => history('/')}
                    children={<p>Return home</p>}
                    startIcon={<ArrowBackIosIcon />}
                    />  
                </Navigate>
                <TextFieldCustom
                    error={error}
                    onChange={(e) => setLogin(e.target.value)} 
                    value={login} 
                    label='Login' 
                    variant='outlined'
                    
                 />
                <TextFieldCustom
                    error={error}
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    value={password} 
                    label='Password' 
                 />
                 {(error ? <ErrorText><ErrorIcon />Please, check your mail and password</ErrorText> : <></>)}      
                <NavigateForward>
                <ButtonMaterialCustom 
                    variant="outlined"
                    color='secondary'
                    onClick={handleSubmit}
                    children={<p>Sing in</p>}
                    endIcon={<ArrowForwardIosIcon />}
                    />
                </NavigateForward>
                    
              
            </FormWrapper>
            
        </Wrapper>
    )
}

export default SignIn