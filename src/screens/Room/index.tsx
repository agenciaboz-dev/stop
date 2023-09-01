import React, { useState } from "react"
import { View, Text, Button } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { InputWord } from "./InputWord"

interface RoomProps {
    navigation: NavigationProp<any, any>
}

export const Room: React.FC<RoomProps> = ({ navigation }) => {
    const categories = [
        { id: 0, name: "Animal" },
        { id: 1, name: "Comida" },
        { id: 2, name: "CEP" },
        { id: 3, name: "Objeto" },
    ]

    const [randomLetter, setRandomLetter] = useState("")
    const [isVisible, setIsVisible] = useState(true)
    const [categoryWords, setCategoryWords] = useState(categories.map(() => "")) // Estado para rastrear as palavras inseridas

    const handlePickLetter = () => {
        // Gera um número aleatório entre 0 e 25 (correspondente às letras do alfabeto)
        const randomIndex = Math.floor(Math.random() * 26)

        // Converte o índice em uma letra maiúscula do alfabeto
        const letter = String.fromCharCode(65 + randomIndex)

        setRandomLetter(letter)
        setIsVisible(false)
    }
    const handleWordChange = (index: number, word: string) => {
        const newCategoryWords = [...categoryWords]
        newCategoryWords[index] = word
        setCategoryWords(newCategoryWords)
    }
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 30 }}>
            <View style={{ flex: 0.8, gap: 30, alignItems: "center" }}>
                <Text style={{ color: "orange", fontWeight: "bold", fontSize: 80 }}>{randomLetter}</Text>
                <View style={{ flex: 0.7, flexDirection: "column" }}>
                    {categories.map((categorie) => (
                        <InputWord key={categorie.id} categorie={categorie.name} />
                    ))}
                </View>
                {isVisible && <Button title="Iniciar Partida" onPress={() => handlePickLetter()} />}
                <Button title="STOP" color={"red"} />
            </View>
        </View>
    )
}
