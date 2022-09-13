import * as yup from 'yup';

const message = {
    nickName: {
        required: "Nick name cannot be empty",
        min: "Nick name cannot be less than 2 letters",
        max: "Nick name can't be longer 15 letters", 
    },
    authorName: {
        required: "Name cannot be empty",
        min: "Name cannot be less than 2 letters",
        max: "Name can't be longer 20 letters", 
        fullName: "Name must be two words or more"
    },
    mail: {
        required: "Email name cannot be empty",
        valid: "Email should be in format 'user@somemail.com'",
    },
    password: {
        required: "Password cannot be empty",
        min: "Password cannot be less than 6 symbols",
        max: "Password can't be longer 20 symbols",
    },
    examinationPass: {
        required: "This field cannot be empty",
        min: "Password cannot be less than 6 symbols",
        max: "Password can't be longer 20 symbols",
        match: "Password must match"
    }
};

export const validateSchema = yup.object().shape({
    nickName: yup.string()
    .required(message.nickName.required)
    .min(2, message.nickName.min)
    .max(20, message.nickName.max),
    authorName: yup.string()
    .required(message.authorName.required)
    .min(2, message.authorName.min)
    .max(20, message.authorName.max)
    .matches(/^\w+( \w+)/, message.authorName.fullName),
    mail: yup.string()
    .email(message.mail.valid)
    .required(message.mail.required),
    password: yup.string()
    .required(message.password.required)
    .min(6, message.password.min)
    .max(20, message.password.max),
    examinationPass: yup.string()
    .required(message.examinationPass.required)
    .min(6, message.examinationPass.min)
    .max(20, message.examinationPass.max)
    .oneOf([yup.ref('password'), null], message.examinationPass.match)
})