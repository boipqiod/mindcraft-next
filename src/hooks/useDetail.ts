import { MindTestItem } from "@/types/common";
import { usePage } from "./utils/usePage";
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
