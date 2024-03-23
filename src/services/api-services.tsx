import axios from 'axios';
import _ from 'lodash';
import {CallAPIReqType} from '../types/api-req-type';
import { BASE_URL } from '../constants';

/**
 * Call API Method with provided apiURL, authToken, method and data
 * @param apiURL - API endpoint
 * @param method - HTTP method default method is GET
 * @param data - Request body
 * @returns {Promise<AxiosResponse<T>>}
 */
export const callAPI = async ({
  apiURL,
  method = 'GET',
  data = {},
  authTokenRequired = false,
  isBaseURLRequired = true,
}: CallAPIReqType): Promise<any> => {
  let headers: any = {'Content-Type': 'application/json'};
  if (authTokenRequired) {
    // if authTokenRequired we can get it from local storage or async storage
    headers['Authorization'] = 'Bearer ' + 'AuthToken';
  }
  let axiosObj: any = {
    method,
    url: isBaseURLRequired ? BASE_URL + apiURL : apiURL,
  };
  if (method === 'POST') {
    axiosObj.data = data;
    axiosObj.headers = headers;
  }
  const response = await axios(axiosObj);
  return response;
};

export {axios as axiosAPI};
