import { useAuth } from "@/hooks/useAuth";
import { usePage } from "@/hooks/utils/usePage";
import { CreateBasicInfo } from "@/components/Create/CreateBasicInfo";
import { useEffect } from "react";
import { useCreate } from "@/hooks/useCreate";
import { Box, FormLabel, Heading, HStack, Input, Select, Stack, Tag, Text, Image } from "@chakra-ui/react";
import { QuillWrapper } from "@/components/common/QuillWrapper";
import { KeyButton } from "@/components/common/KeyButton";
import { CreateResult } from "@/components/Create/CreateReuslt";

export const Create = () => {
    const hook = useCreate();

    const { auth } = useAuth();
    const { toMain } = usePage();

    useEffect(() => {
        !auth && toMain();
    }, [auth, toMain]);

    const result = () => {
        return (
            <>
                <HStack mb={10}>
                    {hook.resultItems.map((item, index) => {
                        return (
                            <Tag
                                key={index}
                                onClick={() => hook.setResultScroll(index)}
                                cursor={"pointer"}
                                colorScheme={hook.resultShowIndex === index ? "blue" : "gray"}>
                                {index + 1}
                            </Tag>
                        );
                    })}
                </HStack>

                <Stack width={"full"} overflow={"hidden"} id={"result-item-list"}>
                    <Stack
                        direction={"row"}
                        w={`calc(100% * ${hook.resultItems.length})`}
                        alignItems={"flex-start"}
                        mb={{ base: 5, md: 10 }}>
                        {hook.resultItems.map((item, index) => {
                            return (
                                <Stack
                                    key={index}
                                    // hidden={hook.resultShowIndex !== index}
                                    id={`result-item-${index}`}
                                    w={"100%"}>
                                    <Text fontSize={"lg"}>결과 이름</Text>
                                    <Input
                                        id={"result-item-title"}
                                        onChange={hook.handleResultItemInput}
                                        data-index={index}
                                        value={hook.resultItems[index]?.title}
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
                                            {hook.basicInfo.image !== "" ? (
                                                <Image
                                                    w={"full"}
                                                    h={"full"}
                                                    objectFit={"cover"}
                                                    borderRadius={4}
                                                    src={hook.resultItems[index]?.image}
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
                                                onChange={hook.handleResultItemInput}
                                                hidden={true}
                                                type={"file"}
                                                accept="image/*"
                                                data-index={index}
                                            />
                                        </FormLabel>
                                    </Box>

                                    <Text fontSize={"lg"}>테스트 설명</Text>
                                    <QuillWrapper
                                        value={hook.resultItems[index]?.description}
                                        data-index={hook.resultShowIndex}
                                        onChange={hook.handleResultHtmlInput}
                                    />
                                </Stack>
                            );
                        })}
                    </Stack>
                </Stack>
                <KeyButton onClick={hook.next} text={"다음"} />
            </>
        );
    };

    const question = () => {
        return (
            <>
                <HStack mb={10}>
                    {hook.queryItems.map((item, index) => {
                        return (
                            <Tag
                                key={index}
                                onClick={() => hook.setQueryScroll(index)}
                                cursor={"pointer"}
                                colorScheme={hook.queryShowIndex === index ? "blue" : "gray"}>
                                {index + 1}
                            </Tag>
                        );
                    })}
                </HStack>

                <Stack
                    width={"full"}
                    overflow={"hidden"}
                    id={"query-item-list"}
                    sx={{
                        "&::-webkit-scrollbar": {
                            display: "none"
                        },
                        scrollbarWidth: "none",
                        msOverflowStyle: "none"
                    }}>
                    <Stack
                        direction={"row"}
                        w={`calc(100% * ${hook.resultItems.length})`}
                        alignItems={"flex-start"}
                        mb={{ base: 5, md: 10 }}>
                        {hook.resultItems.map((item, index) => {
                            return (
                                <Stack
                                    key={index}
                                    // hidden={hook.resultShowIndex !== index}
                                    id={`result-item-${index}`}
                                    w={"100%"}>
                                    <Text fontSize={"lg"}>질문</Text>
                                    <Input
                                        id={"query-item-text"}
                                        onChange={hook.handleQueryItemInput}
                                        data-index={index}
                                        value={hook.queryItems[index]?.text}
                                        placeholder={"질문의 내용을 작성해주세요"}
                                        mb={5}
                                    />

                                    <Text fontSize={"lg"}>답변 / 영향을 주는 결과</Text>
                                    {hook.queryItems[index]?.answers.map((answer, answerIndex) => {
                                        return (
                                            <Stack
                                                key={answerIndex}
                                                w={"full"}
                                                direction={"row"}
                                                alignItems={"center"}
                                                mb={5}>
                                                <Input
                                                    id={"query-item-answer"}
                                                    onChange={hook.handleQueryItemInput}
                                                    data-index={answerIndex}
                                                    value={hook.queryItems[index]?.answers[answerIndex]?.text}
                                                    placeholder={"질문의 내용을 작성해주세요"}
                                                />
                                                <Select
                                                    id={"query-item-result"}
                                                    onChange={hook.handleQueryItemInput}
                                                    data-index={answerIndex}>
                                                    {hook.resultItems.map((item, index) => {
                                                        return (
                                                            <option key={index} value={index}>
                                                                {item.title}
                                                            </option>
                                                        );
                                                    })}
                                                </Select>
                                            </Stack>
                                        );
                                    })}
                                </Stack>
                            );
                        })}
                    </Stack>
                </Stack>
                <KeyButton onClick={hook.next} text={"제출"} />
            </>
        );
    };

    return (
        <Stack height={"80%"} w={"full"}>
            {/*타이틀*/}
            <Heading fontSize={"3xl"} mb={5}>
                생성하기
            </Heading>
            <Stack>
                {hook.step === 0 ? (
                    <CreateBasicInfo
                        handleBasicInfoInput={hook.handleBasicInfoInput}
                        image={hook.basicInfo.image}
                        resultCount={hook.basicInfo.resultCount}
                        queryCount={hook.basicInfo.queryCount}
                        answerCount={hook.basicInfo.answerCount}
                        next={hook.next}
                    />
                ) : hook.step === 1 ? (
                    <CreateResult
                        resultItems={hook.resultItems}
                        resultShowIndex={hook.resultShowIndex}
                        setResultScroll={hook.setResultScroll}
                        handleResultItemInput={hook.handleResultItemInput}
                        handleResultHtmlInput={hook.handleResultHtmlInput}
                        next={hook.next}
                    />
                ) : hook.step === 2 ? (
                    <>{question()}</>
                ) : (
                    <></>
                )}
            </Stack>
        </Stack>
    );
};

export default Create;
