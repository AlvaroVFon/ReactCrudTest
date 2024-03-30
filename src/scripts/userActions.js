import axios from 'axios';

export const deleteUser = (id) => {
  axios.delete(`https://reqres.in/api/users/${id}`)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}