import React, { useState } from "react";
import { Image, View, ViewStyle } from "react-native";

import Token from "../types/Token";

const TokenLogo = (props: {
    token: Token;
    small?: boolean;
    replaceWETH?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
}) => {
    const [error, setError] = useState(false);
    const size = props.small ? 22 : 27;
    const placeholder = require("../../assets/empty-token.png");
    const ETH = require("../../assets/ETH.png");
    const source = props.replaceWETH && props.token.symbol === "WETH" ? ETH : { uri: props.token.logoURI };
    return (
        <View
            style={[
                {
                    width: size,
                    height: size,
                    backgroundColor: props.disabled ? "grey" : "white",
                    borderRadius: size / 2
                },
                props.style
            ]}>
            <Image
                source={error ? placeholder : source}
                onError={() => setError(true)}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: size / 2,
                    opacity: props.disabled ? 0.5 : 1
                }}
            />
        </View>
    );
};

export default TokenLogo;
