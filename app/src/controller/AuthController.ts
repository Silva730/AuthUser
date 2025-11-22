import { Request, Response } from 'express';
import AuthService from '../service/AuthService';

export const register = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    const user = await AuthService.register(username, password);

    if (!user) return res.status(409).json({message: 'Username already exists'});

    return res.send("User registered successfully");
}

export const login = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    const result = await AuthService.login(username, password);

    if (!result) return res.status(401).json({message: 'Invalid username or password'});

    return res.send("Login successful");
}