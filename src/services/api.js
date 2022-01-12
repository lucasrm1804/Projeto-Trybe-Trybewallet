const url = 'https://economia.awesomeapi.com.br/json/all';

const apiRequest = () => fetch(url)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);

export default apiRequest;
