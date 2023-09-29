import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MindTestItem } from "@/types/common";

type testState = {
    testItemList: MindTestItem[];
};

type testReducer = {
    setTestItemList: (
        state: testState,
        action: PayloadAction<MindTestItem[]>
    ) => void;
};

export const testSlice = createSlice<testState, testReducer>({
    name: "test",
    initialState: {
        testItemList: []
    },
    reducers: {
        setTestItemList: (state, action) => {
            state.testItemList = action.payload;
        }
    }
});
