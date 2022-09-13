import { Field, Form, Formik } from "formik";
import React, { FC, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { defaultOptionsCategory } from "../../../store/reducers/defaulValuesStore";
import { addNewness, editNewness, getAllPosts, IAllPosts } from "../../../store/reducers/postsReducer";
import { isAuth } from "../../../store/reducers/signInReducer";
import { getAllUsers } from "../../../store/reducers/usersReducer";
import { Button } from "@mui/material";
import ImageDonwload from "../../ImageDonwload";
import MaterialSelect from "../../MaterialSelect/inde";
import TextField from "../../TextField";
import { validateSchema } from "./schema";
import { ArticlePost, ButtonsWrapper, FormWrapper, Title, TitlePost, Wrapper, WrapperTitleAndMainImage } from "./style";

const getDefaultValues = (data: IAllPosts) => ({
    type: data?.type ?? '',
    postId: data?.postId ?? '',
    authorId: data?.authorId ?? '',
    authorName: data?.authorName ?? '',
    title: data?.title ?? '',
    mainImage: data?.mainImage ?? [],
    content: data?.content ?? '',
    date: data?.date ?? '',
    additionalImages: data?.additionalImages ?? [],
})

export const PostForm: FC = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const [mainImage, setMainImage] = useState([]);
    const [additionalImages, setAdditionalImages] = useState([]); // ne zabud

    const { id } = useParams();
    const auth = useSelector(isAuth);
    const { action } = useParams();
    const listUsers = useSelector(getAllUsers);
    const allPosts = useSelector(getAllPosts);
    const openPost = allPosts.find(element => element.postId === id);
    // console.log(action)
    const getAuthor = () => {
        if(action === 'edit'){
            if(auth.isAdmin){
                const { authorName, authorId, } =  openPost;
                return {
                    authorName,
                    authorId
                }
            } else {
                const { authorName, authorId, } = listUsers.find(user => user.mail === auth.login);
                return {
                    authorName,
                    authorId
                } 
            }
        } else {
            if(auth.isAdmin){
                const  authorName = 'Super Admin';
                const  authorId='777';
                return {
                    authorName,
                    authorId
                }
            } else {
                const { authorName, authorId, } = listUsers.find(user => user.mail === auth.login);
                return {
                    authorName,
                    authorId
                } 
            }
        }
        }
       
    const { authorName, authorId} = getAuthor();
 
    const initialValues = useMemo(() => getDefaultValues(openPost), [openPost])
    return (
        <Wrapper>
            <FormWrapper>
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => { }}
                    validationSchema={validateSchema}
                    validateOnMount
                >
                    {({ values, errors, touched, setFieldValue, setFieldTouched, handleBlur }) => {
                        const resetForm = () => {
                            values = initialValues;
                            setMainImage([]);
                            setAdditionalImages([]);
                        }
                        return (
                            <Form>
                                <Title>Create new post</Title>
                                <Field
                                    id="title"
                                    name="title"
                                    onBlur={handleBlur}
                                    component={TitlePost}
                                    value={values.title}
                                    variant="outlined"
                                    label="Write title post"
                                    error={errors?.title && touched?.title}
                                    helperText={errors?.title && touched?.title && (
                                        errors?.title
                                    )}
                                    onClick={() => setFieldTouched("title", true)}
                                    onChange={(e: any) => setFieldValue("title", e.target.value)}

                                />
                                
                                <WrapperTitleAndMainImage>
                                    <Field
                                        id="type"
                                        name="type"
                                        onBlur={handleBlur}
                                        component={MaterialSelect}
                                        options={defaultOptionsCategory}
                                        displayEmpty
                                        defaultValue={values.type || ''}
                                        helperText={errors?.type && touched?.type && (
                                            errors?.type
                                        )}
                                        error={errors?.type && touched?.type}
                                        onClick={() => setFieldTouched("type", true)}
                                        onChange={(e) => {
                                            setFieldValue("type", e.target.value);
                                        }}
                                        label="Type your post"
                                    />

                                    <Field
                                        id='mainImage'
                                        name='mainImage'
                                        onBlur={handleBlur}
                                        component={ImageDonwload}
                                        error={!(mainImage.length)}
                                        textError='Please donwload main image'
                                        maxFiles={1}
                                        imageDefault={values.mainImage}
                                        getFiles={setMainImage}
                                    />
                                </WrapperTitleAndMainImage>
                                
                                <Field
                                    id="content"
                                    name="content"
                                    onBlur={handleBlur}
                                    component={ArticlePost}
                                    value={values.content}
                                    variant="outlined"
                                    label="Write article"
                                    multiline
                                    resize
                                    error={errors?.content && touched?.content}
                                    
                                    helperText={errors?.content && touched?.content && (
                                        errors?.content
                                    )}
                                    onClick={() => setFieldTouched("content", true)}
                                    onChange={(e: any) => setFieldValue("content", e.target.value)}
                                />
                                <Field
                                    id='additionalImages'
                                    name='additionalImages'
                                    onBlur={handleBlur}
                                    component={ImageDonwload}
                                    error={!(additionalImages.length)}
                                    textError='You can upload up to 5 additional images'
                                    maxFiles={5}
                                    imageDefault={values.additionalImages}
                                    getFiles={setAdditionalImages}
                                />
                                <ButtonsWrapper>
                                    {(id ?
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            children='Cancel'
                                            onClick={() => {
                                                resetForm();
                                                history(`/post/${values.type}/${values.postId}`)
                                            }}
                                        /> :
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            children='Cancel'
                                            onClick={() => {
                                                resetForm();
                                                history('/')
                                            }}
                                        />
                                    )}

                                    {(
                                        (id) ? <Button
                                            children={'Edit'}
                                            variant="outlined"
                                            color="secondary"
                                            onClick={() => {
                                                dispatch(editNewness({ ...values, additionalImages, mainImage, authorId, authorName }))
                                                resetForm();
                                                history(`/post/${values.type}/${values.postId}`)
                                            }}
                                            disabled={Boolean(Object.keys(errors).length)}
                                        /> :
                                            <Button
                                                children={'Create'}
                                                variant="outlined"
                                                color="secondary"
                                                onClick={() => {
                                                    dispatch(addNewness({ ...values, additionalImages, mainImage, authorId, authorName }))
                                                    resetForm();
                                                    history('/')
                                                }}
                                                disabled={Boolean(Object.keys(errors).length) || !Boolean(mainImage.length)}
                                            />
                                    )}
                                </ButtonsWrapper>
                            </Form>
                        )
                    }}
                </Formik>
            </FormWrapper>
        </Wrapper>
    )
}

export default PostForm;