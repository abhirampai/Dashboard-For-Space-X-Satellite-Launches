import axios from "axios";

const list = () => axios.get("https://api.spacexdata.com/v3/launches");

export const launches = {
  list,
};
