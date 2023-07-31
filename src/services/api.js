import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64c53024c853c26efada9824.mockapi.io',
});

const instance_auth = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance_auth.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  instance_auth.defaults.headers.Authorization = '';
};

export const registerRequest = async formData => {
  const { data } = await instance_auth.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

export const loginRequest = async formData => {
  const { data } = await instance_auth.post('/users/login', formData);
  setToken(data.token);
  return data;
};

export const logOutRequest = async () => {
  const { data } = await instance_auth.post('/users/logout');
  clearToken();
  return data;
};

export const currentUserRequest = async () => {
  const { data } = await instance_auth.get('/users/current');
  console.log(data);
  return data;
};

export const requestContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const postNewUser = async contactData => {
  const { data } = await instance.post('/contacts', contactData);
  return data;
};

export const deleteUser = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
