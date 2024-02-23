import axios from "axios";

export interface FetchDataRes<T> {
  results: T[];
}

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});
