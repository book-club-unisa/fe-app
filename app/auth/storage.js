import * as SecureStore from "expo-secure-store";

const tokenKey = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(tokenKey, authToken);
  } catch (error) {
    console.log("Error storing token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(tokenKey);
  } catch (error) {
    console.log("Error getting token", error);
  }
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(tokenKey);
  } catch (error) {
    console.log("Error removing token", error);
  }
};

const emailKey = "authEmail";

const storeEmail = async (authEmail) => {
  try {
    await SecureStore.setItemAsync(emailKey, authEmail);
  } catch (error) {
    console.log("Error storing email", error);
  }
};

const getEmail = async () => {
  try {
    return await SecureStore.getItemAsync(emailKey);
  } catch (error) {
    console.log("Error getting email", error);
  }
};

const removeEmail = async () => {
  try {
    return await SecureStore.deleteItemAsync(emailKey);
  } catch (error) {
    console.log("Error removing email", error);
  }
};

const firstNameKey = "authFirstName";

const storeFirstName = async (authFirstName) => {
  try {
    await SecureStore.setItemAsync(firstNameKey, authFirstName);
  } catch (error) {
    console.log("Error storing name", error);
  }
};

const getFirstName = async () => {
  try {
    return await SecureStore.getItemAsync(firstNameKey);
  } catch (error) {
    console.log("Error getting name", error);
  }
};

const removeFirstName = async () => {
  try {
    return await SecureStore.deleteItemAsync(firstNameKey);
  } catch (error) {
    console.log("Error removing name", error);
  }
};

const lastNameKey = "authLastName";

const storeLastName = async (authLastName) => {
  try {
    await SecureStore.setItemAsync(lastNameKey, authLastName);
  } catch (error) {
    console.log("Error storing name", error);
  }
};

const getLastName = async () => {
  try {
    return await SecureStore.getItemAsync(lastNameKey);
  } catch (error) {
    console.log("Error getting name", error);
  }
};

const removeLasttName = async () => {
  try {
    return await SecureStore.deleteItemAsync(lastNameKey);
  } catch (error) {
    console.log("Error removing name", error);
  }
};

export default {
  getToken,
  removeToken,
  storeToken,
  getEmail,
  removeEmail,
  storeEmail,
  getFirstName,
  storeFirstName,
  removeFirstName,
  getLastName,
  storeLastName,
  removeLasttName,
};
