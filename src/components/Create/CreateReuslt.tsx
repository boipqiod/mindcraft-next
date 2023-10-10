import { Box, FormLabel, HStack, Image, Input, Stack, Tag, Text } from "@chakra-ui/react";
import { QuillWrapper } from "@/components/common/QuillWrapper";
import { KeyButton } from "@/components/common/KeyButton";
import { MindTestResultItem } from "@/types/common";
import React from "react";

type props = {
    next: () => void;
    handleResultItemInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleResultHtmlInput: (value: string) => void;
    setResultScroll: (index: number) => void;
    resultItems: MindTestResultItem[];
    resultShowIndex: number;
};

export const CreateResult = (props: props) => {
    return (
        <>
            <HStack mb={10}>
                {props.resultItems.map((item, index) => {
                    return (
                        <Tag
                            key={index}
                            onClick={() => props.setResultScroll(index)}
                            cursor={"pointer"}
                            colorScheme={props.resultShowIndex === index ? "blue" : "gray"}>
                            {index + 1}
                        </Tag>
                    );
                })}
            </HStack>

            <Stack width={"full"} overflow={"hidden"} id={"result-item-list"}>
                <Stack
                    direction={"row"}
                    w={`calc(100% * ${props.resultItems.length})`}
                    alignItems={"flex-start"}
                    mb={{ base: 5, md: 10 }}>
                    {props.resultItems.map((item, index) => {
                        return (
                            <Stack
                                key={index}
                                // hidden={hook.resultShowIndex !== index}
                                id={`result-item-${index}`}
                                w={"100%"}>
                                <Text fontSize={"lg"}>결과 이름</Text>
                                <Input
                                    id={"result-item-title"}
                                    onChange={props.handleResultItemInput}
                                    data-index={index}
                                    value={props.resultItems[index]?.title}
                                    placeholder={"심리테스트 제목을 입력해주세요."}
                                    mb={5}
                                />
                                <Text fontSize={"lg"}>결과 이미지</Text>
                                {/*이미지 인풋*/}
                                <Box mb={5}>
                                    <FormLabel
                                        m={"auto"}
                                        maxW={{ base: "full", md: "200px" }}
                                        aspectRatio={3 / 4}
                                        borderRadius={4}
                                        bg={"gray.200"}>
                                        {/*이미지 및 프리뷰*/}
                                        {item.image !== "" ? (
                                            <Image
                                                w={"full"}
                                                h={"full"}
                                                objectFit={"cover"}
                                                borderRadius={4}
                                                src={props.resultItems[index]?.image}
                                                alt={"심리테스트 이미지"}
                                            />
                                        ) : (
                                            <Box
                                                w={"full"}
                                                h={"full"}
                                                display={"flex"}
                                                alignItems={"center"}
                                                justifyContent={"center"}
                                                textAlign={"center"}
                                                color={"gray.400"}>
                                                <Text>
                                                    이미지를 업로드해주세요.
                                                    <br />
                                                    (3:4 비율 권장)
                                                </Text>
                                            </Box>
                                        )}

                                        <Input
                                            id={"result-item-image"}
                                            onChange={props.handleResultItemInput}
                                            hidden={true}
                                            type={"file"}
                                            accept="image/*"
                                            data-index={index}
                                        />
                                    </FormLabel>
                                </Box>

                                <Text fontSize={"lg"}>테스트 설명</Text>
                                <QuillWrapper
                                    value={props.resultItems[index]?.description}
                                    data-index={props.resultShowIndex}
                                    onChange={props.handleResultHtmlInput}
                                />
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>
            <KeyButton onClick={props.next} text={"다음"} />
        </>
    );
};
