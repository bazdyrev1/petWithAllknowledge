import * as yup from 'yup';

const message = {
    nickNameSearchPerson: {
        required: "Nick name cannot be empty",
        min: "Nick name cannot be less than 2 letters",
        max: "Nick name can't be longer 50 letters", 
    },
}
export const validateSchema = yup.object().shape({
    nickNameSearchPerson: yup.string()
    .required(message.nickNameSearchPerson.required)
    .min(2, message.nickNameSearchPerson.min)
    .max(50, message.nickNameSearchPerson.max),
   
})