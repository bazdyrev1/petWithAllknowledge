export interface IPostGroup {
    categoryName: string;
    page: number;
    func: (page: any) => any;
}