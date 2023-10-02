import { Requester } from "@/utils/Requester";
import APIResponse, { response } from "../types/api.response";
import { request } from "@/types/api.request";
import { APIConfig } from "@/types/api.config";

export class AuthService {
    static async register(email: string, password: string, nickname: string, imageUrl?: string) {
        const data: request.auth.register = {
            email: email,
            password: password,
            nickname: nickname,
            url: imageUrl
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
}
