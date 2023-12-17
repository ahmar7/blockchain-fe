import { deleteApi, getApi, postApi, putApi, patchApi } from "./axiosService";

export const registerApi = (data) => {
  return postApi("register", data);
};
export const loginApi = (data) => {
  return postApi("login", data);
};
export const logoutApi = (data) => {
  return getApi("logout", data);
};

export const allUsersApi = (data) => {
  return getApi("allUser", data);
};
export const getCoinsUserApi = (id) => {
  return getApi(`getCoinsUser/${id}`);
};
export const signleUsersApi = (id) => {
  return getApi(`singleUser/${id}`);
};
export const updateSignleUsersApi = (id, data) => {
  return postApi(`updateSingleUser/${id}`, data);
};
export const getCoinsApi = (id) => {
  return getApi(`getCoins/${id}`);
};

export const patchCoinsApi = (id) => {
  return patchApi(`addCoins/${id}`);
};
export const updateCoinAddressApi = (id, data) => {
  return patchApi(`updateCoinAddress/${id}`, data);
};
export const createTransactionApi = (id, data) => {
  return patchApi(`createTransaction/${id}`, data);
};
export const updateTransactionApi = (id, data) => {
  return patchApi(`updateTransaction/${id}`, data);
};
export const getTransactionsApi = () => {
  return getApi(`getTransactions`);
};
export const getEachUserApi = (id, data) => {
  return getApi(`getEachUser/${id}`, data);
};
export const getUserCoinApi = (id, data) => {
  return getApi(`getUserCoin/${id}`, data);
};
