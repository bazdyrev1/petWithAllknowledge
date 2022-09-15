import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNewness, getAllPosts } from "../../store/reducers/postsReducer";
import { isAuth } from "../../store/reducers/singInReducer";
import { getAllUsers } from "../../store/reducers/usersReducer";
import MaterialImageList from "../../components/MaterialImageList";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Article, ArticleTitle, AuthorBlock, ButtonsBlock, IconClock, InfoText, MainImage, Wrapper, WrapperAdditionalPhotos, WrapperMainImage } from "./style";
import { ISingIn, IUsers } from "../../store/reducers/types";


const PostPage: FC = (): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();
    const { id } = useParams();

    const dispatch = useDispatch();
    const auth = useSelector(isAuth);
    const listUsers = useSelector(getAllUsers);
    const allPosts = useSelector(getAllPosts);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const openPost = allPosts.find(element => element.postId === id);

    const checkPermissionForEdit = (auth: ISingIn, listUsers: IUsers[]): boolean => {
        if (!auth.isAdmin) {
            const authUser = listUsers.find(user => user.mail === auth.login)
            const validateToChange = openPost?.authorId === authUser?.authorId;
            return (
                validateToChange
            )
        }
        return false;
    }
    const permissionForEdit = checkPermissionForEdit(auth, listUsers);

    return (
        <Wrapper>
            <ArticleTitle>
                {openPost.title}
            </ArticleTitle>

            <AuthorBlock>
                <InfoText>
                    <IconClock />
                    {openPost.date}
                </InfoText>

                <InfoText>
                    {openPost.authorName}
                </InfoText>
                {(auth.isAdmin || permissionForEdit) &&
                    <ButtonsBlock>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MoreVertIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            PaperProps={{
                                style: {
                                    width: '15ch',
                                },
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center"
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => {
                                navigate(`/post-form/edit/${openPost.postId}`)
                            }}
                            >
                                Edit
                            </MenuItem>

                            <MenuItem onClick={() => {
                                dispatch(deleteNewness(openPost.postId))
                                navigate('/')
                            }}
                            >
                                Delete
                            </MenuItem>
                        </Menu>
                    </ButtonsBlock>
                }
            </AuthorBlock>

            <WrapperMainImage>
                <MainImage src={openPost.mainImage[0].dataURL} style={{ float: 'right' }} />
            </WrapperMainImage>

            <Article>
                {openPost.content}
            </Article>

            {!!openPost.additionalImages.length &&
                <WrapperAdditionalPhotos>
                    <MaterialImageList
                        listImage={openPost.additionalImages}
                        cols={5}
                        rowHeight={10}
                    />
                </WrapperAdditionalPhotos>
            }
        </Wrapper>
    )
}

export default PostPage;