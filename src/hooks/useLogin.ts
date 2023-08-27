import React, {useEffect} from "react";
import {AuthContext} from "../context/AuthProvider";
import {usePage} from "./utils/usePage";
import {AuthService} from "../service/AuthService";

export const useLogin = () => {
    const {auth, setAuth} = React.useContext(AuthContext)!
    const [show, setShow] = React.useState(false)
    const {toMain} = usePage()


    useEffect(() => {
        auth && toMain()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = () => setShow(!show)

    const signIn = async (email: string, password: string) => {

        const res = await AuthService.signIn(email, password)
        if(res.isSuccess){
            setAuth(true)
            toMain()
        } else {
            //TODO: 각 에러에 맞는 메시지 출력
            alert(`로그인이 실패하였습니다.\n${res.message}`)
        }
    }

    const signOut = () => {

    }

    return {
        show, setShow,

        handleClick,
        signIn, signOut
    }
}
