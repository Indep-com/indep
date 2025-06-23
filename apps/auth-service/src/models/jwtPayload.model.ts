import {Role} from "../enums/role.enum";

export interface JwtPayloadModel {
    sub: string;
    email: string;
    role: Role;
}