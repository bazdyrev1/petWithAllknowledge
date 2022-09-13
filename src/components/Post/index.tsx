import React, { FC } from "react";
import { Link } from "react-router-dom";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import { AritcleWrapper, ArticlePreviev, AuthorNameAndData, InfoParagraph, InformationAboutAuthor, MainImageBox, MainImagePreviev, ShortInfoPost, TitlePost, Wrapper } from "./style";

const Post: FC<any> = ({ postItem }) => {
    
    return (
        <Wrapper>
            <Link  to={`/post/${postItem.type}/${postItem.postId}`}>
            <MainImageBox>
                <MainImagePreviev src={postItem.mainImage[0]?.dataURL} />
            </MainImageBox>
            <ShortInfoPost>
                <AritcleWrapper>
                    <TitlePost>
                        {postItem.title}
                    </TitlePost>
                    <ArticlePreviev>
                        {postItem.content}
                    </ArticlePreviev>
                </AritcleWrapper>
                <InformationAboutAuthor>
                    <BackgroundLetterAvatars name={postItem.authorName} />
                    <AuthorNameAndData>
                        <InfoParagraph>{postItem.authorName}</InfoParagraph>
                        <InfoParagraph>{postItem.date}</InfoParagraph>
                    </AuthorNameAndData>
                </InformationAboutAuthor>
            </ShortInfoPost>
            </Link>
        </Wrapper>
    )
}
export default Post;