import { FormControl, FormLabel, HStack, PinInput, PinInputField, Stack } from "@chakra-ui/react";
import React from "react";

type props = {
    requestCodeSubmit: (code: string) => void;
    loadingEmailCodeSubmit: boolean;
};

export const RegisterSecondStep = ({ requestCodeSubmit, loadingEmailCodeSubmit }: props) => {
    return (
        <Stack>
            {/*이메일 코드 입력*/}
            <FormControl display={"flex"} flexDirection={"column"} justifyContent={"center"} isRequired>
                <FormLabel>인증 번호</FormLabel>
                <HStack>
                    <PinInput onComplete={requestCodeSubmit} isDisabled={loadingEmailCodeSubmit}>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
            </FormControl>
        </Stack>
    );
};
