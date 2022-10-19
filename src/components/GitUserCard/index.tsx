import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getGitData } from '../../store/reducers/gitDataReducer';
import { CategoryItem, DataItem, ErrorMessage, InfoBlock, TableText, Wrapper } from './style';

const GitUserCard:FC = ():JSX.Element => {
    const userDataInStore = Object.entries(useSelector(getGitData));

    return (
        <Wrapper>
           {userDataInStore.length ? userDataInStore.map((item, index) => 
           <InfoBlock key={index}>
                <CategoryItem>
                <TableText>{item[0]}</TableText>
                </CategoryItem>

                <DataItem>
                <TableText>{item[1]}</TableText>
                </DataItem>
            </InfoBlock>   
            )
        : <ErrorMessage> Please repeat with new search parameter!</ErrorMessage>}
        </Wrapper>
        )
}

export default GitUserCard;