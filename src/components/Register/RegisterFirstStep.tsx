import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { colors } from "@/types/common";
import React from "react";

type props = {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    requestCodeSend: () => void;
    loadingEmailCode: boolean;
};

export const RegisterFirstStep = ({ handleInputChange, requestCodeSend, loadingEmailCode }: props) => {
    return (
        <FormControl isRequired width={"80%"}>
            <FormLabel>이메일</FormLabel>
            {/*이메일 입력*/}
            <Input
                placeholder="mindcraft@example.com"
                mb={3}
                type={"email"}
                name={"email"}
                onChange={handleInputChange}
            />
            <Button
                width={"100%"}
                color={"white"}
                bg={colors.key}
                onClick={requestCodeSend}
                isLoading={loadingEmailCode}>
                인증 메일 발송
            </Button>
        </FormControl>
    );
};
