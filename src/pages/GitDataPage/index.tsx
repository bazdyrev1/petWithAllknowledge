import React, { FC, useEffect, useState } from "react";
import { Wrapper } from "./style";
import axios from "axios";
import SearchPanel from "../../components/SearchInput";
import { useDispatch } from "react-redux";
import { addGitData } from "../../store/reducers/gitDataReducer";
import GitUserCard from "../../components/GitUserCard";

const GitDataPage: FC = (): JSX.Element => {
  const [request, setRequest] = useState("bazdyrev1");



  const dispatch = useDispatch();

  async function getUser() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${request}`
      );
      dispatch(addGitData(response.data.items[0]));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, [request]);



  return (
    <Wrapper>
      <SearchPanel searchParameter={setRequest} />
      <GitUserCard />
    </Wrapper>
  );
};

export default GitDataPage;
