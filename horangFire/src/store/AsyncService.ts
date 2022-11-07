import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataInLocalStorage = async (key: string, value: any) => {
  try {
    const stringData = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringData);
  } catch (err) {
    console.error(err);
  }
};

export const getDataInLocalStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const removeDataInLocalStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
};

export const isInLocalStorage = async (key: string) => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys.includes(key);
  } catch (err) {
    console.error(err);
  }
};
