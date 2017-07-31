import request from 'superagent'
import axios from 'axios'

const baseUrl = 'http://localhost:8000/requests'
const formatToken = (jwt) => {
  return {
    Authorization: 'Bearer ' + jwt
  }
}

const apiAxios = axios.create({
  baseURL: baseUrl,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});

export default {
  fetchRequests: (jwt) => {
    return apiAxios.get('', { headers: formatToken(jwt)})
      .then(res => {
        console.log('---user fetch request data success');
        console.log(res.data);
        return res.data;
      })
      .catch(error => {
        console.log('---user fetch request data fail')
        console.log(error);
        return {
          jwt: '',
          type: '',
        }
      })
  },

  addRequest: (param) => {
    const {req, jwt} = param;
    return apiAxios.post('', {request: req },{ headers: formatToken(jwt)})
      .then(res => {
        console.log('---create new request success');
        console.log(res.data);
        return res.data;
      })
      .catch(error => {
        console.log('---create new request fail')
        console.log(error);
        return {
          jwt: '',
          type: '',
        }
      })
  },

  updateRequest: (req) => {
    return new Promise((resolve, reject) => {
      request
        .patch(url + '/' + request.id)
        .send({ request: req })
        .end((err, res) => {
          if (!res || res.status === 404) {
            reject()
          } else {
            resolve(res.body)
          }
        })
    })
  },

  deleteRequest: (param) => {
    const {id, jwt} = param;
    console.log('deleteRequest params' + param);
    return apiAxios.delete(('/' + id) ,{ headers: formatToken(jwt)})
      .then(res => {
        console.log('---deleteRequest success');
        console.log(res.data);
        return id;
      })
      .catch(error => {
        throw error;
      })
  }
}
