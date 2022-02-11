import axios from "axios";

const list = () => axios.get(process.env.REACT_APP_BASE_URL);

export const launches = {
  list,
};
