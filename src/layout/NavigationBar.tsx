import React from "react";
import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

import logo from "../assets/mindcraft_logo.png";
import { colors } from "@/types/common";
import { logout } from "@/redux/auth/authAction";
import { usePage } from "@/hooks/utils/usePage";
import { useAuth } from "@/hooks/useAuth";

export const NavigationBar = () => {
    const { auth, authDispatch, user } = useAuth();
    const { toMain, toSignIn } = usePage();

    const MenuItems = () => {
        return auth ? (
            <MenuList>
                <MenuItem>마이 페이지</MenuItem>
                <MenuItem>테스트 만들기</MenuItem>
                <MenuItem
                    onClick={() => {
                        authDispatch(logout());
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
            <Image width={150} objectFit="scale-down" src={logo.src} alt="logo" onClick={toMain} cursor={"pointer"} />

            <Menu>
                <MenuButton boxSize={10}>
                    <Avatar width={"100%"} height={"100%"} src={user?.imageUrl} />
                </MenuButton>
                {MenuItems()}
            </Menu>
        </Box>
    );
};
