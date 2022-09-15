export interface IStateVisible {
    password: boolean,
}
export interface IInputPassword {
    form: {
        errors: string[];
        touched: string[], 
        values: string[], 
        setFieldValue: (field: string, value: string | number ) => void;
        handleBlur: (e: React.FocusEvent<any, Element>) => void;
        setFieldTouched: (field: string, isTouched?: boolean, shouldValidate?: boolean) => void;
    },
    field: {
        name: string;
    }
}