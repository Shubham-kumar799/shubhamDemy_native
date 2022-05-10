//utils
import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/userSlice';

axios.defaults.baseURL = 'http://192.168.0.107:8000/api';

const useApi = ({ url, method }) => {
  const user = useSelector(selectUser);
  const [res, setRes] = useState({ data: null, loading: false, error: null });
  const controller = new AbortController();

  const API = async ({ body = null, headers = null }) => {
    const axiosHeaders = {
      ...headers,
      ...(user && user.token && { AUTH_TOKEN: user.token }),
    };
    return new Promise(async (resolve, reject) => {
      try {
        setRes(prevState => ({ ...prevState, error: null, loading: true }));
        const response = await axios({
          url,
          method,
          data: body,
          signal: controller.signal,
          headers: { ...axiosHeaders },
        });

        setRes(prevState => ({
          ...prevState,
          error: null,
          data: response.data,
          loading: false,
        }));
        resolve(response.data);
      } catch (err) {
        setRes(prevState => ({
          ...prevState,
          data: null,
          loading: false,
          error: err,
        }));
        console.log(`error with ${method} at endpoint ${url}`, err);
        reject(err);
      }
    });
  };

  return [res, API, controller];
};

export default useApi;
