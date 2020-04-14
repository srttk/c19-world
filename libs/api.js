import axios from "axios";
const BASE_URL = "https://covid19.mathdro.id/api";

const HttpClient = axios.create({
  baseURL: BASE_URL,
});

export const getInfo = async () => {
  const res = await HttpClient.get("");
  return res.data;
};
