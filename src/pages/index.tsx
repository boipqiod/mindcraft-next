import { MainItemList } from "@/components/MainItem/MainItemList";
import { Stack, Box, HStack, Button, ButtonGroup } from "@chakra-ui/react";
import { dummy, dummyBest } from "@/utils/dummy";
import { colors, MindTestItem } from "@/types/common";
import { SelectionBadge } from "@/components/common/SelectionBadge";
import React from "react";
import { MainItemScrollList } from "@/components/MainItem/MainItemScrollList";
import { useMain } from "@/hooks/useMain";
import TestItemController from "@/common/TestItemController";
import { SmallAddIcon } from "@chakra-ui/icons";

type Props = {
    bestItem: MindTestItem[];
    items: MindTestItem[];
};

export const getStaticProps = async () => {
    const bestItem = dummyBest;
    const items = dummy;
    TestItemController.instance.setTestItemList(items);

    return {
        props: { bestItem, items }
    };
};

export const Index = ({ bestItem, items }: Props) => {
    const main = useMain();

    return (
        <>
            <Stack>
                <Box w={"100%"}>
                    <HStack justify={"space-between"} align={"end"}>
                        <SelectionBadge isSelected>추천 리스트</SelectionBadge>
                        <Button
                            size={"sm"}
                            color={"white"}
                            bg={colors.key}
                            onClick={main.toCreate}
                        >
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
                        isSelected={main.selectedIndex === 0}
                    >
                        최신
                    </SelectionBadge>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(1);
                        }}
                        isSelected={main.selectedIndex === 1}
                    >
                        베스트
                    </SelectionBadge>
                    <SelectionBadge
                        onClick={() => {
                            main.setSelectedIndex(2);
                        }}
                        isSelected={main.selectedIndex === 2}
                    >
                        최다 공유
                    </SelectionBadge>
                </ButtonGroup>

                <MainItemList items={items} />
            </Stack>
        </>
    );
};

export default Index;
