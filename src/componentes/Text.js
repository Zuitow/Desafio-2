import { Text } from "react-native";

export default function Textos({ mensagem, styles }) {
    return (
        <Text style={styles}>{mensagem}</Text>
    )
}