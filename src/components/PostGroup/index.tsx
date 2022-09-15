import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../store/reducers/postsReducer";
import Post from "../Post";
import { Wrapper } from "./style";
import { IPostGroup } from "./types";




const PostGroup: FC<IPostGroup> = (props: any) => {

    const allPosts = useSelector(getAllPosts);
    
    function paginate(array, page_size, page_number) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const postsWithSelectCategory = allPosts.reduce((acc, curr) => {
        if (curr.type === props.categoryName) {
            return [...acc, curr];
        }
        else if (props.categoryName === "all") {
            return [...acc, curr]
        }
        else {
            return [...acc];
        }
    }, [])
    
    const postWithPagination = () => {
       
        // props.func(Math.ceil(postsWithSelectCategory.length / 9))
        return paginate(postsWithSelectCategory, 9, props.page);
    }
    useEffect(() => {
        props.func(Math.ceil(postsWithSelectCategory.length / 9))
    },[])

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