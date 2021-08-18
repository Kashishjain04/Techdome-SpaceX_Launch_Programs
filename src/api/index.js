import axios from "axios";

const baseURL = "https://api.spacexdata.com/v3/launches";

export const mainInstance = axios.create({ baseURL, params: { limit: 100 } });
