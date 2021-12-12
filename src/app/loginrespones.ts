export class LoginResponse{
    token!: string;
    userType! :string;

    constructor(
        token: string,
        userType: string
    ){}
}