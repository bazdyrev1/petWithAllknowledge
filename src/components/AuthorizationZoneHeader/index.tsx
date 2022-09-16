import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { authUser } from "../../store/reducers/singInReducer";
import { getAllUsers } from "../../store/reducers/usersReducer";
import { IAuthorizationZoneHeader } from "./types";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import { ButtonBlock, NameUser, UserBlock } from "./style";

const AuthorizationZoneHeader: FC<IAuthorizationZoneHeader> = ({ auth: { isAdmin, isAuth, login } }): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const listUsers = useSelector(getAllUsers);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const authUserData = listUsers.find(user => user.mail === login);

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
            navigate("/post-form/create")
          }}>
            New Post
          </MenuItem>

          <MenuItem onClick={() => {
            dispatch(authUser({ isAdmin: false, isAuth: false, login: '' }))
            navigate('/')
          }} >
            Log out
          </MenuItem>
        </Menu>
          <NameUser>{isAdmin ? "Super Admin" : authUserData.authorName}</NameUser>
      </UserBlock>
      )
  }

  return (
    <ButtonBlock>
      {((pathname !== '/singIn') &&
        <Button
          variant="outlined"
          children="Log in"
          color='secondary'
          size='small'
          onClick={() => {
              navigate('/singIn')
          }}
        />
      )}
      {((pathname !== '/registration-form') &&
        <Button
          variant="contained"
          children="Sing up"
          color='secondary'
          size='small'
          onClick={() => {
              navigate('/registration-form')
          }}
        />
      )}
    </ButtonBlock>
  )
}

export default AuthorizationZoneHeader;