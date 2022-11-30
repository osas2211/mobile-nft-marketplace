import { TouchableOpacity, View, Text, Image } from "react-native"
import React from "react"
import { COLORS, SHADOWS, SIZES, assets } from "../constants"

export const CircleButton = ({ imgURL, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        ...props,
        backgroundColor: COLORS.white,
        width: 40,
        height: 40,
        alignItems: "center",
        borderRadius: SIZES.extraLarge,
        justifyContent: "center",
        ...SHADOWS.light,
      }}
      onPress={handlePress}
    >
      <Image
        source={assets.heart}
        resizeMode="cover"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  )
}

export const RecButton = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  )
}
