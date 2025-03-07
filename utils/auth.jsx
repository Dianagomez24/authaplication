import * as SecureStore from 'expo-secure-store';

const VALID_EMAIL = "usuario@ejemplo.com";
const VALID_PASSWORD = "password123";

export async function signIn(email, password) {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        await SecureStore.setItemAsync("userToken", "loggedIn");
        return { success: true };
    }
    return { success: false, message: "Credenciales incorrectas" };
}

export async function signOut() {
    await SecureStore.deleteItemAsync("userToken");
}

export async function isAuthenticated() {
    const token = await SecureStore.getItemAsync("userToken");
    return token !== null;
}
