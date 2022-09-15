export interface IImageDownloading {
    maxFiles: number;
    imageDefault: string[];
    getFiles: React.Dispatch<React.SetStateAction<any[]>>;
    error: boolean;
    textError: string;
}