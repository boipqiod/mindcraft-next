import { Box, FormLabel, HStack, Image, Input, Stack, Text, Textarea, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { KeyButton } from "@/components/common/KeyButton";
import React from "react";

type props = {
    handleBasicInfoInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    image: string;
    resultCount: number;
    queryCount: number;
    answerCount: number;
    next: () => void;
};

export const CreateBasicInfo = ({ handleBasicInfoInput, image, resultCount, queryCount, answerCount, next }: props) => {
    return (
        <>
            <Stack>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    w={"full"}
                    alignItems={"flex-start"}
                    mb={{ base: 5, md: 10 }}>
                    {/*타이틀 및 텍스트 영역*/}
                    <Stack m={2} w={"full"}>
                        <Text fontSize={"lg"}>테스트 제목</Text>
                        <Input
                            name={"title"}
                            onChange={handleBasicInfoInput}
                            placeholder={"심리테스트 제목을 입력해주세요."}
                        />
                        <Text fontSize={"lg"}>테스트 설명</Text>
                        <Textarea
                            name={"description"}
                            onChange={handleBasicInfoInput}
                            rows={12}
                            placeholder={"심리테스트에 대한 설명을 입력해주세요."}
                        />
                    </Stack>
                    <Stack m={2} w={"full"} alignItems={"flex-start"}>
                        <Text fontSize={"lg"}>테스트 이미지</Text>
                        {/*이미지 인풋*/}
                        <FormLabel w={"full"} aspectRatio={3 / 4} borderRadius={4} bg={"gray.200"}>
                            {/*이미지 및 프리뷰*/}
                            {image !== "" ? (
                                <Image
                                    w={"full"}
                                    h={"full"}
                                    objectFit={"cover"}
                                    borderRadius={4}
                                    src={image}
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
                                name={"image"}
                                onChange={handleBasicInfoInput}
                                hidden
                                type={"file"}
                                accept="image/*"
                            />
                        </FormLabel>
                    </Stack>
                </Stack>

                {/*숫자에 대한 값*/}
                <Stack width={"full"} direction={{ base: "column", md: "row" }} mb={{ base: 5, md: 10 }}>
                    <Stack w={"full"}>
                        <HStack>
                            <Text>결과 수</Text>
                            <Tooltip mx={10} label={"테스트 진행 후 사용자에게 보여질 수 있는 결과 수 입니다.(3~5개)"}>
                                <InfoOutlineIcon />
                            </Tooltip>
                        </HStack>
                        <Input
                            aria-label={"테스트 결과 수"}
                            name={"resultCount"}
                            onChange={handleBasicInfoInput}
                            placeholder={"결과 수 (3~5개)"}
                            type={"number"}
                            max={5}
                            min={3}
                        />
                    </Stack>
                    <Stack w={"full"}>
                        <HStack>
                            <Text>질문 수</Text>
                            <Tooltip mx={10} label={"사용자가 진행할 질문 수입니다. (3~5개)"}>
                                <InfoOutlineIcon />
                            </Tooltip>
                        </HStack>
                        <Input
                            name={"queryCount"}
                            onChange={handleBasicInfoInput}
                            value={queryCount}
                            placeholder={"질문 수"}
                            type={"number"}
                            max={5}
                            min={3}
                        />
                    </Stack>
                    <Stack w={"full"}>
                        <HStack>
                            <Text>응답 수</Text>
                            <Tooltip mx={10} label={"사용자가 진행할 질문의 대답의 수입니다. (2~4개)"}>
                                <InfoOutlineIcon />
                            </Tooltip>
                        </HStack>

                        <Input
                            name={"answerCount"}
                            onChange={handleBasicInfoInput}
                            placeholder={"대답 수"}
                            type={"number"}
                            max={4}
                            min={2}
                        />
                    </Stack>
                </Stack>
            </Stack>

            <KeyButton onClick={next} text={"다음"} />
        </>
    );
};
