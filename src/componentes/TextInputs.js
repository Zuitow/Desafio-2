import { Text, View, TextInput } from "react-native";
import { styles } from "../style/Styles";
import React, { useState } from "react";
import Textos from "./Text";

export default function TextInputs({ setGas, setAlc, alcool, gasolina }) {
  // TEXTOS
  const textogasolina = "Gasolina (preço por litro):";

  return (
    <View>
      <Textos
        mensagem={"Álcool (preço por litro):"}
        styles={styles.textoinputs}
      />
      <TextInput
        style={styles.inputs1}
        keyboardType="numeric"
        onChangeText={setAlc}
        value={alcool}
      />
      <Textos
        mensagem={"Gasolina (preço por litro):"}
        styles={styles.textoinputs}
      />{" "}
      <TextInput
        style={styles.inputs1}
        keyboardType="numeric"
        onChangeText={setGas}
        value={gasolina}
      />
    </View>
  );
}
