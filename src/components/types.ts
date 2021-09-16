export interface Credentials {
    firstName?: string;
    lastName?: string
    email: string;
    password: string;
}

export interface User {
    id : string;
    firstname: string;
    lastname: string;
    email: string;
}

export enum AlertType{
    ERROR ="error",
    SUCCESS="success"
}

export interface AlertMessage{
    type : AlertType;
    message: string
}