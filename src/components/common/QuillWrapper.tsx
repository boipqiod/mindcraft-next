import dynamic from "next/dynamic";

export const QuillWrapper = dynamic(() => import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>
});
