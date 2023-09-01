import React from "react"
import { Text, TextInput } from "react-native-paper"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface InputWordProps {
    categorie: string
}

export const InputWord: React.FC<InputWordProps> = ({ categorie }) => {
    const [text, setText] = React.useState("")

    return (
        <SafeAreaView>
            <View style={{}}>
                <Text>{categorie}</Text>
                <TextInput
                    mode="outlined"
                    multiline={false}
                    style={{ width: "100%" }}
                    label=""
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
            </View>
        </SafeAreaView>
    )
}
