import { View, Text, StatusBar } from "react-native"
import React from "react"
import { useIsFocused } from "@react-navigation/core"

export const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused()

  if (!isFocused) return null
  return <StatusBar animated={true} {...props} />
}
