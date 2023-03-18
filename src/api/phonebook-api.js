import axios from 'axios';

axios.defaults.baseURL = 'https://641422e6ebce1f9d8c603a15.mockapi.io/api/v1';

export function fetchData() {
  return axios.get('/contacts').then(response => response.data);
}

export function addData(obj) {
  return axios.post('/contacts', obj).then(response => response.data);
}

export function deleteData(id) {
  return axios.delete(`/contacts/${id}`).then(response => response.data);
}
