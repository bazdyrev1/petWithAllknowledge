import React from "react";
import { TextField as MaterialTextField } from "@mui/material";


const TextField = ({ ...props }) => {
    return (
        <MaterialTextField
            {
            ...props
            } />


    )
}

export default TextField;