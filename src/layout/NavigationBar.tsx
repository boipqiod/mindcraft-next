import React from "react";
import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

import logo from "../assets/mindcraft_logo.png";
import { colors } from "@/types/common";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { logout } from "@/redux/auth/authAction";
import { usePage } from "@/hooks/utils/usePage";

export const NavigationBar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
    const { toMain, toSignIn } = usePage();

    const MenuItems = () => {
        return auth ? (
            <MenuList>
                <MenuItem>마이 페이지</MenuItem>
                <MenuItem>테스트 만들기</MenuItem>
                <MenuItem
                    onClick={() => {
                        dispatch(logout());
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
                    <Avatar width={"100%"} height={"100%"} src="https://bit.ly/broken-link" />
                </MenuButton>

                {MenuItems()}
            </Menu>
        </Box>
    );
};
