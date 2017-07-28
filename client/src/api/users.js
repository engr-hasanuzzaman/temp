import axios from 'axios'

const url = 'http://localhost:8000/users'

export default {
  signUp: (email, password) => {
    axios.post(url, {email: email, password: password})
      .then(res => {
        console.log('User sign up success');
        console.log(res);
      })
      .catch(error => {
        console.log('User sign up fail and error is');
        console.log(error);
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
