import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home  from "../../pages/Home";
import  PostForm from "../../pages/PostForm";
import RegistrationForm  from "../../pages/RegistrationForm";
import  PostPage  from "../../pages/PostPage";
import SingIn from "../../pages/SingIn";
import Header from "../Header";
import { isAuth } from "../../store/reducers/singInReducer";
import GitDataPage from "../../pages/GitDataPage";

export const PublicRoutes: FC<any> = () => {
  const auth = useSelector(isAuth);
  
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
            <Route path="/registration-form" element={<RegistrationForm />} />
            <Route path="/singIn" element={<SingIn />} />
          </>
        }
        <Route path="/post/:type/:id" element={<PostPage />} />
        <Route path="/gitData" element={<GitDataPage />} />
        <Route path='*' element={<Home />} />
      </Routes> 
      </BrowserRouter>
    </>
  )
}

export default PublicRoutes;