import { SET_EMPLOYEES, SET_USER_DATA, SET_TOAST, SET_LANG } from "./common";

export const actionEmployees = (employees) => {
  return { type: SET_EMPLOYEES, payload: employees };
};
export const actionLang = (lang) => {
  return { type: SET_LANG, payload: lang };
};
export const actionUserData = (userData) => {
  return { type: SET_USER_DATA, payload: userData };
};
export const actionToast = (messageData) => {
  return { type: SET_TOAST, payload: messageData };
};
