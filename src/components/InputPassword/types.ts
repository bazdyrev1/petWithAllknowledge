import { ControllerRenderProps } from "react-hook-form";

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

export interface IInputPassword2 extends ControllerRenderProps {
    onChange: (...event: any[]) => void;
    onBlur: () => void;
    value: any;
    name: string;
    error: any;
}
