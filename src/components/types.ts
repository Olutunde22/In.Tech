export interface Credentials {
    firstName?: string;
    lastName?: string
    email: string;
    password: string;
}

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    salt: string;
    verificationToken: string;
    imageUrl: string;
    createdAt: number;
    updatedAt: number;
    __V: number;
}

export enum AlertType {
    ERROR = "error",
    SUCCESS = "success"
}

export interface AlertMessage {
    type: AlertType;
    message: string
}