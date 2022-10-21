import React, { FC }   from "react";
import { useSelector } from "react-redux";

import { getGitData } from "../../store/reducers/gitDataReducer";

import {
  CategoryItem,
  DataItem,
  ErrorMessage,
  InfoBlock,
  Link,
  TableText,
  Wrapper,
} from "./style";

const GitUserCard: FC = (): JSX.Element => {
  const userDataInStore = useSelector(getGitData).data;

  return (
    <Wrapper>
      {!!userDataInStore.items?.length ? (
        userDataInStore.items.map((item, index) => (
          <InfoBlock key={index}>
            <CategoryItem>
              <TableText>{item?.login}</TableText>
            </CategoryItem>
            <DataItem>
              <Link href={item.url}>{item.url} </Link>
            </DataItem>
          </InfoBlock>
        ))
      ) : (
        <ErrorMessage> Please repeat with new search parameter!</ErrorMessage>
      )}
    </Wrapper>
  );
};

export default GitUserCard;
