import React, {FC, useEffect, useState} from 'react';
import { Wrapper } from './style';
import axios from 'axios';
import SearchPanel from '../../components/SearchPanel';


const GitDataPage:FC = (): JSX.Element => {
    const [request, setRequest] = useState();
    const [userData, setUserData] = useState([]);

    async function getUser() {
        try {
          const response = await axios.get(`https://api.github.com/search/users?q=${request}`);
          setUserData(response.data.items);
        } catch (error) {
          console.error(error);
        }
      }

    const user = 'bazdyrev1';
    useEffect(() => {
       getUser();
      }, [request]);
    
    console.log(userData)


    return(
       <Wrapper>
          <SearchPanel />
       </Wrapper>
    ) 
}

export default GitDataPage;