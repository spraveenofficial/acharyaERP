const baseUrl =
  process.env.REACT_APP_MODE === "dev"
    ? "http://localhost:4001/v1/api"
    : "http://localhost:4001/v1/api";

export default baseUrl;
