import axios        from 'axios';

const api = () => {
  return axios.create({
    headers: {
      common: {
        // 'Authorization': sessionStorage.getItem('token'),
        // 'x-correlation-id': sessionStorage.getItem('x-correlation-id') || randomstring.generate()
      }
    }
  });
};

const getSurveys = async () => {
  return await api().get('http://localhost:9000/surveys');
};

export default {
  getSurveys
};
