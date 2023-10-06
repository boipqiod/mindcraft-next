export default class APIResponse<T> {
    statusCode: number;
    message: string;
    data?: T;

    isSuccess: boolean;
    isError: boolean;
    isTokenExpired: boolean;

    constructor(code: number, message: string, data?: T) {
        this.statusCode = code;
        this.message = message;
        this.data = data;

        this.isSuccess = code === 200;
        this.isError = code !== 200;
        this.isTokenExpired = code === 409;
    }
}

export namespace response {
    export namespace auth {
        export type signIn = {
            id: string;
            email: string;
            username: string;
            profileImageUrl: string;
            token: string;
        };

        export type register = {
            id: string;
            token: string;
        };

        export type validateToken = {
            id: string;
            email: string;
            username: string;
            profileImageUrl: string;
        };
    }

    export namespace test {
        export type testItem = {
            id: number;
            title: string;
            description: string;
            queryStep: string;
            userId: number;
            playedCount: number;
            sharedCount: number;
            url: string;
        }[];

        export type testItemDetail = {
            testItem: testItem;
            query: {
                id: number;
                testId: number;
                step: number;
                text: string;
                answer: {
                    id: number;
                    queryId: number;
                    text: string;
                }[];
            }[];
        };
        export type testItemCreate = {
            id: number;
            title: string;
            description: string;
            queryStep: string;
            userId: number;
            playedCount: number;
            sharedCount: number;
            url: string;
            createdAt: string;
        };
    }
}
