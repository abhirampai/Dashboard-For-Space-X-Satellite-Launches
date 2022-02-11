import axios from "axios";

const list = () => axios.get("https://api.spacexdata.com/v3/launches?limit=15");

export const launches = {
  list,
};
