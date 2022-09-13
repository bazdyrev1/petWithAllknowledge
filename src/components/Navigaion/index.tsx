import React from "react";
import { RouterLink, Wrapper } from "./style";

const PATHS = {
    HOME: "/",
    REGISTRATION_FORM: "/registration-form",
    LOGIN_PAGE: "/login-page",
    POST_FORM: "/post-form",
    POST: "/post",
}

export const Navigation = () => {
        return(
            <Wrapper>
                <RouterLink to={PATHS.HOME} >1</RouterLink>
                <RouterLink to={PATHS.REGISTRATION_FORM}>2</RouterLink>
                <RouterLink to={PATHS.LOGIN_PAGE}>3</RouterLink>
                <RouterLink to={PATHS.POST_FORM}>4</RouterLink>
                <RouterLink to={PATHS.POST}>5</RouterLink>            
            </Wrapper>
        )
    }