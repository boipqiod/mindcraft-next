import { GetServerSideProps } from "next";
import TestService from "@/service/TestService";
import { MindTestItem, MindTestResultItem } from "@/types/common";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id as string;
    const res = await TestService.getResult(id);
    if (res.isSuccess && res.data) {
        return {
            props: {
                item: res.data,
                id
            }
        };
    }

    return {
        props: {}
    };
};
const Result = (props: { item: MindTestResultItem; id: string }) => {
    return (
        <div>
            <h1>{props.item.title}</h1>
            <h2>{props.item.imageUrl}</h2>
            <h2>{props.item.description}</h2>
        </div>
    );
};
export default Result;
