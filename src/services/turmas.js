import axios from 'axios';
import useMock from './useMock';

const mockRequests = true;
const baseURL = '/';

const client = axios.create({
  baseURL,
});

if (mockRequests) {
  useMock(client);
}

export const fetchAllTurmas = () => {
  return client.get('/turmas');
};
