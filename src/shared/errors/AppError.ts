class AppError {
    public readonly statusCode: number;
    public readonly message: string;

    constructor(status = 400, message:string){
        this.statusCode = status;
        this.message = message
    }

} export {AppError}