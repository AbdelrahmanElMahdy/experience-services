import { Request, Response, NextFunction } from 'express';
import token from '../utils/Token';
import Token from '../utils/interfaces/auth.interface';
import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';

declare global {
    namespace Express {
        export interface Request {
            candidate_id: number;
        }
    }
}

async function authenticatedMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> {
    const bearer = req.headers.authorization;

    if (!bearer || !bearer.startsWith('Bearer ')) {
        return res
            .status(403)
            .json({ status: 'error', message: 'unauthorized' });
    }
    const accessToken = bearer.split('Bearer ')[1].trim();
    try {
        const payload: Token | jwt.JsonWebTokenError = await token.verifyToken(
            accessToken
        );
        if (payload instanceof jwt.JsonWebTokenError) {
            return res
                .status(403)
                .json({ status: 'error', message: 'unauthorized' });
        }

        req.candidate_id = payload.id;
        return next();
    } catch (error) {
        console.log(error);
        return res
            .status(403)
            .json({ status: 'error', message: 'unauthorized' });
    }
}

export default authenticatedMiddleware;
