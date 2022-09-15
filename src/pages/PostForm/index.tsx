import React, { FC, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { isEmpty } from "lodash";
import { Field, Form, Formik } from "formik";
import { validateSchema } from "./schema";
import { TgetAuthor } from "./types";
import { defaultOptionsCategory } from "../../store/reducers/defaultValuesStore";
import { addNewness, editNewness, getAllPosts } from "../../store/reducers/postsReducer";
import { isAuth } from "../../store/reducers/singInReducer";
import { getAllUsers } from "../../store/reducers/usersReducer";
import { IAllPosts } from "../../store/reducers/types";
import ImageDownloading from "../../components/ImageDownloading";
import MaterialSelect from "../../components/MaterialSelect";
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

export const PostForm: FC = (): JSX.Element => {
  const [mainImage, setMainImage] = useState([]);
  const [additionalImages, setAdditionalImages] = useState([]);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector(isAuth);
  const listUsers = useSelector(getAllUsers);
  const allPosts = useSelector(getAllPosts);

  const { id } = useParams();
  const { action } = useParams();

  const openPost = allPosts.find(element => element.postId === id);

  const initialValues = useMemo(() => getDefaultValues(openPost), [openPost])

  const getAuthor = (): TgetAuthor => {
    if (action === 'edit') {
      if (auth.isAdmin) {
          const { authorName, authorId, } = openPost;

          return {
            authorName,
            authorId
          }
      }
      const { authorName, authorId, } = listUsers.find(user => user.mail === auth.login);

      return {
        authorName,
        authorId
      }
    } else {
      if (auth.isAdmin) {
        const authorName = 'Super Admin';
        const authorId = '777';

        return {
          authorName,
          authorId
        }
      }
      const { authorName, authorId, } = listUsers.find(user => user.mail === auth.login);
      
      return {
        authorName,
        authorId
      }
    }
  }

  const { authorName, authorId } = getAuthor();

  const handleResetForm = (resetForm): void => {
    resetForm();
    setMainImage([]);
    setAdditionalImages([]);
  }
    
  return (
    <Wrapper>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={() => { }}
          validationSchema={validateSchema}
          validateOnMount
        >
          {({ values, errors, touched, setFieldValue, setFieldTouched, handleBlur, resetForm }) => {
          
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
                  helperText={(errors?.title && touched?.title) && 
                      errors?.title
                  }
                  onClick={() => setFieldTouched("title", true)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue("title", e.target.value)}
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
                    helperText={(errors?.type && touched?.type) && 
                        errors?.type
                    }
                    error={errors?.type && touched?.type}
                    onClick={() => setFieldTouched("type", true)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("type", e.target.value);
                    }}
                    label="Type your post"
                  />

                  <Field
                    id='mainImage'
                    name='mainImage'
                    onBlur={handleBlur}
                    component={ImageDownloading}
                    error={!(mainImage.length)}
                    textError='Please download main image'
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
                  
                  error={errors?.content && touched?.content}
                  helperText={(errors?.content && touched?.content) && 
                      errors?.content
                  }
                  onClick={() => setFieldTouched("content", true)}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue("content", e.target.value)}
                />

                <Field
                  id='additionalImages'
                  name='additionalImages'
                  onBlur={handleBlur}
                  component={ImageDownloading}
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
                          handleResetForm(resetForm)
                          navigate(`/post/${values.type}/${values.postId}`)
                      }}
                    /> :
                    <Button
                      variant="outlined"
                      color="secondary"
                      children='Cancel'
                      onClick={() => {
                          handleResetForm(resetForm)
                          navigate('/')
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
                            handleResetForm(resetForm)
                            navigate(`/post/${values.type}/${values.postId}`)
                        }}
                        disabled={!isEmpty(errors)}
                    /> :
                    <Button
                      children={'Create'}
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                          dispatch(addNewness({ ...values, additionalImages, mainImage, authorId, authorName }))
                          handleResetForm(resetForm)
                          navigate('/')
                      }}
                      disabled={!isEmpty(errors) || 
                          !mainImage.length
                      }
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