import userMock from './turmas.json';

const useMock = (axios) => {
  const mock = new MockAdapter(axios, { delayResponse: 500 });
  
  mock.onGet(/turmas/).reply(200, userMock);
  
};

export default useMock;