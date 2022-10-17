import React, { Animated, View } from "react-native";
import { TrashIcon } from "../../config/SVG";

export const swipeToDelete = (progress: any, dragX: any) => {
    const translateX = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [192, 0]
    });

    return (
        <View className="w-[192px] flex-row">
            <Animated.View style={{transform: [{translateX}]}} className="bg-red-900 w-[192px]">
                <TrashIcon />
            </Animated.View>
        </View>
    )
}