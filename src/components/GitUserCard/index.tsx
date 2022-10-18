import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getGitData } from '../../store/reducers/gitDataReducer';
import { Wrapper } from './style';

const GitUserCard: FC = (): JSX.Element => {

    const userDataInStore = Object.entries(useSelector(getGitData));

    console.log(userDataInStore)

    return (
        <Wrapper>
           {userDataInStore.map(item => 
           <div>

                <div>
                <span>{item[0]}</span>
                </div>

                <div>
                <a href={item[1]}>{item[1]}</a>
                </div>
            </div>   
            )}
        </Wrapper>
        )
}

export default GitUserCard;