import axios from "axios";

class MainService {
  async getHome(token) {
    const { data } = await axios.get("http://localhost:4000", {
      headers: {
        authenticate: token,
      },
    });
    return data;
  }
}

export default new MainService();
