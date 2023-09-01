import React from "react"
import { StatusBar } from "expo-status-bar"
import { PaperProvider } from "react-native-paper"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Router } from "./src/Router"

function App() {
    return (
        <PaperProvider>
            <StatusBar style="auto" hidden />
            <Router />
        </PaperProvider>
    )
}

export default App
