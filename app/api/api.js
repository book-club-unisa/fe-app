import axios from "axios";

/*UNCOMMENT FOR TESTING ON BROWSER
const apiUrl = "http://127.0.0.1:4000";*/

// COMMENT FOR TESTING ON BROWSER
const apiUrl = "http://192.168.56.1:4000";

/*unction makeFormData(obj) {
  const result = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined) {
      result.append(key, value);
    }
  });
  return result;
}*/

export default function useApi(token = undefined) {
  const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 6000,
    headers: {
      Authorization: token || undefined,
    },
  });

  /*const fd = new FormData();
  fd.append("isbn", "ciao");
  fd.append("name", "ciao");*/

  return {
    /*
    searchBooks: (query, pageSize, pageNum) =>
      axiosInstance
        .get(
          `books/search?query=${query}&pageSize=${pageSize}&pageNum=${pageNum}`
        )
        .then((response) => response.data),
        */
    /*createBookClub: (name, bookId) =>
      axiosInstance
        .post(
          "books",
          makeFormData({
            name,
            bookId,
          })
        )
        .then((response) => response.data),*/

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

    deleteInviteToBookClub: (BC_ID, USER_EMAIL) =>
      axiosInstance
        .delete(`bookclubs/${BC_ID}/delete-invite/${USER_EMAIL}`)
        .then((response) => response.data),

    getBCInvites: (BC_ID) =>
      axiosInstance
        .get(`bookclubs/${BC_ID}/invited-users`)
        .then((response) => response.data),

    getBC_ID: (bcName, founderEmail) =>
      axiosInstance
        .get(`bookclubs/getIdByName/${bcName}/${founderEmail}`)
        .then((response) => response.data),

    getReicevedInvites: () =>
      axiosInstance.get("invites/getInvites").then((response) => response.data),

    acceptInvite: (inviteID) =>
      axiosInstance
        .put(`invite/getInvites/accept/${inviteID}`)
        .then((response) => response.data),

    refuseInvite: (inviteID) =>
      axiosInstance
        .get(`invite/getInvites/refuse/${inviteID}`)
        .then((response) => response.data),

    getBookClubsByToken: () =>
      axiosInstance.get("/bookclubs/mine").then((response) => response.data),

    updateLastReadGoal: (BC_ID, numPages) =>
      axiosInstance
        .post(`/bookclubs/${BC_ID}/update-last-read-goal`, {
          numPages,
        })
        .then((response) => response.data),

    addPDL: (BC_ID, numPages) =>
      axiosInstance
        .post(`/bookclubs/${BC_ID}/addPDL`, {
          numPages,
        })
        .then((response) => response.data),

    getInvitesByFounder: (BC_ID) =>
      axiosInstance
        .get(`/bookclubs/${BC_ID}/invited-users`)
        .then((response) => response.data),

    login: (email, password) =>
      axiosInstance
        .post("users/sign-in", { email, password })
        .then((response) => response.data),
  };
}
