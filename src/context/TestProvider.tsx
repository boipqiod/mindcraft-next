import React, {useEffect} from "react";
import {MindTestItem, withChildren} from "@/types/common";
import {dummy} from "@/utils/dummy";
import StorageUtil from "@/utils/StorageUtil";

type testProvider = {
    testItemList: MindTestItem[],
    setTestItemList: React.Dispatch<React.SetStateAction<MindTestItem[]>>
}

export const TestContext = React.createContext<testProvider | undefined>(undefined);

export const TestProvider = ({children}: withChildren) => {
    const [testItemList, setTestItemList] = React.useState<MindTestItem[]>([...dummy]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            StorageUtil.saveTestItemList(testItemList)
        }

    },[testItemList])

    return (
        <TestContext.Provider value={{
            testItemList, setTestItemList
        }}>
            {children}
        </TestContext.Provider>
    )
}

