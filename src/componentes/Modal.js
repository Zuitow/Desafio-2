import { View, Text, Modal, TouchableOpacity } from "react-native";
import ImageComponent from "./ImageComponents";
import { styles } from "../style/Styles";
import React, { useState } from "react";
import Textos from "./Text";

export default function Modalll({
  vis,
  alcool,
  gasolina,
  combustivel,
  funcVisModal,
}) {
  return (
    <Modal transparent={true} animationType="fade" visible={vis}>
      <View style={styles.SecondaryContainer2}>
        <ImageComponent imgsource={require("../assets/gas.png")} />
        <Text style={styles.textfrase}>{combustivel}</Text>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 15,
          }}
        >
          Com os preços:
        </Text>
        <Textos mensagem={"Álcool: R$ "+ alcool} styles={styles.textoprecos}/>
        <Textos mensagem={"Gasolina: R$ "+ gasolina} styles={styles.textoprecos}/>    
            <TouchableOpacity
          onPress={() => funcVisModal(false)}
          style={{
            width: "65%",
            height: "12%",
            borderColor: "red",
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "red",
              textAlign: "center",
            }}
          >
            Calcular novamente
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
