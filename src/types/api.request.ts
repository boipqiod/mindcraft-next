export namespace request {
    export namespace auth {
        export type signIn = {
            email: string;
            password: string;
        };

        export type register = {
            email: string;
            password: string;
            username: string;
            profileImage?: File;
        };
        export type requestCode = {
            email: string;
        };
        export type requestCodeSubmit = {
            email: string;
            code: string;
        };
    }

    export namespace test {
        export type getTestDetail = {
            id: number;
        };

        export type createTest = {
            title: string;
            description: string;
            query: {
                step: number;
                text: string;
                answer: {
                    text: string;
                }[];
            }[];
        };
    }
}
