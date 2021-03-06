import React from "react";
import { View } from "react-native";

import { Spacing } from "../constants/dimension";
import useLinker from "../hooks/useLinker";
import Notice from "./Notice";

const ExperimentalNotice = (props: { contractURL: string }) => {
    const onPressContract = useLinker(props.contractURL, "", "_blank");
    return (
        <View style={{ marginTop: Spacing.normal }}>
            <Notice
                text={"This feature is in beta. Read the contract yourself and use it with caution."}
                color={"orange"}
                buttonText={"View Contract"}
                onPressButton={onPressContract}
            />
        </View>
    );
};

export default ExperimentalNotice;
