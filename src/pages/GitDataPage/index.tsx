import React, { FC, useState } from "react";
import { useDispatch }         from "react-redux";

import SearchPanel from "../../components/SearchInput";
import GitUserCard from "../../components/GitUserCard";

import { fetchGitData } from "../../store/reducers/gitDataReducer";
import { AppDispatch }  from "../../store";

import { SearchBlock, Wrapper } from "./style";

const DonwloadingData = (request): void => {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(fetchGitData(request));
};

const GitDataPage: FC = (): JSX.Element => {
  const [request, setRequest] = useState("bazdyrev1");
  DonwloadingData(request);

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
