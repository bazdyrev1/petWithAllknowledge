import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../../store/reducers/singInReducer";
import AuthorizationZoneHeader from "../../AuthorizationZoneHeader";
import { BoldText, LogoBox, NameBlog, ReactLogoIcon, Wrapper } from "./style";


export const Header: FC = (): JSX.Element => {
    const auth = useSelector(isAuth);
    const navigate = useNavigate();
    return (
        <Wrapper>
            <LogoBox
                onClick={() => {
                    navigate('/')
                }}
            >
                <ReactLogoIcon />
                <NameBlog>
                    Social<BoldText>Tech</BoldText>
                </NameBlog>
            </LogoBox>
            <AuthorizationZoneHeader auth={auth} />
        </Wrapper>

    )
}