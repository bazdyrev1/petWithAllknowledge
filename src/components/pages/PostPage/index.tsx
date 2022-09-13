import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNewness, getAllPosts } from "../../../store/reducers/postsReducer";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MaterialmageList from "../../MateriallImageList";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Article, ArticleTitle, AuthorBlock, ButtonsBlock, IconClock, InfoText, MainImage, Wrapper, WrapperAdditionalPhotos, WrapperMainImage } from "./style";
import { isAuth } from "../../../store/reducers/signInReducer";
import { getAllUsers } from "../../../store/reducers/usersReducer";


const PostPage: FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const { id } = useParams();
    const auth = useSelector(isAuth);
    const listUsers = useSelector(getAllUsers);
    const allPosts = useSelector(getAllPosts);
    const openPost = allPosts.find(element => element.postId === id);
    const dispatch = useDispatch();
    const history = useNavigate();
    const checkPermissionForEdit = (): boolean => {
        if (!auth.isAdmin) {
            const authUser = listUsers.find(user => user.mail === auth.login)
            const validateToChanche = openPost.authorId === authUser.authorId;
            return (
                validateToChanche
            )
        }

    }
    const permissionForEdit = checkPermissionForEdit();


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
            </AuthorBlock>
            <WrapperMainImage>
                <MainImage src={openPost.mainImage[0].dataURL} style={{ float: 'right' }} />
            </WrapperMainImage>
            <Article>
                {openPost.content}
            </Article>

            {!!openPost.additionalImages.length &&
                <WrapperAdditionalPhotos>
                    <MaterialmageList
                        listImage={openPost.additionalImages}
                        // sx={{ width: 1300, height: 450 }} 
                        cols={5}
                        rowHeight='10vh;'
                    />
                </WrapperAdditionalPhotos>
            }

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
                        history(`/post-form/edit/${openPost.postId}`)
                    }}>Edit</MenuItem>
                    <MenuItem onClick={() => {
                        dispatch(deleteNewness(openPost.postId))
                        history('/')
                    }} >Delete</MenuItem>

                </Menu>


                </ButtonsBlock>
            }
        </Wrapper>
    )
}

export default PostPage;