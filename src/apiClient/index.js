import axios from 'axios';
import {Platform} from 'react-native';
import {store} from '../../store';
import Configuration from '../configuration';
import {
  API_FAILED_ERROR,
  DONT_SHOW_ERROR_ALERT,
  GET_LOADER,
} from '../actions/Types';
import DeviceInfo from 'react-native-device-info';

export default class ApiClient {
  constructor() {
    if (!ApiClient.instance) {
      ApiClient.instance = this;
    }
    return ApiClient.instance;
  }

  getCommonHeaders = () => {
    //Generic headers common for all apis
    const internalState = store?.getState();

    let commonHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    // if (token) {
    //   commonHeaders = {...commonHeaders, authorization: `Bearer ${token}`};
    // }
    return commonHeaders;
  };

  getCommonQueries = () => {
    const internalState = store?.getState();
    let appVersion = DeviceInfo.getVersion();

    let queryParams = {
      isMobilePlatform: true,
      mobilePlatform: Platform.OS,
      mobilePlatformVersion: Platform.Version,
      appVersion: appVersion,
    };
    return queryParams;
  };

  creatAxiosInstance = () => {
    this.axiosClient = axios.create({
      baseURL: Configuration.apis.apiBaseUrl,
      timeout: 15000,
    });

    /**
     *Descriptiom: Axios Interceptor for Request
     */
    this.axiosClient.interceptors.request.use(
      async (request) => {
        return request;
      },
      (error) => {
        // store.dispatch({
        //   type: API_FAILED_ERROR,
        //   payload: error,
        // });
        // // hide all loader
        // store.dispatch({
        //   type: GET_LOADER,
        //   payload: false,
        // });
        return Promise.reject(error);
      },
    );

    /**
     *Descriptiom: Axios Interceptor for Response
     */
    this.axiosClient.interceptors.response.use(
      (response) => {
        if (response.status === 200 || response.status === 201) {
          // reset flag to show global error alert
          // store.dispatch({
          //   type: DONT_SHOW_ERROR_ALERT,
          //   payload: false,
          // });
          return response;
        }
      },
      (error) => {
        const payload = error.response ? error.response : null;
        // store.dispatch({
        //   type: API_FAILED_ERROR,
        //   payload: payload,
        // });
        // // hide all loader
        // store.dispatch({
        //   type: GET_LOADER,
        //   payload: false,
        // });

        return Promise.reject(error);
      },
    );
  };

  /**
   * Description: Executes a Get Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} queryParams request query parameters
   * @returns {Promise} returns a promise of response
   */

  getRequest = (endUrl, queryParams, headers) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (queryParams) {
      requestQueries = {...requestQueries, ...queryParams};
    }
    return this.axiosClient.get(endUrl, {
      params: requestQueries,
      headers: requestHeaders,
    });
  };

  /**
   * Description: Executes a Post Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} body request body
   * @returns {Promise} returns a promise of response
   */
  postRequest = (endUrl, body, queryParams, headers, timeoutInms) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (queryParams) {
      requestQueries = {...requestQueries, ...queryParams};
    }

    if (timeoutInms) {
      return this.axiosClient.post(endUrl, body, {
        params: requestQueries,
        headers: requestHeaders,
        timeout: timeoutInms,
      });
    } else {
      return this.axiosClient.post(endUrl, body, {
        params: requestQueries,
        headers: requestHeaders,
      });
    }
  };

  /**
   * Description: Executes a patch Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} queryParams request query parameters
   * @returns {Promise} returns a promise of response
   */
  patchRequest = (endUrl, postParams, queryParams, headers) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (queryParams) {
      requestQueries = {...requestQueries, ...queryParams};
    }

    return this.axiosClient.patch(endUrl, postParams, {
      params: requestQueries,
      headers: requestHeaders,
    });
  };

  /**
   * Description: Executes a delete Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} queryParams request query parameters
   * @returns {Promise} returns a promise of response
   */
  deleteRequest = (endUrl, queryParams, headers) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (queryParams) {
      requestQueries = {...requestQueries, ...queryParams};
    }

    return this.axiosClient.delete(endUrl, {
      params: requestQueries,
      headers: requestHeaders,
    });
  };

  /**
   * Description: Executes a Put Request
   * @param {string} endUrl request Url
   * @param {Object} headers headers specific to current request
   * @param {Object} queryParams request query parameters
   * @returns {Promise} returns a promise of response
   */
  putRequest = (endUrl, postParams, headers) => {
    let requestHeaders = this.getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }

    let requestQueries = this.getCommonQueries();
    if (postParams) {
      requestQueries = {...requestQueries, ...postParams};
    }
    return this.axiosClient.put(endUrl, requestQueries, {
      headers: requestHeaders,
    });
  };
}
