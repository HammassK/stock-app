const key = "authToken";

const storeToken = (authToken) => localStorage.setItem(key, authToken);

const getToken = () => localStorage.getItem(key);

const removeToken = () => localStorage.removeItem(key);

export default {
  getToken,
  removeToken,
  storeToken,
};
