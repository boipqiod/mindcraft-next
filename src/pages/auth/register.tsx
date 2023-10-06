import { Heading, Stack, Step, StepIcon, StepIndicator, Stepper, StepSeparator, StepStatus } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRegister } from "@/hooks/useRegister";
import { colors } from "@/types/common";
import { RegisterFirstStep } from "@/components/Register/RegisterFirstStep";
import { RegisterSecondStep } from "@/components/Register/RegisterSecondStep";
import { RegisterThirdStep } from "@/components/Register/RegisterThirdStep";
import { useAuth } from "@/hooks/useAuth";
import { usePage } from "@/hooks/utils/usePage";

export function Register() {
    const hook = useRegister();
    const activeStepText = hook.steps[hook.activeStep].description;
    const { auth } = useAuth();
    const { toMain } = usePage();

    useEffect(() => {
        auth && toMain();
    }, []);

    return (
        <Stack maxW={"400px"} mx={"auto"} my={"8vh"} direction={"column"} alignItems={"center"}>
            <Stack width={"100%"}>
                <Stepper width={"60%"} mx={"auto"} size="sm" index={hook.activeStep} gap="1">
                    {hook.steps.map((step, index) => (
                        <Step key={index}>
                            <StepIndicator>
                                <StepStatus complete={<StepIcon />} />
                            </StepIndicator>
                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
            </Stack>

            <Heading width={"full"} textAlign={"center"} my={30}>
                {activeStepText}
            </Heading>
            {hook.activeStep === 0 ? (
                <RegisterFirstStep
                    handleInputChange={hook.handleInputChange}
                    requestCodeSend={hook.requestCodeSend}
                    loadingEmailCode={hook.loadings.loadingEmailCode}
                />
            ) : hook.activeStep === 1 ? (
                <RegisterSecondStep
                    requestCodeSubmit={hook.requestCodeSubmit}
                    loadingEmailCodeSubmit={hook.loadings.loadingEmailCodeSubmit}
                />
            ) : hook.activeStep === 2 ? (
                <RegisterThirdStep
                    handleInputChange={hook.handleInputChange}
                    handleImageChange={hook.handleImageChange}
                    requestRegister={hook.requestRegister}
                    loadingRegister={hook.loadings.loadingRegister}
                    image={hook.form.image}
                />
            ) : null}
        </Stack>
    );
}

export default Register;
