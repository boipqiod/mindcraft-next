import React from "react";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, SkeletonCircle } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

import logo from "../assets/mindcraft_logo.png";
import { colors } from "@/types/common";
import { useNavigation } from "@/hooks/useNavigation";

export const NavigationBar = () => {
    const hook = useNavigation();

    const MenuItems = () => {
        return hook.auth ? (
            <MenuList>
                <MenuItem>마이 페이지</MenuItem>
                <MenuItem onClick={hook.toCreate}>테스트 만들기</MenuItem>
                <MenuItem onClick={hook.signOut}>로그아웃</MenuItem>
            </MenuList>
        ) : (
            <MenuList>
                <MenuItem onClick={hook.toSignIn}>로그인</MenuItem>
            </MenuList>
        );
    };

    return (
        <Box
            pos={"fixed"}
            bg={colors.primary}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={5}
            zIndex={10}
            w={"100%"}
            maxW={800}
            h={{ base: "40px", md: "60px" }}>
            <Image width={150} objectFit={"cover"} src={logo.src} alt="logo" onClick={hook.toMain} cursor={"pointer"} />

            <Menu>
                {hook.auth ? (
                    <MenuButton boxSize={10}>
                        <Avatar width={"100%"} height={"100%"} src={hook.user?.imageUrl} />
                        {MenuItems()}
                    </MenuButton>
                ) : (
                    <Button
                        colorScheme={"none"}
                        onClick={hook.toSignIn}
                        boxSize={20}
                        color={"white"}
                        fontWeight={"bold"}>
                        로그인
                    </Button>
                )}
            </Menu>
        </Box>
    );
};
