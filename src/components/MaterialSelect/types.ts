export interface IMaterialSelect {
    options: {
        value: string;
        label: string;
    }[],
    props: any;
    helperText?: string; 
}