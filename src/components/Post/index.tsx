import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteNewness } from "../../store/reducers/postsReducer";
import { isAuth } from "../../store/reducers/singInReducer";
import { getAllUsers } from "../../store/reducers/usersReducer";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import { IPost } from "./types";
import { ISingIn } from "../../store/reducers/types";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ArticleWrapper, ArticlePreview, AuthorNameAndData, ControlButtons, InfoParagraph, InformationAboutAuthor, MainImageBox, MainImagePreview, ShortInfoPost, TitlePost, Wrapper } from "./style";


const Post: FC<IPost> = ({ postItem }): JSX.Element => {
    const [visible, setVisible] = useState(false)
    const auth = useSelector(isAuth);
    const listUsers = useSelector(getAllUsers);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChangeVisible = () => {
        setVisible(!visible)
    }
    const checkPermissionForEdit = (auth: ISingIn, postItem: IPost["postItem"]): boolean => {
        if (!auth.isAdmin) {
            const authUser = listUsers.find(user => user.mail === auth.login)
            const validateToChange = postItem?.authorId === authUser?.authorId;
            return (
                validateToChange
            )
        }
        return false
    }

    const link = `/post/${postItem.type}/${postItem.postId}`
    const permissionForEdit = checkPermissionForEdit(auth,postItem);

    return (
        <Wrapper
            onMouseLeave={handleChangeVisible}
            onMouseEnter={handleChangeVisible}
        >
            <Link to={link}>
                <MainImageBox>
                    <MainImagePreview src={postItem.mainImage[0]?.dataURL} />
                </MainImageBox>
            </Link>
            <ShortInfoPost>
                <Link to={link}>
                    <ArticleWrapper>
                        <TitlePost>
                            {postItem.title}
                        </TitlePost>
                        <ArticlePreview>
                            {postItem.content}
                        </ArticlePreview>
                    </ArticleWrapper>
                </Link>
                <InformationAboutAuthor>
                    <BackgroundLetterAvatars name={postItem.authorName} />
                    <AuthorNameAndData>
                        <InfoParagraph>{postItem.authorName}</InfoParagraph>
                        <InfoParagraph>{postItem.date}</InfoParagraph>
                    </AuthorNameAndData>
                    {((auth.isAdmin || permissionForEdit) && visible) &&
                        <ControlButtons>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => {
                                    navigate(`/post-form/edit/${postItem.postId}`)
                                }}
                                color="inherit"
                            >
                                <EditIcon />
                            </IconButton>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={() => {
                                    dispatch(deleteNewness(postItem.postId))
                                }}
                                color="inherit"
                            >
                                <DeleteForeverIcon />
                            </IconButton>
                        </ControlButtons>
                    }
                </InformationAboutAuthor>
            </ShortInfoPost>

        </Wrapper>
    )
}
export default Post;