import userMock from './turmas.json';
import MockAdapter from 'axios-mock-adapter';

const useMock = (axios) => {
  const mock = new MockAdapter(axios, { delayResponse: 500 });
  
  mock.onGet(/turmas/).reply(200, userMock);
  
};

export default useMock;