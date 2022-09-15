interface IListImage {
    dataURL: string;
}

export interface IMaterialImageList {
    listImage: IListImage[];
    cols?: number;
    rowHeight?: number | 'auto';
} 