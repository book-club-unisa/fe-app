import BCapi from "./BCapi";
import axios from "axios";

//const apiUrl = "http://localhost:4000";

function makeFormData(object) {
  const result = new FormData();
  object.entries().forEach(([key, value]) => {
    if (value !== undefined) {
      result.append(key, value);
    }
  });
  return result;
}

export default function useApi(token = undefined) {
  const axiosInstance = axios.create({
    baseURL: BCapi,
    timeout: 6000,
    headers: {
      Authorization: token || undefined,
    },
  });

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
        .get(`/books/searchBook/${name}`)
        .then((response) => response.data),
  };
}
