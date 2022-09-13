import React, { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home  from "../pages/Home";
import  PostForm from "../pages/PostForm";
import RegistationForm  from "../pages/RegistrationForm";
import  PostPage  from "../pages/PostPage";
import SignIn from "../pages/SignIn";
import { Header } from "../layout/Header";
import { useSelector } from "react-redux";
import { isAuth } from "../../store/reducers/signInReducer";
 


export const PublicRoutes: FC<any> = () => {
    const auth = useSelector(isAuth);
    // console.log(auth)
    return(
        <>
        <BrowserRouter>
        <Header />
        <Routes >
            <Route path="/" element={<Home />} />
            {auth.isAuth ? 
                <Route path="/post-form/:action/" element={<PostForm />}>
                    <Route path=":id" element={<PostForm />} />
                </Route>
                 :
                 <> 
                <Route path="/registration-form" element={<RegistationForm />} />
                <Route path="/signin" element={<SignIn />} />
                </>
            }
            <Route path="/post/:type/:id" element={<PostPage />} />
            <Route path='*' element={<Home />} />
        </Routes> 
        </BrowserRouter>
        </>
    )
    
}

export default PublicRoutes;