export default class APIResponse<T> {
    statusCode: number
    message: string
    data?: T

    isSuccess: boolean
    isError: boolean
    isTokenExpired: boolean

    constructor(code: number, message: string, data?: T) {
        this.statusCode = code
        this.message = message
        this.data = data

        this.isSuccess = code === 200
        this.isError = code !== 200
        this.isTokenExpired = code === 401 || code === 403
    }
}


export namespace response {
    export namespace auth {
        export type signIn = {
            accessToken: string
            refreshToken: string
        }

        export type register = {
            id: number
            email: string
            nickname: string
            image: string
        }
        export type requestCode = {
            code: string
        }
        export type requestCodeSubmit = {
            isSuccessful: boolean
        }
    }

    export namespace test {
        export type testItem = {
            id: number
            title: string
            description: string
            queryStep: string // 총 질문 수
            userId: number
            playedCount: number
            sharedCount: number
            url: string // 이미지 url
            createdAt: string
        }[]

        export type testItemDetail = {
            testItem: testItem
            query: {
                id: number
                testId: number
                step: number
                text: string
                answer: {
                    id: number
                    queryId: number
                    text: string
                }[]
            }[]
        }
        export type testItemCreate = {
            id: number
            title: string
            description: string
            queryStep: string // 총 질문 수
            userId: number
            playedCount: number
            sharedCount: number
            url: string // 이미지 url
            createdAt: string
        }
    }
}
