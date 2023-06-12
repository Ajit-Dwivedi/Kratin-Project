import httpClient from '../http-common';

const getAll = () => {
  return httpClient.get('');
};

const create = (data) => {
  console.log(data);
  return httpClient.post('', data);
};

const get = (id) => {
  return httpClient.get(`${id}`);
};

const update = (data) => {
  console.log("in the empservice update");
  console.log(data);
  return httpClient.put('', data);
};

const remove = (empId) => {
  return httpClient.delete(`/${empId}`);
};
export default { getAll, create, get, update, remove };
