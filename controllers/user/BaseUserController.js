import { registerService } from "../../services/index.js";

export class BaseUserController { 
    async create(req, res) {
        try {
            const data = req.body;
            if (!data) {
                return res.status(400).json({ message: "Invalid data" });
            }

            const response = await registerService.registerUser(data);
            
            return res.status(201).json({ 
                message: "User created successfully!", 
                data: response 
            });

        } catch(error) {
            console.error('Registration error:', error);
            
            if (error.message === 'User with this email already exists') {
                return res.status(409).json({ message: error.message });
            }
            
            if (error.message === 'Email and password are required') {
                return res.status(400).json({ message: error.message });
            }
            
            res.status(500).json({ 
                message: "Internal Server Error", 
                error: error.message 
            });
        }
    }
}

export const baseUserController = new BaseUserController;

