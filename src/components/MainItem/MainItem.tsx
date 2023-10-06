import { Box, Text, HStack, AspectRatio, Image, Avatar } from "@chakra-ui/react";

import i_play from "../../assets/i-play-g.png";
import i_share from "../../assets/i-share-g.png";
import { colors } from "@/types/common";
import { usePage } from "@/hooks/utils/usePage";
import { useShare } from "@/hooks/utils/useShare";
import { ContItem } from "./ContItem";
import { ExternalLinkIcon } from "@chakra-ui/icons";

type MainItemProps = {
    id: number;
    title: string;
    sharedCount: number;
    playedCount: number;
    url: string;
};

export const MainItem = (props: MainItemProps) => {
    const { toDetail } = usePage();
    const { share } = useShare();
    const onClick = () => {
        toDetail(props.id).then();
    };
    const onShare = () => {
        share(props.title, `${window.location.href}test/${props.id}`).then();
    };

    //오버레이 영역
    const overlay = () => {
        return (
            <Box
                pos={"absolute"}
                zIndex={1}
                p={2}
                width={"full"}
                display={"flex"}
                h={"10%"}
                justifyContent={"space-between"}>
                <Box
                    h={7}
                    borderRadius={4}
                    bg={"rgba(255, 255, 255, 0.5)"}
                    display={"flex"}
                    alignItems={"center"}
                    p={1}>
                    <Avatar width={5} height={5} src="" />
                    <Text fontSize={"8px"} fontWeight={"bold"} px={1}>
                        김민수
                    </Text>
                </Box>
                <Box
                    h={7}
                    w={7}
                    borderRadius={"50%"}
                    bg={colors.key}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    p={2}
                    onClick={onShare}>
                    <ExternalLinkIcon />
                </Box>
            </Box>
        );
    };

    return (
        <Box
            pos={"relative"}
            aspectRatio={{ base: 3 / 4.8, sm: 3 / 4.8 }}
            minW={{ base: "100%", sm: "calc(100%/2 - 14px)", md: "calc(100%/4 - 16px)" }}
            w={{ base: "100%", sm: "calc(100%/2 - 14px)", md: "calc(100%/4 - 16px)" }}
            boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25);"}
            alignItems={"start"}
            borderRadius={4}
            overflow={"hidden"}
            m={"5px"}
            p={0}>
            {/*오버레이 영역*/}
            {overlay()}

            {/*컨텐츠 영역*/}
            <Box width={"100%"} height={"100%"} onClick={onClick} cursor={"pointer"}>
                {/*사진 영역*/}
                <AspectRatio width={"100%"} height={"75%"} m={0} ratio={3 / 4}>
                    <Image src={props.url} alt={props.title} />
                </AspectRatio>

                {/*텍스트 영역*/}
                <Box
                    width={"100%"}
                    height={"25%"}
                    px={2}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    onClick={onClick}
                    cursor={"pointer"}>
                    {/*타이틀*/}
                    <Text isTruncated fontSize={"12px"}>
                        {props.title}
                    </Text>

                    {/*카운트*/}
                    <HStack fontSize={"xs"}>
                        {ContItem(i_play.src, props.playedCount)}
                        {ContItem(i_share.src, props.sharedCount)}
                    </HStack>
                </Box>
            </Box>
        </Box>
    );
};
