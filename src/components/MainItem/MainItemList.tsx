import React from 'react';
import { Wrap } from "@chakra-ui/react";
import { MainItem } from "./MainItem";
import { MindTestItem } from '../../types/common';

type MainItemListProps = {
    items: MindTestItem[];
    scroll?: boolean;
}

export const MainItemList = (props: MainItemListProps) => {
    return (
        <>
            <Wrap
                w={"100%"}
            >
                {props.items.map((item, index) => (
                    <MainItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        sharedCount={item.sharedCount}
                        playedCount={item.playedCount}
                        url={item.url}
                    />
                ))}
            </Wrap>
        </>

    )
}
