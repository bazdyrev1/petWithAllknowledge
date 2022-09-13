import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authUser } from "../../store/reducers/signInReducer";
import { getAllUsers } from "../../store/reducers/usersReducer";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import { Button } from "@mui/material";
import { ButtonBlock, NameUser, UserBlock } from "./style";

const AuthorizationZoneHeader = ({ auth: { isAdmin, isAuth, login } }: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const history = useNavigate();
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const listUsers = useSelector(getAllUsers);
    const dispatch = useDispatch();
    const authUserData = listUsers.find(user => user.mail === login);
    const { pathname } = useLocation();
    // console.log(pathname)
    if (isAuth) {
        return (
            <UserBlock>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <BackgroundLetterAvatars name={isAdmin ? 'Super Admin' : authUserData.authorName} aria-controls="menu-appbar" />

                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center"
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => {
                        history("/post-form/create")
                    }}>New Post</MenuItem>
                    <MenuItem onClick={() => {
                        dispatch(authUser({ isAdmin: false, isAuth: false, login: '' }))
                        history('/')
                    }} >Log out</MenuItem>

                </Menu>
                <NameUser>{isAdmin ? "Surep Admin" : authUserData.authorName}</NameUser>
            </UserBlock>
        )
    } else {
        return (
            <ButtonBlock>
                {(pathname === '/signin' ?
                    <></>
                    :
                    <Button
                        variant="outlined"
                        children="Log in"
                        color='secondary'
                        size='small'
                        // elementType={{ color: 'blue' }}
                        onClick={() => {
                            history('/signin')
                        }}
                    />
                )}
                {(pathname === '/registration-form' ?
                    <></>
                    :
                    <Button
                    variant="contained"
                    children="Sing up"
                    color='secondary'
                    size='small'
                    onClick={() => {
                        history('/registration-form')
                    }}
                />
                )}
                
            </ButtonBlock>
        )

    }
}
export default AuthorizationZoneHeader;