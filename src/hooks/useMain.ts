import React from "react";
import { usePage } from "./utils/usePage";
import { useAuth } from "@/hooks/useAuth";

export const useMain = () => {
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
    const { toCreate, toSignIn } = usePage();
    const { auth } = useAuth();

    const handleClickToCreate = async () => {
        if (auth) {
            await toCreate();
        } else {
            alert("로그인 후 이용해주세요.");
            await toSignIn();
        }
    };

    return {
        selectedIndex,
        setSelectedIndex,

        handleClickToCreate
    };
};
