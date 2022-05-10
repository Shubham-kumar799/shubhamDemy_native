import axios from 'axios';

//utils
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

const axiosInstance = () => {
  const user = useSelector(selectUser);

  return axios.defaults({
    baseURL: 'http://192.168.0.107:8000/api',
    headers: {
      AUTH_TOKEN: user.token,
    },
  });
};

export default axiosInstance;
