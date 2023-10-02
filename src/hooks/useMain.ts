import React from "react";
import { usePage } from "./utils/usePage";

export const useMain = () => {
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
    const { toCreate } = usePage();

    return {
        selectedIndex,
        setSelectedIndex,

        toCreate
    };
};
