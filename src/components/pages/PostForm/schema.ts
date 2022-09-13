import * as yup from 'yup';

const message = {
    title: {
        required: "Title cannot be empty",
        min: "Titlee cannot be less than 2 letters",
        max: "Title can't be longer 30 letters", 
    },
    content: {
        required: "Article cannot be empty",
        min: "Article cannot be less than 10 letters",
        max: "Article can't be longer 1500 letters", 
    },
    type: {
        required: "Choose the type of news",
    },
    
};

export const validateSchema = yup.object().shape({
    title: yup.string()
    .required(message.title.required)
    .min(2, message.title.min)
    .max(30, message.title.max),
    content: yup.string()
    .required(message.content.required)
    .min(10, message.content.min)
    .max(1500, message.content.max),
    type: yup.string()
    .required(message.type.required),
   
})