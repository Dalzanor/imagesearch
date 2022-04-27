import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ip9VINb6ag56Prokh3J3ZyrWY_jnkCWRIvkJ0fWyu2k",
  },
});
