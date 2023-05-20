// Importação das dependências necessárias para o componente
import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultImc from "./resultImc/index.js";
import styles from "./style.js";
// Definição do componente "Form" como padrão para exportação
export default function Form(){
    // Criação de estados iniciais utilizando o useState
    const[NotaUm, setNotaUm]=useState(null) // estado para armazenar a nota
    const[NotaDois, setNotaDois]=useState(null) // estado para armazenar a nota
    const[NotaTres, setNotaTres]=useState(null) // estado para armazenar a nota
    const[NotaQuatro, setNotaQuatro]=useState(null) // estado para armazenar a nota
    const[Bim, setBim]=useState(null) // estado para armazenar o  BIM é BIMESTRE
    const[messageImc, setMessageImc]=useState("Aguardando Valores...") //estado para armazenar a mensagem de resultado do cálculo
    const[imc, setImc]=useState(null) // estado para armazenar o valor do IMC calculado
    const[textButton, setTextButton]=useState("Calcular Media") // estado para armazenar o texto do botão
    // Função responsável por realizar o cálculo do IMC
    function imcCalculator(){
        return setImc(((parseFloat(NotaUm)+parseFloat(NotaDois)+parseFloat(NotaTres)+parseFloat(NotaQuatro))/Bim).toFixed(2))
    }
    // Função responsável por validar se os valores de peso e altura foram preenchidos antes de realizar o cálculo
    function validationImc(){
        if(Bim != null && NotaUm != null && NotaDois != null && NotaTres != null && NotaQuatro != null){
            imcCalculator()
            setNotaUm(null)
            setNotaDois(null)
            setNotaTres(null)
            setNotaQuatro(null)
            setBim(null)
            setMessageImc("Sua média é igual a:")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular Media")
        setMessageImc("PREENCHA AS NOTAS E BIMESTRE PARA CALCULAR!")
    }
    // Retorno do componente "Form" que inclui o formulário e o componente personalizado "ResultImc"
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
            <Text style={styles.formLabel}>Nota1</Text>
            <TextInput style={styles.input} onChangeText={setNotaUm} value={NotaUm}placeholder="Nota do seu primeiro bimestre" keyboardType="numeric"/>

            <Text style={styles.formLabel}>Nota2</Text>
            <TextInput style={styles.input} onChangeText={setNotaDois} value={NotaDois}placeholder="Nota do seu segundo bimestre, caso não tenha coloque 0" keyboardType="numeric"/>

            <Text style={styles.formLabel}>Nota3</Text>
            <TextInput style={styles.input} onChangeText={setNotaTres} value={NotaTres}placeholder="Nota do seu terceiro bimestre, caso não tenha coloque 0" keyboardType="numeric"/>

            <Text style={styles.formLabel}>Nota4</Text>
            <TextInput style={styles.input} onChangeText={setNotaQuatro} value={NotaQuatro}placeholder="Nota do seu quarto bimestre, caso não tenha coloque 0" keyboardType="numeric"/>
            <Text style={styles.formLabel}>BIMESTRE</Text>
            <TextInput style={styles.input} onChangeText={setBim} value={Bim} placeholder="Quantidade(s) de bimestre(s) que teve" keyboardType="numeric"/>
            <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationImc()}}/>
            <Text style={styles.textButtonCalculator}>
            {textButton}</Text>
            <TouchableOpacity/>
            
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}
