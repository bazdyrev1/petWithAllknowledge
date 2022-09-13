import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../store/reducers/postsReducer";

import Post from "../Post";
import { Wraper } from "./style";




const PostGroup = (props: any) => {
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
        props.func(Math.ceil(postsWithSelectCategory.length / 9)) //много ререндеров пофиксить
        return paginate(postsWithSelectCategory, 9, props.page);
    }
    return (
        <Wraper>

            {postWithPagination().map((item, index) => {
                return (
                    
                     <Post key={index} postItem={item} />
                    
                   
                )
            })}


        </Wraper>

    )
}

export default PostGroup;