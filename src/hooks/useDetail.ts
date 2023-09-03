import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import {MindTestItem} from "@/types/common";
import {useTest} from "./useTest";
import {FromUtil} from "@/utils/FromUtil";
import {usePage} from "./utils/usePage";
import {GetServerSideProps} from "next";


export const useDetail = (item: MindTestItem, id: string) => {

    const {getTestDetail} = useTest()
    const {toMain, toBack, toPlaying} = usePage()

    const toDetail = () => {
        toPlaying(Number(id))
    }

    return {
        item, toBack, toDetail
    };
}
