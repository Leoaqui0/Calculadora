// Importa os componentes React necessários
import React from "react";
import { View, Text } from "react-native";
// Define uma função chamada ResultImc que recebe um único argumento "props"
export default function ResultImc(props){
// Renderiza um elemento <View> contendo dois elementos <Text> com os dados passados através dos "props"
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}