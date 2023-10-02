import { Badge, Box } from "@chakra-ui/react";
import { colors } from "@/types/common";
import React from "react";

type SelectionBadgeProps = {
    children?: React.ReactNode;
    isSelected?: boolean;
    onClick?: () => void;
};

export const SelectionBadge = (props: SelectionBadgeProps) => {
    return (
        <Box mt={10} mb={3}>
            {props.isSelected ? (
                <Badge
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.1)"}
                    fontSize={"1rem"}
                    borderRadius={4}
                    bg={colors.key}
                    color={"white"}
                    fontWeight={"bold"}>
                    {props.children}
                </Badge>
            ) : (
                <Badge
                    boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.1)"}
                    cursor={"pointer"}
                    onClick={props.onClick}
                    transition={"all 0.5s"}
                    _hover={{
                        color: "white",
                        backgroundColor: colors.key
                    }}
                    fontSize={"1rem"}
                    borderRadius={4}
                    fontWeight={"normal"}>
                    {props.children}
                </Badge>
            )}
        </Box>
    );
};
