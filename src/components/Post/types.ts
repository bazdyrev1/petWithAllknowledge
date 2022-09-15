import { IImage } from "../../store/reducers/types";

export interface IPost {
        postItem: {
        type: string;
        postId: string;
        authorId: string;
        authorName: string;
        title: string;
        mainImage: IImage[];
        content: string;
        date: string;
        additionalImages: IImage[];
    }
}