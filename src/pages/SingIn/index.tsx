import React, { useState, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authUser } from '../../store/reducers/singInReducer'
import { getAllUsers } from '../../store/reducers/usersReducer'
import { IUsers } from '../../store/reducers/types'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ErrorIcon from '@mui/icons-material/Error';
import { ButtonMaterialCustom, ErrorText, FormWrapper, Navigate, NavigateForward, TextFieldCustom, Title, Wrapper } from './style'


const SingIn: FC = (): JSX.Element => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userList: IUsers[] = useSelector(getAllUsers);

    const handleSubmit = (): void => {
        if (login === process.env.REACT_APP_ADMIN_LOGIN && password === process.env.REACT_APP_ADMIN_PASSWORD) {
            dispatch(authUser({ isAdmin: true, isAuth: true, login: 'admin' }));
            navigate('/');
            return
        }

        if (!!userList.length) {
            const finedUser = userList.find((item) => item.mail === login)

            if (finedUser && finedUser.mail === login && finedUser.password === password) {
                dispatch(authUser({ isAdmin: false, isAuth: true, login }));
                navigate('/');
            }
            setError(true);
            return
        }
    }
    return (
        <Wrapper>
            <FormWrapper>
                <Title>
                    Authorization
                </Title>

                <Navigate>
                    <ButtonMaterialCustom
                        variant="outlined"
                        color='secondary'
                        onClick={() => navigate('/')}
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    type="password"
                    value={password}
                    label='Password'
                />
                {(error &&
                    <ErrorText><ErrorIcon />
                        Please, check your mail and password
                    </ErrorText>)}

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

export default SingIn;