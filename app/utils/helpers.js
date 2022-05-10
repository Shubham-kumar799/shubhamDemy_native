import axios from 'axios';
import axiosInstance from '../axios';

axios.defaults.baseURL = 'http://192.168.0.107:8000/api';

const currencyFormatter = data => {
  return ((data.amount * 100) / 100).toLocaleString(data.currency, {
    style: 'currency',
    currency: data.currency,
  });
};

//takes image base64 data
const uploadImage = image => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post('/profile/upload-image-from-mobile', {
        image,
      });
      resolve(data);
    } catch (err) {
      console.log('error uploading image', err);
      reject(err);
    }
  });
};

const uploadProfile = args => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post('/profile/update', {
        ...args,
      });
      // const { data } = await axiosInstance.post('/profile/update', {
      //   body: { ...args },
      // });
      console.log('data => ', data);
      resolve(data);
    } catch (err) {
      console.log('error uploading image', err);
      reject(err);
    }
  });
};

export { currencyFormatter, uploadImage, uploadProfile };
