import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import SearchPanel from "../../components/SearchInput";
import { addGitData } from "../../store/reducers/gitDataReducer";
import GitUserCard from "../../components/GitUserCard";
import { SearchBlock, Wrapper } from "./style";

const GitDataPage: FC = (): JSX.Element => {
  const [request, setRequest] = useState("bazdyrev1");
  const dispatch = useDispatch();

  async function getUser(): Promise<void> {
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
      <SearchBlock>
        <SearchPanel searchParameter={setRequest} />
      </SearchBlock>

      <GitUserCard />
    </Wrapper>
  );
};

export default GitDataPage;
