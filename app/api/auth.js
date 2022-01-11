import BCapi from "./BCapi";

const login = (email, password) =>
  BCapi.post("users/sign-in", { email, password });

export default {
  login,
};
