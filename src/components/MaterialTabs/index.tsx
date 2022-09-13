import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getAllPosts, getCategoryOptions } from "../../store/reducers/postsReducer";
import { useSelector } from "react-redux";
import PostGroup from "../PostGroup";
import PaginationMaterial from "../PaginationMaterial";
import { Wrapper } from "./style";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

function TabPanel(props: TabPanelProps) {
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
const MaterialTabs = () => {
 
    const postsCategories = useSelector(getCategoryOptions);
    const [page, setPage] = useState(1)
    const [value, setValue] = React.useState(0);
    const [numberOfPages, setNumberOfPages] = useState(1)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setPage(1);
    };
    return (
        <Wrapper>
            <Box
                sx={{
                    flexGrow: 1,
                    bgcolor: "background.paper",
                    display: "flex",
                    height: "100%",
                }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    
                    sx={{ borderRight: 1, borderColor: "divider" }}
                >
                    <Tab 
                    label='All posts' 
                    key='AllPosts' 
                    
                    {...a11yProps(0)} 
                    />

                    {postsCategories.map((item, index) => (
                        <Tab key={index} label={item} {...a11yProps(index + 1)} />
                    ))}
                </Tabs>
                <TabPanel value={value} index={0} >
                    <PostGroup categoryName={'all'} page={page} func={setNumberOfPages}/>

                </TabPanel>
                {postsCategories.map((item, index) => (

                    <TabPanel key={index} value={value} index={index + 1} >
                        <PostGroup categoryName={item} page={page} func={setNumberOfPages} />

                    </TabPanel >
                ))}

            </Box>
            <PaginationMaterial count={numberOfPages} 
            variant="outlined"
            color="secondary"
            page={page}
            onChange={(_, num) => {
                setPage(num);
            }}
            size='large'
            />
        </Wrapper>

    )
};

export default MaterialTabs;