import React from "react"
import { View } from "react-native"
import { Button } from "react-native-paper"
import { NavigationProp } from "@react-navigation/native"

interface HomeProps {
    navigation: NavigationProp<any, any>
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button icon="arrow-right" mode="contained" onPress={() => navigation.navigate("Room")} style={{ width: "50%" }}>
                Entrar na sala
            </Button>
        </View>
    )
}
