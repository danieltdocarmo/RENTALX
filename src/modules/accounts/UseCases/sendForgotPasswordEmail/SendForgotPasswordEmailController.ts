import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendForgotPasswordEmailService } from "./sendForgotPasswordEmailService";

class SendForgotPasswordEmailController{

    async handle(request: Request, response: Response){
        const { email } = request.body;   
        
        const sendForgotPasswordEmailService = 
            container.resolve(SendForgotPasswordEmailService);

        await sendForgotPasswordEmailService.execute(email);``
    }

} export { SendForgotPasswordEmailController }