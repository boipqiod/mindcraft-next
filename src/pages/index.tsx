import { MainItemList } from "@/components/MainItem/MainItemList";
import { Stack, Box, HStack, Button, ButtonGroup } from "@chakra-ui/react";
import { colors, MindTestItem } from "@/types/common";
import { SelectionBadge } from "@/components/common/SelectionBadge";
import React from "react";
import { GetServerSideProps } from "next";
import { MainItemScrollList } from "@/components/MainItem/MainItemScrollList";
import { useMain } from "@/hooks/useMain";
import { SmallAddIcon } from "@chakra-ui/icons";
import TestService from "@/service/TestService";
import Head from "next/head";
import image from "@/assets/demo.jpg";

type Props = {
    bestItem: MindTestItem[];
    items: MindTestItem[];
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await TestService.getTestList();

    if (res.isSuccess && res.data) {
        return {
            props: {
                bestItem: res.data,
                items: res.data
            }
        };
    }

    return {
        props: {}
    };
};

export const Index = ({ bestItem, items }: Props) => {
    const main = useMain();

    return (
        <>
            <Head>
                <meta name="description" content="친구들과 함께하는 테스트 만들기 서비스, 마인드크래프트" />
                <meta property="og:description" content="친구들과 함께하는 테스트 만들기 서비스, 마인드크래프트" />
                <meta property="og:image" content={image.src} />
            </Head>

            <Stack>
                <Box w={"100%"}>
                    <HStack justify={"space-between"} align={"end"}>
                        <SelectionBadge isSelected>추천 리스트</SelectionBadge>
                        <Button size={"sm"} color={"white"} bg={colors.key} onClick={main.toCreate}>
                            <SmallAddIcon />
                        </Button>
                    </HStack>
                    <MainItemScrollList items={bestItem} />
                </Box>

                <ButtonGroup>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(0);
                        }}
                        isSelected={main.selectedIndex === 0}>
                        최신
                    </SelectionBadge>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(1);
                        }}
                        isSelected={main.selectedIndex === 1}>
                        베스트
                    </SelectionBadge>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(2);
                        }}
                        isSelected={main.selectedIndex === 2}>
                        최다 공유
                    </SelectionBadge>
                </ButtonGroup>

                <MainItemList items={items} />
            </Stack>
        </>
    );
};

export default Index;
