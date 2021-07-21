import axios from "axios";
import { endpoint } from "./endpoint.json";

const http = axios.create({
  baseURL: endpoint,
  timeout: 30000,
});

http.defaults.headers["Content-Type"] = "application/json";

const post = async (url = "", data = {}, headers) => {
  return ({ data } = await http.post(url, data, { headers: headers }));
};

export { post };
