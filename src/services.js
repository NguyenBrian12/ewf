import axios from "axios";

export function GetAllMessages(search) {
  return axios.get("/searchTweet", search);
}
