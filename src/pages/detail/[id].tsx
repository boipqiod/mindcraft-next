import { Button, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useDetail } from "@/hooks/useDetail";
import { ContItem } from "@/components/MainItem/ContItem";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { colors, MindTestItem } from "@/types/common";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import i_play from "@/assets/i-play-g.png";
import i_share from "@/assets/i-share-g.png";
import TestService from "@/service/TestService";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id as string;
    const _id = parseInt(id);
    const res = await TestService.getTestDetail(_id);
    if (res.isSuccess && res.data) {
        return {
            props: {
                item: res.data,
                id
            }
        };
    }

    return {
        props: {}
    };
};

export const Detail = (props: { item: MindTestItem; id: string }) => {
    const hook = useDetail(props.item, props.id);

    return (
        <>
            {/*메타 태그 변경*/}
            <Head>
                <title>{`MindCraft: ${hook.item?.title}`}</title>
                <meta property="og:description" content={hook.item?.description} />
                <meta property="og:image" content={hook.item?.url} />
            </Head>

            {/*본문*/}
            <Stack pos={"relative"} alignItems={"center"}>
                {/*뒤로가기 버튼*/}
                <Button pos={"absolute"} left={0} colorScheme={"transparent"} color={"black"} onClick={hook.toBack}>
                    <ChevronLeftIcon />
                </Button>

                {/*제목*/}
                <Heading width={"full"} textAlign={"center"} mb={10}>
                    {hook.item?.title}
                </Heading>

                {/*상세정보 컨테이너*/}
                <Stack width={{ base: "90%", md: "300px" }} alignItems={"center"}>
                    {/*디테일 이미지*/}
                    <Image
                        src={hook.item?.url}
                        aspectRatio={3 / 4}
                        borderRadius={4}
                        objectFit="cover"
                        alt={hook.item?.title}
                    />

                    {/*디테일 설명*/}
                    <Text p={5} mb={10} textAlign={"center"}>
                        {hook.item?.description}
                    </Text>

                    {/*플레이, 공유 횟수*/}
                    <HStack fontSize={"xs"} mb={3}>
                        {ContItem(i_play.src, hook.item?.playedCount ?? 0)}
                        {ContItem(i_share.src, hook.item?.sharedCount ?? 0)}
                    </HStack>

                    <Button bg={colors.key} width={"100%"} mb={5} onClick={hook.toDetail}>
                        시작하기
                    </Button>
                    <Button onClick={hook.onShare} fontWeight={"normal"} variant={"link"}>
                        공유하기
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};

export default Detail;
