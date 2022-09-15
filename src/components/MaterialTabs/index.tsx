import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { getCategoryOptions } from "../../store/reducers/postsReducer";
import PostGroup from "../PostGroup";
import TabPanel from "./TabPanel";
import PaginationMaterial from "../PaginationMaterial";
import { Wrapper } from "./style";

const allyProps = (index: number) => {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

const MaterialTabs: FC = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const postsCategories = useSelector(getCategoryOptions);

  const handleChange = (_, newValue: number) => {
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
            {...allyProps(0)}
          />

          {postsCategories.map((item, index) => (
            <Tab key={index} label={item} {...allyProps(index + 1)} />
          ))}
        </Tabs>

        <TabPanel value={value} index={0} >
          <PostGroup categoryName={'all'} page={page} functionGetPageNum={setNumberOfPages} />
        </TabPanel>

        {postsCategories.map((item, index) => (
          <TabPanel key={index} value={value} index={index + 1} >
            <PostGroup categoryName={item} page={page} functionGetPageNum={setNumberOfPages} />
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