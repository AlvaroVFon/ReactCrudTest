import axios from 'axios'


export const getUsers = async () => {
  return axios.get('https://dummyjson.com/users').then(res => {
    return res.data
  }).catch(err => {
    console.log(err)
  })

}

export const createUser = async (user) => {
  return axios.post('https://dummyjson.com/users', user).then(res => {
    return res.data
  }).catch(err => {
    console.log(err)
  })
}
export const deleteUser = async (id) => {
  return axios.delete(`https://dummyjson.com/users/${id}`).then(() => {
    console.log('User deleted')
  }).catch(err => {
    console.log(err)
  })
}
export const updateUser = async (id, user) => {
  return axios.put(`https://dummyjson.com/users/${id}`, user).then(res => {
    return res.data
  }).catch(err => {
    console.log(err)
  })
}

