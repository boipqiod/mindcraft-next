import { Requester } from "@/utils/Requester";
import { response } from "@/types/api.response";
import { request } from "@/types/api.request";
import { APIConfig } from "@/types/api.config";

export class AuthService {
    static async register(email: string, password: string, username: string, image?: File) {
        const data: request.auth.register = {
            email: email,
            password: password,
            username: username,
            profileImage: image
        };
        return await Requester.instance.request<typeof data, response.auth.register>(APIConfig.auth.register, data);
    }

    static async signIn(email: string, password: string) {
        const data: request.auth.signIn = {
            email: email,
            password: password
        };
        return await Requester.instance.request<typeof data, response.auth.signIn>(APIConfig.auth.signIn, data);
    }

    static async requestCode(email: string) {
        const data: request.auth.requestCode = {
            email: email
        };
        return await Requester.instance.request<typeof data, any>(APIConfig.auth.requestCode, data);
    }

    static async requestCodeSubmit(email: string, code: string) {
        const data: request.auth.requestCodeSubmit = {
            email: email,
            code: code
        };
        return await Requester.instance.request<typeof data, any>(APIConfig.auth.requestCodeSubmit, data);
    }

    static async validateToken(token: string) {
        const data: request.auth.validateToken = {
            token: token
        };
        return await Requester.instance.request<typeof data, response.auth.validateToken>(
            APIConfig.auth.validateToken,
            data
        );
    }

    static async checkUsername(username: string) {
        const data: request.auth.checkUsername = {
            username: username
        };
        return await Requester.instance.request<typeof data, any>(APIConfig.auth.checkUsername, data);
    }
}
