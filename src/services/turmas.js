import axios from 'axios';
import useMock from '../mock/turmasMock';

const mockRequests = true;
const baseURL = '/';

const client = axios.create({
  baseURL,
});

if (mockRequests) {
  useMock(client);
}

export const fetchAllTurmas = () => {
  return new Promise((resolve, reject) => {
    client.get('/turmas').then(function (response) {
      resolve(response.data || []);
    })
    .catch(function (error) {
      reject()
    });
  })

};
