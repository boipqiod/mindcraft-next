import React, { useEffect } from "react";
import { Box, Button, Heading, Input, Text, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useLogin } from "@/hooks/useLogin";
import { usePage } from "@/hooks/utils/usePage";
import { colors } from "@/types/common";

export const Login = () => {
    const hook = useLogin();
    const { toRegister, toMain } = usePage();

    useEffect(() => {
        hook.auth && toMain().then();
    }, [hook.auth, toMain]);

    return (
        <Box
            maxW={"300px"}
            mx={"auto"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Heading my={18}>로그인</Heading>
            <Text width={"100%"} textAlign={"left"}>
                이메일
            </Text>
            {/*이메일 입력*/}
            <Input
                fontSize={"1.2rem"}
                placeholder="mindcraft@example.com"
                mb={8}
                type="email"
                name={"email"}
                onChange={hook.handleInputChange}
            />
            {/*비밀버호 입력*/}
            <Text width={"100%"} textAlign={"left"}>
                비밀번호
            </Text>
            <InputGroup size="md" mb={8}>
                {/*비밀번호 입력*/}
                <Input
                    fontSize={"1.2rem"}
                    pr={"4.5rem"}
                    type={hook.showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    name={"password"}
                    onChange={hook.handleInputChange}
                />
                {/*보이기 버튼*/}
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={hook.handleClickShowPassword}>
                        {hook.showPassword ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Button onClick={hook.signIn} bg={colors.primary} width={"100%"} mb={5}>
                로그인
            </Button>
            <Button onClick={toRegister} fontWeight={"normal"} variant={"link"}>
                회원가입
            </Button>
        </Box>
    );
};

export default Login;
