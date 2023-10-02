import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MindTestItem } from "@/types/common";
import { useTest } from "./useTest";
import { FromUtil } from "@/utils/FromUtil";
import { usePage } from "./utils/usePage";
import { GetServerSideProps } from "next";
import { useShare } from "@/hooks/utils/useShare";

export const useDetail = (item: MindTestItem, id: string) => {
    const { toBack, toPlaying } = usePage();
    const { share } = useShare();

    const onShare = () => {
        if (!item) return;
        share(item.title ?? "MindCraft", `${window.location.href}`).then();
    };

    const toDetail = async () => {
        toPlaying(Number(id)).then();
    };

    return {
        item,
        toBack,
        toDetail,
        onShare
    };
};
