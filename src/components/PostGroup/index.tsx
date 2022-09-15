import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../store/reducers/postsReducer";
import Post from "../Post";
import { Wrapper } from "./style";
import { IPostGroup } from "./types";




const PostGroup: FC<IPostGroup> = ({ categoryName, page, functionGetPageNum }) => {

    const allPosts = useSelector(getAllPosts);
    
    const  paginate = (array, page_size, page_number) => {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const postsWithSelectCategory = allPosts.reduce((acc, curr) => {
        if (curr.type === categoryName) {
            return [...acc, curr];
        }
        else if (categoryName === "all") {
            return [...acc, curr]
        }
            return [...acc];
    }, [])
    
    const postWithPagination = () => {
        return paginate(postsWithSelectCategory, 9, page);
    }
    useEffect(() => {
        functionGetPageNum(Math.ceil(postsWithSelectCategory.length / 9))
    },[functionGetPageNum,postsWithSelectCategory ])

    return (
        <Wrapper>

            {postWithPagination().map((item, index) => {
                return (
                    
                     <Post key={index} postItem={item} />
                    
                   
                )
            })}


        </Wrapper>

    )
}

export default PostGroup;