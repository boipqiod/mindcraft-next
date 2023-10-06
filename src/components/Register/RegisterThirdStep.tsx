import { Button, FormControl, FormLabel, HStack, Image, Input, Stack } from "@chakra-ui/react";
import { colors } from "@/types/common";
import React from "react";

type props = {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    requestRegister: () => void;
    loadingRegister: boolean;
    image?: string;
};

export const RegisterThirdStep = ({
    handleInputChange,
    handleImageChange,
    requestRegister,
    loadingRegister,
    image
}: props) => {
    console.log(image);

    return (
        <>
            <Stack direction={"row"} width={"full"} justifyContent={"space-between"}>
                <Stack width={"55%"} display={"flex"} alignItems={"center"}>
                    <FormControl isRequired>
                        <FormLabel>비밀번호</FormLabel>
                        {/*비밀번호 입력*/}
                        <Input
                            placeholder="비밀번호"
                            mb={3}
                            type="password"
                            name={"password"}
                            onChange={handleInputChange}
                        />
                        <Input
                            placeholder={"비밀번호 확인"}
                            mb={3}
                            type={"password"}
                            name={"passwordCheck"}
                            onChange={handleInputChange}
                        />
                        <FormLabel>닉네임</FormLabel>
                        <Input
                            placeholder={"닉네임"}
                            mb={3}
                            type={"text"}
                            name={"nickname"}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                </Stack>

                <Stack width={"40%"} display={"flex"} alignItems={"center"} height={"full"}>
                    <FormControl>
                        <FormLabel boxSize={"full"}>
                            프로필 이미지
                            <Image
                                src={image}
                                aspectRatio={1}
                                objectFit={"cover"}
                                borderRadius={8}
                                fallbackSrc="https://via.placeholder.com/150"
                            />
                        </FormLabel>
                        {/*비밀번호 입력*/}
                        <Input hidden type="file" accept="image/*" name={"image"} onChange={handleImageChange} />
                    </FormControl>
                </Stack>
            </Stack>
            <Button
                width={"100%"}
                color={"white"}
                bg={colors.key}
                onClick={requestRegister}
                isLoading={loadingRegister}>
                회원 가입 요청
            </Button>
        </>
    );
};
