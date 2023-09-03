import {MindTestItem} from "@/types/common";

export default class StorageUtil{
    static saveTestItemList = (itemList: MindTestItem[]) => {
        window.sessionStorage.setItem("testItemList", JSON.stringify(itemList))
    }

    static getTestItemList = (): MindTestItem[] => {
        const testItemList = window.sessionStorage.getItem("testItemList")
        if(testItemList){
            return JSON.parse(testItemList)
        }else{
            return []
        }
    }
}