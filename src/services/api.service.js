/*eslint-disable */

import endpoints from "./api";
import AxiosManager from "./AxiosManager";
export const API = {};
const ADDFUN = (endPoint) => {
  return async (data) => {
    const response = await AxiosManager.post(endPoint, data);
    return response;
  };
};

// /api/v1/dynamicEndPoint
const DELETEFUN = (endpoint) => {
  return async (id) => {
    console.log(endpoint + id);
    const response = await AxiosManager.delete(endpoint + id);
    return response;
  };
};
const UPDATEFUN = (endpoint) => {
  return async (id, data) => {
    const response = await AxiosManager.put(endpoint + id, data);
    return response;
  };
};
const GET = (endPoint) => {
  return async (id, query) => {
    let response;
    if (id) {
      response = await AxiosManager(endPoint + id);
    } else if (query) {
      response = await AxiosManager(endPoint + query);
    } else {
      response = await AxiosManager(endPoint);
    }
    return response.data;
  };
};

// const API = {}
(async () => {
  endpoints.forEach((element) => {
    const { functionName, method, path } = element;
    const METORD =
      method === "post"
        ? ADDFUN(path)
        : method === "get"
        ? GET(path)
        : method === "put"
        ? UPDATEFUN(path)
        : DELETEFUN(path);
    API[functionName] = METORD;
  });
})();
