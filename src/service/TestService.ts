import { request } from "@/types/api.request";
import { Requester } from "@/utils/Requester";
import APIResponse, { response } from "@/types/api.response";
import { APIConfig } from "@/types/api.config";
import { dummy } from "@/utils/dummy";

export default class TestService {
    static async getTestList() {
        return new APIResponse(200, "success", dummy);
        // return await Requester.instance.request<undefined, response.test.testItem>(APIConfig.test.getTestList);
    }
    static async getTestDetail(id: string) {
        const item = dummy.find((item) => item.id === Number(id));
        if (item) {
            return new APIResponse(200, "success", item);
        } else {
            return new APIResponse(404, "fail", undefined);
        }

        // const data: request.test.getTestDetail = {
        //     id: id
        // };
        // return await Requester.instance.request<typeof data, response.test.testItemDetail>(
        //     APIConfig.test.getTestDetail,
        //     data
        // );
    }
    static async createTest(
        title: string,
        description: string,
        query: { step: number; text: string; answer: { text: string }[] }[]
    ) {
        const data: request.test.createTest = {
            title: title,
            description: description,
            query: query
        };
        return await Requester.instance.request<typeof data, response.test.testItemCreate>(
            APIConfig.test.createTest,
            data
        );
    }

    static async getResult(id: string) {
        const data: request.test.getResult = {
            id: id
        };
        return await Requester.instance.request<typeof data, response.test.testResult>(APIConfig.test.getResult, data);
    }
}
