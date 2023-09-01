import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import {MindTestItem} from "@/types/common";
import {useTest} from "./useTest";
import {FromUtil} from "@/utils/FromUtil";
import {usePage} from "./utils/usePage";
import {GetServerSideProps} from "next";


export const useDetail = (id: string) => {
    const [item, setItem] = useState<MindTestItem>()

    const {getTestDetail} = useTest()
    const {toMain, toBack, toPlaying} = usePage()

    useEffect(()=>{
        window.scrollTo(0,0)

        console.log(id)

        if(id && FromUtil.instance.checkNumber(id)){
            const _id = Number(id)
            const item = getTestDetail(_id)
            if(!item) {
                alert("잘못된 접근입니다.")
                toMain().then()
                return
            }

            setItem(item)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const toDetail = () => {
        toPlaying(Number(id))
    }

    return {
        item, toBack, toDetail
    };
}
