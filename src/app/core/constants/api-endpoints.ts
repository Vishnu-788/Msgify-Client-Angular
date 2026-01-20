const SERVER_DNS = "http://localhost:8080/api";

export const API_ENDPOINTS = {
  AUTH : {
    REGISTER: `${SERVER_DNS}/auth/register`,
    LOGIN: `${SERVER_DNS}/auth/login`,
  }
} as const;
