import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TabPanelProps } from "./types";

const TabPanel: FC<TabPanelProps> = (props): JSX.Element => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'div'} >{children}</Typography>
                </Box>
            )}
        </div>
    );
    ;
}
export default TabPanel;