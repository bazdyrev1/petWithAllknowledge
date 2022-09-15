import React, { FC } from "react";
import { IMaterialSelect } from "./types";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Wrapper } from "./style";

const MaterialSelect: FC<IMaterialSelect> = ({ options, ...props }) => {

    return (
        <Wrapper>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Select category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    {...props}
                >
                    {options.map(({ value, label }) => (
                        <MenuItem key ={value} value={value}>{label}</MenuItem>
                    ))}
                </Select>
                <FormHelperText>{props.helperText}</FormHelperText>
            </FormControl>
        </Wrapper>
    )
}

export default MaterialSelect;