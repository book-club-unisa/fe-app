import BCapi from "./BCapi";
import axios from "axios";

const apiUrl = "http://127.0.0.1:4000";

function makeFormData(obj) {
  const result = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined) {
      result.append(key, value);
    }
  });
  return result;
}

export default function useApi(token = undefined) {
  const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 6000,
    headers: {
      Authorization: token || undefined,
    },
  });

  const fd = new FormData();
  fd.append("isbn", "ciao");
  fd.append("name", "ciao");

  return {
    /*
    searchBooks: (query, pageSize, pageNum) =>
      axiosInstance
        .get(
          `books/search?query=${query}&pageSize=${pageSize}&pageNum=${pageNum}`
        )
        .then((response) => response.data),
        */

    createBookClub: (name, bookId) =>
      axiosInstance
        .post(
          "books",
          makeFormData({
            name,
            bookId,
          })
        )
        .then((response) => response.data),

    searchBooksByName: (name) =>
      axiosInstance
        .get(`books/searchBook/${name}`)
        .then((response) => response.data),

    getUserDataByToken: () =>
      axiosInstance.get("users/emailByToken").then((response) => response.data),

    createBookClub: (isbn, name) =>
      axiosInstance
        .post("bookclubs", {
          isbn,
          name,
        })
        .then((response) => response.data),

    inviteUserToBookClub: (BC_ID, USER_EMAIL) =>
      axiosInstance
        .post(`bookclubs/${BC_ID}/invite-user/${USER_EMAIL}`)
        .then((response) => response.data),
  };
}
