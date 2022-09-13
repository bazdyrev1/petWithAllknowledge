import React, { FC } from "react";
import { BoldText, LogoBox, LogoImg, NameBlog, Wrapper } from "./style";
import AuthorizationZoneHeader from "../../AuthorizationZoneHeader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {isAuth } from "../../../store/reducers/signInReducer";

export const Header: FC = () => {
    const auth = useSelector(isAuth);
    // console.log(auth)
    const history = useNavigate();
    return (
        <Wrapper>
            <LogoBox
                onClick={() => {
                    history('/')
                }}
            >
                <LogoImg fill="purple" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.25 122.88"><title>neuromorphic-computing</title><path d="M86.28,104.11a4,4,0,0,0-3,0A3.93,3.93,0,0,0,82,105l0,0a4.57,4.57,0,0,0-.54.69,2.82,2.82,0,0,0-.23.42H74.88v-5.49a14.11,14.11,0,0,1-3,1l-.53.09v6.15a1.78,1.78,0,0,0,1.77,1.77h8.14l.21.35a3.87,3.87,0,0,0,.48.59l0,0a3.79,3.79,0,0,0,1.29.86,3.84,3.84,0,0,0,3,0h0a3.89,3.89,0,0,0,1.29-.86,3.94,3.94,0,0,0,.86-1.29,4,4,0,0,0,.3-1.51,4,4,0,0,0-2.45-3.67ZM40.22,86.66A10.24,10.24,0,0,1,37,86.1a13.54,13.54,0,0,1-5.77-4,13.11,13.11,0,0,1-3.14-6.77,12.35,12.35,0,0,1,.2-4.51,14.51,14.51,0,0,1-2.9-3.39A12.1,12.1,0,0,1,23.5,61a11.62,11.62,0,0,1,2.35-6.8,16.47,16.47,0,0,1,4-3.78c0-.53,0-1,0-1.56A14.34,14.34,0,0,1,33,40.26a11.21,11.21,0,0,1,6.93-4.14l.3,0a8.77,8.77,0,0,1,.42-1.52,10.65,10.65,0,0,1,4.63-5.39,10.15,10.15,0,0,1,7.1-1.25,10,10,0,0,1,6.68,5.2,9.64,9.64,0,0,1,13.21-4.26,11,11,0,0,1,4.66,4.48,9.34,9.34,0,0,1,1,2.71,10,10,0,0,1,3.8.54,13.51,13.51,0,0,1,5.88,4.09,13.11,13.11,0,0,1,3.08,7,12.72,12.72,0,0,1-.25,4.14,15,15,0,0,1,3.18,3.77l.07.15A11.84,11.84,0,0,1,95.28,62,11.47,11.47,0,0,1,93,68.5a16.26,16.26,0,0,1-4.12,3.82,14.55,14.55,0,0,1-2.5,9.22,11.48,11.48,0,0,1-7.56,5,10.63,10.63,0,0,1-4.32,6.3,10.83,10.83,0,0,1-9,1.89,9.4,9.4,0,0,1-6.1-5.54,10.16,10.16,0,0,1-7,5.73A10.3,10.3,0,0,1,44,92.86l-.13-.11a10,10,0,0,1-3.69-6.09ZM61.3,37.07V83.48a1.84,1.84,0,0,1,.43.91c.7,4.22,2.56,6.26,4.68,6.84a7.18,7.18,0,0,0,5.91-1.34,6.56,6.56,0,0,0,3-5c0-2.2-1.55-4.67-5.73-6.8a1.83,1.83,0,1,1,1.66-3.26c4.56,2.33,6.81,5.2,7.49,8a8,8,0,0,0,4.6-3.39,11,11,0,0,0,1.78-7.73l0-.13A1.84,1.84,0,0,1,86,69.79a13.36,13.36,0,0,0,4-3.47,7.82,7.82,0,0,0,1.6-4.44,8.17,8.17,0,0,0-1.12-4.3l-.08-.12A11.76,11.76,0,0,0,87.29,54a1.84,1.84,0,0,1-.71-2.11A8.89,8.89,0,0,0,87,48.09a9.5,9.5,0,0,0-2.23-5,9.88,9.88,0,0,0-4.26-3,6.21,6.21,0,0,0-2.66-.34h-.08a10.33,10.33,0,0,1-2.18,4.08,1.82,1.82,0,1,1-2.79-2.35,5.49,5.49,0,0,0,.88-6.39,7.17,7.17,0,0,0-3.08-2.94,6.31,6.31,0,0,0-4.12-.63c-2,.42-4,2.09-5.2,5.56ZM57.63,83.55V39.33h0l0,0h0l-.05-.07h0l0,0h0l0-.07h0l0-.08h0l0,0h0v0h0v0h0v0h0v0h0v-.08h0v-.11c-1.12-4.54-3.34-6.63-5.65-7.11a6.42,6.42,0,0,0-4.51.84,7,7,0,0,0-3,3.48c-.72,1.94-.31,4.31,2.08,6.53A1.83,1.83,0,0,1,43.68,45a10.9,10.9,0,0,1-3.33-5.28,7.56,7.56,0,0,0-4.53,2.82A10.77,10.77,0,0,0,33.46,49a12.65,12.65,0,0,0,.11,2.1,1.82,1.82,0,0,1-.85,1.81,13.67,13.67,0,0,0-3.92,3.46A8,8,0,0,0,27.16,61a8.47,8.47,0,0,0,1.32,4.52,11.41,11.41,0,0,0,2.92,3.14,1.85,1.85,0,0,1,.69,2.09,8.86,8.86,0,0,0-.41,4.09A9.6,9.6,0,0,0,34,79.75a9.87,9.87,0,0,0,4.18,2.88A6.25,6.25,0,0,0,40.4,83c.77-2.89,3.11-5.81,7.74-8.18a1.83,1.83,0,0,1,1.67,3.26c-4.4,2.24-6.06,4.87-6.06,7.19a6.15,6.15,0,0,0,2.43,4.63l.11.07a6.68,6.68,0,0,0,5.34,1.41c2.32-.48,4.54-2.58,5.66-7.13a1.66,1.66,0,0,1,.34-.69ZM40.91,50.46a1.83,1.83,0,0,1,2.56,2.61,10.76,10.76,0,0,0-3.23,7.28,11.8,11.8,0,0,0,2.64,7.86A1.83,1.83,0,1,1,40,70.5a15.4,15.4,0,0,1-3.44-10.29,14.44,14.44,0,0,1,4.32-9.75ZM73.34,52a1.83,1.83,0,0,1,2.15-3q.67.49,1.26,1a14.44,14.44,0,0,1,4.76,9.61,15.3,15.3,0,0,1-2.93,10.25,14.46,14.46,0,0,1-1.06,1.31,1.83,1.83,0,1,1-2.72-2.45,12.93,12.93,0,0,0,.82-1,11.75,11.75,0,0,0,2.24-7.81,10.81,10.81,0,0,0-3.56-7.18,10.43,10.43,0,0,0-1-.77ZM47.81,104.84v-2.91a12,12,0,0,1-2.32-.35c-.42-.11-.82-.23-1.22-.37v1.86H39.05c-.07-.14-.15-.27-.23-.4a4.22,4.22,0,0,0-.53-.67h0a3.94,3.94,0,0,0-1.29-.86,4,4,0,0,0-1.51-.3A3.92,3.92,0,0,0,32.71,102l0,0a4.22,4.22,0,0,0-.86,1.29,4,4,0,0,0-.3,1.52,3.9,3.9,0,0,0,.31,1.52,3.8,3.8,0,0,0,.83,1.25l0,0a3.79,3.79,0,0,0,1.26.85h0a4,4,0,0,0,3,0,4,4,0,0,0,1.26-.83l0,0a4.14,4.14,0,0,0,.52-.64c.07-.11.15-.24.21-.36h7a1.78,1.78,0,0,0,1.77-1.77Zm8.54,13.87V98.55A12.62,12.62,0,0,1,55,99.7,11,11,0,0,1,52.81,101V117H41.26l-.18-.3a4.08,4.08,0,0,0-.46-.54,3.79,3.79,0,0,0-1.29-.86,3.86,3.86,0,0,0-3,0,3.79,3.79,0,0,0-1.29.86,3.94,3.94,0,0,0-.86,1.29,3.84,3.84,0,0,0-.3,1.51,3.89,3.89,0,0,0,.3,1.52,4,4,0,0,0,.86,1.29,3.94,3.94,0,0,0,1.29.86,4,4,0,0,0,1.51.3,3.88,3.88,0,0,0,1.49-.29h0a4,4,0,0,0,1.29-.86,4.41,4.41,0,0,0,.59-.76,3.62,3.62,0,0,0,.25-.48H54.58a1.78,1.78,0,0,0,1.77-1.77ZM66,115.35v-14a10.37,10.37,0,0,1-3.52-1.91l0,0v15.93l-.39.22a4.7,4.7,0,0,0-.65.53,3.94,3.94,0,0,0-.86,1.29,4,4,0,0,0-.3,1.51,3.92,3.92,0,0,0,.29,1.49v0a4,4,0,0,0,5.18,2.15,3.94,3.94,0,0,0,1.29-.86,4,4,0,0,0,1.17-2.81,4.06,4.06,0,0,0-.29-1.48l0,0a3.79,3.79,0,0,0-.86-1.29,3.44,3.44,0,0,0-.62-.51l0,0c-.12-.08-.25-.15-.38-.22ZM18,73.67h3.3a16.15,16.15,0,0,0-.2,1.94c0,.54,0,1.07,0,1.6H19.81v5.22l.4.22a5,5,0,0,1,.67.54h0a4,4,0,0,1,.86,4.32,4.12,4.12,0,0,1-.83,1.26l0,0a4,4,0,0,1-1.29.86,4,4,0,0,1-3,0,4,4,0,0,1-1.26-.84l0,0a4,4,0,0,1-.85-1.26v0a3.89,3.89,0,0,1-.3-1.52,4,4,0,0,1,1.13-2.77l0,0a3.63,3.63,0,0,1,.64-.52c.11-.08.24-.15.36-.22v-7a1.78,1.78,0,0,1,.52-1.25A1.75,1.75,0,0,1,18,73.67ZM4.17,65.13H16.4A15.8,15.8,0,0,0,18,68.62h0l0,0H5.93V80.21l.3.19a3.45,3.45,0,0,1,.54.46,4,4,0,0,1,1.17,2.8,4,4,0,0,1-1.17,2.81,4.11,4.11,0,0,1-1.29.86,4,4,0,0,1-1.51.3,4.08,4.08,0,0,1-1.52-.3,4.22,4.22,0,0,1-1.29-.86A4.16,4.16,0,0,1,.3,85.18,4.08,4.08,0,0,1,0,83.66a4,4,0,0,1,.29-1.49v0a4,4,0,0,1,.86-1.28,3.61,3.61,0,0,1,.76-.59A2.73,2.73,0,0,1,2.4,80V66.89a1.76,1.76,0,0,1,1.77-1.76Zm3.36-9.68h9.4c-.17.36-.31.73-.44,1.09A14.43,14.43,0,0,0,15.9,59H7.53a3.61,3.61,0,0,1-.22.39,3.76,3.76,0,0,1-.53.65,3.79,3.79,0,0,1-1.29.86,3.84,3.84,0,0,1-1.51.3,3.88,3.88,0,0,1-1.49-.29h0A3.89,3.89,0,0,1,1.17,60a3.94,3.94,0,0,1-.86-1.29,4,4,0,0,1,0-3,3.94,3.94,0,0,1,.86-1.29A4,4,0,0,1,4,53.25a3.87,3.87,0,0,1,1.48.29h0A3.92,3.92,0,0,1,7.29,55l0,0c.08.13.15.26.22.39ZM18.77,35.2a4,4,0,0,1,.3,1.51,4,4,0,0,1-.3,1.52,3.82,3.82,0,0,1-.84,1.25l0,0a4.63,4.63,0,0,1-.69.55,4.16,4.16,0,0,1-.42.23V46.6h6.55v.31c0,.24,0,.49,0,.75a.67.67,0,0,1-.27.58,21.78,21.78,0,0,0-2.33,1.9H15a1.78,1.78,0,0,1-1.77-1.76V40.23a2.5,2.5,0,0,1-.35-.21,4.51,4.51,0,0,1-.59-.47l0,0a4,4,0,0,1-.86-1.29,3.86,3.86,0,0,1-.31-1.52,4.16,4.16,0,0,1,.29-1.49l0,0a3.85,3.85,0,0,1,.86-1.28,3.79,3.79,0,0,1,1.29-.86,3.85,3.85,0,0,1,1.51-.31,4,4,0,0,1,2.81,1.17,4.11,4.11,0,0,1,.86,1.29ZM69.6,18v2.74c.37,0,.73,0,1.09.1a12.06,12.06,0,0,1,2.45.62V19.81h5.23a3.11,3.11,0,0,0,.22.4,5,5,0,0,0,.54.67h0a3.94,3.94,0,0,0,1.29.86,4,4,0,0,0,1.51.3,4.08,4.08,0,0,0,1.52-.3,4.12,4.12,0,0,0,1.26-.83l0,0a4,4,0,0,0,.86-4.33,4.15,4.15,0,0,0-.84-1.26l0,0a3.79,3.79,0,0,0-1.26-.85h0a3.8,3.8,0,0,0-1.51-.3,3.89,3.89,0,0,0-1.52.3,4,4,0,0,0-1.26.83l0,0a3.59,3.59,0,0,0-.51.64c-.08.11-.15.24-.22.36h-7A1.78,1.78,0,0,0,69.6,18ZM61.06,4.17v20a12.87,12.87,0,0,1,1.51-1.3,11.16,11.16,0,0,1,2-1.16V5.93H76.15c.06.1.12.2.19.3a4,4,0,0,0,.45.54,3.89,3.89,0,0,0,1.29.86,3.95,3.95,0,0,0,4.32-.86,3.79,3.79,0,0,0,.86-1.29A3.85,3.85,0,0,0,83.57,4a3.9,3.9,0,0,0-.31-1.52,3.89,3.89,0,0,0-.86-1.29A3.94,3.94,0,0,0,81.11.3,4,4,0,0,0,79.6,0a3.92,3.92,0,0,0-1.49.29h0a4.16,4.16,0,0,0-1.29.86,4.41,4.41,0,0,0-.59.76A5.39,5.39,0,0,0,76,2.4H62.83a1.78,1.78,0,0,0-1.77,1.77ZM51.39,7.53V21.19a11,11,0,0,1,3.41,1.66l.11.08a.28.28,0,0,0,0-.09V7.53l.39-.22A4.18,4.18,0,0,0,56,6.78a3.94,3.94,0,0,0,.86-1.29A4,4,0,0,0,57.12,4a3.88,3.88,0,0,0-.29-1.49v0A4,4,0,0,0,51.64.31a3.94,3.94,0,0,0-1.29.86,4,4,0,0,0-.86,1.29A3.85,3.85,0,0,0,49.19,4a3.87,3.87,0,0,0,.29,1.48v0a3.79,3.79,0,0,0,.86,1.29,3.44,3.44,0,0,0,.62.51l0,0a3.61,3.61,0,0,0,.39.22ZM31.13,18.77a4,4,0,0,0,3,0,3.82,3.82,0,0,0,1.25-.84l0,0a4.57,4.57,0,0,0,.54-.69,2.82,2.82,0,0,0,.23-.42h6.32v5.45A12.68,12.68,0,0,1,46.08,21V15a1.78,1.78,0,0,0-1.77-1.77H36.17L36,12.92a3.87,3.87,0,0,0-.48-.59l0,0a3.79,3.79,0,0,0-1.29-.86,3.85,3.85,0,0,0-1.51-.31,4.12,4.12,0,0,0-1.49.29l0,0a4,4,0,0,0-1.29.86A3.94,3.94,0,0,0,29,13.59a4,4,0,0,0-.3,1.51,4.08,4.08,0,0,0,.3,1.52,4,4,0,0,0,2.15,2.15ZM101.21,49H96.68a14.88,14.88,0,0,0,.23-2c0-.53,0-1,0-1.57h2.54V40.28a4.47,4.47,0,0,1-1.07-.76h0a3.85,3.85,0,0,1-.86-1.28,3.89,3.89,0,0,1-.3-1.52,4,4,0,0,1,1.13-2.77l0,0a3.79,3.79,0,0,1,1.29-.86,3.85,3.85,0,0,1,1.51-.31,3.91,3.91,0,0,1,1.53.31,3.77,3.77,0,0,1,1.25.84l0,0a4.24,4.24,0,0,1,.85,1.26v0a4,4,0,0,1,0,3,4.12,4.12,0,0,1-.83,1.26l0,0a4.14,4.14,0,0,1-.64.52c-.12.07-.24.15-.37.21v7a1.75,1.75,0,0,1-.51,1.25,1.78,1.78,0,0,1-1.25.52Zm13.87,8.54H101.81a15.56,15.56,0,0,0-1.42-3.25l0,0-.15-.26h13.1V42.49l-.3-.18a5,5,0,0,1-.55-.46,4.11,4.11,0,0,1-.86-1.29,4,4,0,0,1,0-3,4.11,4.11,0,0,1,.86-1.29,4,4,0,0,1,4.32-.86A4,4,0,0,1,119,37.53a4,4,0,0,1,0,3l0,0a3.79,3.79,0,0,1-.86,1.29,4,4,0,0,1-.75.59,3.62,3.62,0,0,1-.48.25V55.81a1.78,1.78,0,0,1-1.77,1.77Zm-3.36,9.68H101.17c.18-.39.34-.79.48-1.18a12.58,12.58,0,0,0,.6-2.36h9.47c.07-.13.14-.26.22-.38a4.2,4.2,0,0,1,.52-.66,4.35,4.35,0,0,1,1.29-.86,4,4,0,0,1,3,0h0A4,4,0,0,1,118.94,64a4.08,4.08,0,0,1,.3,1.52,3.93,3.93,0,0,1-.31,1.52,4,4,0,0,1-.85,1.28,4.12,4.12,0,0,1-1.3.87,4,4,0,0,1-1.51.3,4.16,4.16,0,0,1-1.49-.29h0a4.19,4.19,0,0,1-1.29-.87,3.87,3.87,0,0,1-.5-.62l0,0c-.08-.12-.15-.25-.22-.38ZM100.48,87.51a4,4,0,0,1,0-3,3.93,3.93,0,0,1,.84-1.25l0,0a4,4,0,0,1,.68-.54l.42-.23V76.11H94.68c0-.41,0-.83,0-1.24a.66.66,0,0,1,.28-.6,21.88,21.88,0,0,0,2.19-1.71h7.07A1.78,1.78,0,0,1,106,74.33v8.14l.36.21a3.87,3.87,0,0,1,.59.48l0,0a3.94,3.94,0,0,1,.86,1.29,3.84,3.84,0,0,1,.3,1.51,3.88,3.88,0,0,1-.29,1.49v0a4,4,0,0,1-2.15,2.15,4,4,0,0,1-3,0,4,4,0,0,1-2.15-2.15Z" />
                </LogoImg>
                <NameBlog>
                    Social<BoldText>Tech</BoldText> 
                </NameBlog>
            </LogoBox>
            <AuthorizationZoneHeader auth={auth} />
        </Wrapper>

    )
}