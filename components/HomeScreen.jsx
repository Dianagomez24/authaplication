import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { signOut } from "../utils/auth";

export default function HomeScreen({ navigation }) {
    const handleLogout = async () => {
        await signOut();
        navigation.replace("Login");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido 👋</Text>
            <Button title="Cerrar sesión" onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 }
});
