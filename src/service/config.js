import axios from "axios";

const http = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MSIsIkhldEhhblN0cmluZyI6IjA0LzA0LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MzcyNDgwMDAwMCIsIm5iZiI6MTcxNDA2NDQwMCwiZXhwIjoxNzQzODcyNDAwfQ.mCs_Uc9yOttTBIcqgCCUbpVNO-U3VhT9Azo8o6CD--E",
  },
});
export default http;
