import { verificationService } from "../../services/mailer/VerificationService.js";

export class EmailVerifyController {

    async sendCode(req, res) {
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(400).json({ message: "Email is required" });
            }

            const result = await verificationService.sendCode(email);
            return res.status(200).json(result);

        } catch (error) {
            console.error("Error sending verification code:", error);
            return res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    }

    async confirmCode(req, res) {
        try {
            const { email, code } = req.body;

            if (!email || !code) {
                return res.status(400).json({ message: "Email and code are required" });
            }

            const result = await verificationService.confirmCode(email, code);
            return res.status(200).json(result);

        } catch (error) {
            console.error("Error confirming verification code:", error);
            return res.status(400).json({ message: error.message });
        }
    }
}

export const emailVerifyController = new EmailVerifyController();
