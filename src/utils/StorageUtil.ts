export default class StorageUtil {
    private static readonly TOKEN = "token";

    static setToken(token: string) {
        localStorage.setItem(StorageUtil.TOKEN, token);
    }
    static getToken() {
        return localStorage.getItem(StorageUtil.TOKEN);
    }
    static removeToken() {
        localStorage.removeItem(StorageUtil.TOKEN);
    }
}
