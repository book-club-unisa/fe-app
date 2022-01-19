import axios from "axios";

export default axios.create({
  /*UNCOMMENT BEFORE TESTING ON BROWSER
  baseURL: "http://127.0.0.1:4000",*/

  //COMMENT BEFORE TESTING ON BROWSER
  baseURL: "http://127.0.0.1:4000",
});
