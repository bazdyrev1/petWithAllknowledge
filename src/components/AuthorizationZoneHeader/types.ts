export interface IAuthorizationZoneHeader {
    auth: {
        isAdmin: boolean;
        isAuth: boolean;
        login: string;
    }
}