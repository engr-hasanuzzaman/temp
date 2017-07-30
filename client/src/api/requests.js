import request from 'superagent'

const url = 'http://localhost:8000/requests'

export default {
  fetchRequests: () => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, res) => {
          if (!res || res.status === 404) {
            reject()
          } else {
            resolve(res.body)
          }
        })
    })
  },

  addRequest: (req) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
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

  deleteRequest: (id) => {
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
