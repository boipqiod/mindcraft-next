import React from "react";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, SkeletonCircle } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

import logo from "../assets/mindcraft_logo.png";
import { colors } from "@/types/common";
import { logout } from "@/redux/auth/authAction";
import { usePage } from "@/hooks/utils/usePage";
import { useAuth } from "@/hooks/useAuth";
import StorageUtil from "@/utils/StorageUtil";

export const NavigationBar = () => {
    const { auth, authDispatch, user } = useAuth();
    const { toMain, toSignIn, toCreate } = usePage();

    const MenuItems = () => {
        return auth ? (
            <MenuList>
                <MenuItem>마이 페이지</MenuItem>
                <MenuItem onClick={toCreate}>테스트 만들기</MenuItem>
                <MenuItem
                    onClick={() => {
                        authDispatch(logout());
                        StorageUtil.removeToken();
                        alert("로그아웃 되었습니다.");
                        toMain().then();
                    }}>
                    로그아웃
                </MenuItem>
            </MenuList>
        ) : (
            <MenuList>
                <MenuItem onClick={toSignIn}>로그인</MenuItem>
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
            <Image width={150} objectFit={"cover"} src={logo.src} alt="logo" onClick={toMain} cursor={"pointer"} />

            <Menu>
                {auth ? (
                    <MenuButton boxSize={10}>
                        <Avatar width={"100%"} height={"100%"} src={user?.imageUrl} />
                        {MenuItems()}
                    </MenuButton>
                ) : (
                    <Button onClick={toSignIn} boxSize={20} color={"white"} fontWeight={"bold"}>
                        로그인
                    </Button>
                )}
            </Menu>
        </Box>
    );
};
