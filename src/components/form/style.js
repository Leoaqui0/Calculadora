import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    // Estilo para o contexto do formulário
    formContext: {
        width: "98%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#808080",
        alignItems: "center",
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        marginTop: 30,
    },
    // Estilo para o formulário em si
    form: {
        width: "98%",
        height: "auto",
        marginTop: 30,
        padding: 10,
        color: "#f6f6f6",
    },
    // Estilo para as labels do formulário
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    // Estilo para os inputs do formulário
    input: {
        width: "90%",
        borderRadius: 5,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    // Estilo para o botão do formulário
    buttonCalculator: {
        borderRadius: 500,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: "90%",
        backgroundColor: "#ff8210",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    // Estilo para o texto dentro do botão do formulário
    textButtonCalculator: {
        fontSize: 20,
        color: "#000080",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});

export default styles;