export interface Credentials {
    firstname?: string;
    lastname?: string
    email: string;
    password: string;
}

export interface User {
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