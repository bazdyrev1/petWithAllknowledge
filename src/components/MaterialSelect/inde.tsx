import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { Wrapper } from "./style";
import FormControl from '@mui/material/FormControl';

const MaterialSelect = ({ options, ...props }) => {
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