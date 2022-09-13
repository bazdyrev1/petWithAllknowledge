import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNewness, getAllPosts } from "../../../store/reducers/postsReducer";
import BackgroundLetterAvatars from "../../BackgroundLetterAvatars";
import ButtonMaterial from "../../ButtonMaterial";
import MaterialmageList from "../../MateriallImageList";

import { Article, ArticleTitle, AuthAndControlBlock, AuthorBlock, ButtonsBlock, IconClock, InfoAboutPost, InfoText, MainImage, Wrapper, WrapperAdditionalPhotos, WrapperArticleText, WrapperMainImage } from "./style";





const PostPage: FC = () => {
    const { id } = useParams();
    const allPosts = useSelector(getAllPosts);
    const openPost = allPosts.find(element => element.postId === id);
    const dispatch = useDispatch();
    const history = useNavigate();
    console.log(id)
    return (
        <Wrapper>

            <WrapperMainImage>
                <MainImage src={openPost.mainImage[0].dataURL} />
                <AuthAndControlBlock>
                    <ArticleTitle>
                        {openPost.title}
                    </ArticleTitle>
                    <InfoAboutPost>
                       
                        <AuthorBlock>
                            <BackgroundLetterAvatars name={openPost.authorName} />
                            <InfoText>
                                {openPost.authorName}
                            </InfoText>
                        </AuthorBlock>
                        <InfoText>
                            <IconClock />
                            {openPost.date}
                        </InfoText>
                    </InfoAboutPost>
                    <ButtonsBlock>
                        <ButtonMaterial
                            variant="outlined"
                            color='secondary'
                            onClick={() => history(`/post-form/edit/${openPost.postId}`) }
                            children='EditPost'
                        />
                    
                        <ButtonMaterial
                            color='secondary'
                            variant="outlined"
                            children="Delete post"
                            onClick={() => {
                              dispatch(deleteNewness(openPost.postId)) 
                              history('/') 
                            }}
                        />
                    </ButtonsBlock>
                </AuthAndControlBlock>

                {/* Проверка на авторизаци и возможность редактировать и удалять пост */}

            </WrapperMainImage>
            <WrapperArticleText>
                
                <Article>
                    {openPost.content}
                </Article>
            </WrapperArticleText>
            <WrapperAdditionalPhotos>

                <MaterialmageList
                    listImage={openPost.additionalImages}
                    // sx={{ width: 1300, height: 450 }} 
                    cols={5}
                    rowHeight='10vh;'
                />
            </WrapperAdditionalPhotos>
        </Wrapper>
    )
}

export default PostPage;