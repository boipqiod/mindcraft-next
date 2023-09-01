import {MainItemList} from "@/components/MainItem/MainItemList";
import {Stack, Box, HStack, Button} from "@chakra-ui/react";
import {dummy, dummyBest} from "@/utils/dummy";
import {colors, MindTestItem} from "@/types/common";
import {SelectionBadge} from "@/components/common/SelectionBadge";
import React from "react";
import {MainItemScrollList} from "@/components/MainItem/MainItemScrollList";
import {useMain} from "@/hooks/useMain";
import Head from "next/head";

type Props = {
    bestItem: MindTestItem[];
    items: MindTestItem[];
};

export const getStaticProps = async () => {
    const bestItem = dummyBest
    const items = dummy

    return {
        props: { bestItem, items }
    };
};


export const Index = ( { bestItem, items }: Props ) => {
    const main = useMain()

    return (
        <>
            <Stack>
                <Box
                    w={"100%"}
                >
                    <HStack justify={"space-between"} align={"end"}>
                        <SelectionBadge isSelected>추천 리스트</SelectionBadge>
                        <Button
                            color={"white"}
                            mb={3}
                            p={0}
                            bg={colors.key}
                            onClick={main.toCreate}
                        >+</Button>
                    </HStack>
                    <MainItemScrollList items={bestItem}/>
                </Box>

                <HStack>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(0);
                        }}
                        isSelected={main.selectedIndex === 0}>최신</SelectionBadge>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(1);
                        }}
                        isSelected={main.selectedIndex === 1}>베스트</SelectionBadge>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(2);
                        }}
                        isSelected={main.selectedIndex === 2}>최다 공유</SelectionBadge>
                </HStack>

                <MainItemList items={items}/>

            </Stack>
        </>
    )
}

export default Index
