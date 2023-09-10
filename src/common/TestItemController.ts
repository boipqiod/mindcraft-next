import {MindTestItem} from "@/types/common";
import {dummy} from "@/utils/dummy";
import TestService from "@/service/TestService";

export default class TestItemController{
    static instance: TestItemController = new TestItemController()


    private testItemList: MindTestItem[] = []

    isInit = false

    fetchTestItemList = async () => {

        // 값 대응 변환
        const testItemList: MindTestItem[] = []
        const res = await TestService.getTestList()
        if(res.isSuccess && res.data) {

            res.data.forEach((item) => {
                const testItem: MindTestItem = {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    sharedCount: item.sharedCount,
                    playedCount: item.playedCount,
                    url: item.url,
                    userId: item.userId,
                }
                testItemList.push(testItem)
            })

            this.setTestItemList(testItemList)
            this.isInit = true
        }
    }

    setTestItemList = (itemList: MindTestItem[]) => {
        this.testItemList = itemList
    }
    getTestItemList = (): MindTestItem[] => {
        if(!this.isInit) this.testItemList = dummy
        return this.testItemList
    }

}