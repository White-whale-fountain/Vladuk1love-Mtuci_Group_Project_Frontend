import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 1000,
  headers: { "content-type": "application/json" },
});

export const auth = {
  async login(form) {
    await instance.post(`/login`, { ...form }).then((response) => {

      console.log(response.data.access_token);
    });
  },
  async registration(form) {
    await instance.post(`/registration`, { ...form }).then((response) => {
      console.log(response.data.access_token);
    });
  },
};
