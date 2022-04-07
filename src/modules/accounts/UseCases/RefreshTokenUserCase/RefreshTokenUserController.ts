import {Request, Response} from 'express';
import { container } from 'tsyringe';
import { RefreshTokenService } from './RefreshTokenUserService';

class RefreshTokenController {
    
    async handle(request: Request, response: Response): Promise<Response>{
        const  refreshToken  = request.body.refreshToken 
        || request.headers["x-access-token"] || request.query.token;
    
        const refreshTokenService = container.resolve(RefreshTokenService);
        
        const newRefreshToken = await refreshTokenService.execute(refreshToken);
        
        return response.json(newRefreshToken);
    }

} export { RefreshTokenController }