import axios from 'axios'

const baseUrl = 'http://localhost:8000';
const url = '/users';
const signInUrl = '/user_token';
const profileUrl = 'users/profile'
const formatToken = (jwt) => {
  return {
    Authorization: 'Bearer ' + jwt
  }
}

const apiAxios = axios.create({
  baseURL: 'http://localhost:8000',
  // timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});

const fetUserProfile = (jwt) => {
  console.log('------- fetUserProfile api called with parameter:');
  console.log(jwt);
  return apiAxios.get(profileUrl, { headers: formatToken(jwt)})
    .then(res => {
      console.log('fetUserProfile sign in success');
      console.log(res);
      return res.data;
    })
    .catch(error => {
      console.log('fetUserProfile sign in fail and error is');
      console.log(error.message);
      return {
        jwt: '',
        type: '',
      }
    })
}


export default {
  signUp: (user) => {
    console.log('------- signUp api called with parameter:');
    console.log(user);
    return apiAxios.post(url, { user: user })
      .then(res => {
        console.log('User sign up success');
        console.log(res);
        return res.data;
      })
      .catch(error => {
        console.log('User sign up fail and error is');
        console.log(error.message);
      })
  },

  signIn: (user) => {
    console.log('------- signIn api called with parameter:');
    console.log(user);
    return apiAxios.post(signInUrl, { auth: user })
      .then(res => {
        console.log('User sign in success');
        console.log(res);
        return fetUserProfile(res.data.jwt)
      })
      .catch(error => {
        console.log('User sign in fail and error is');
        console.log(error.message);
        return {
          jwt: '',
          type: ''
        }
      })
  },

  fetUserProfile: (jwt) => {
    console.log('------- signIn api called with parameter:');
    console.log(jwt);
    return apiAxios.get(profileUrl, { headers: formatToken(jwt)})
      .then(res => {
        console.log('User sign in success');
        console.log(res);
        return res.data;
      })
      .catch(error => {
        console.log('User sign in fail and error is');
        console.log(error.message);
        return {
          jwt: '',
          type: ''
        }
      })
  },

  fetchusers: () => {
    return axios.get(url)
  },

  addTodo: (todo) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send({ todo: todo })
        .end((err, res) => {
          if (!res || res.status === 404) {
            reject()
          } else {
            resolve(res.body)
          }
        })
    })
  },

  updateTodo: (todo) => {
    return new Promise((resolve, reject) => {
      request
        .patch(url + '/' + todo.id)
        .send({ todo: todo })
        .end((err, res) => {
          if (!res || res.status === 404) {
            reject()
          } else {
            resolve(res.body)
          }
        })
    })
  },

  deleteTodo: (id) => {
    return new Promise((resolve, reject) => {
      request
        .del(url + '/' + id)
        .end((err, res) => {
          if (!res || res.status === 404) {
            reject()
          } else {
            resolve(id)
          }
        })
    })
  }
}
