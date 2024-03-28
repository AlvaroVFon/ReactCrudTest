import axios from 'axios'


export const getUsers = async()=>{ 
  return axios.get('https://dummyjson.com/users').then(res=>res.data).catch(err=>console.log(err))
}

export const deleteUser = (userId) =>{
  axios.delete(`https://dummyjson.com/users/${userId}`).then(res=>console.log(res)).catch(err=>console.log(err))
}

export const updateUser = (userId, data) =>{
  axios.put(`https://dummyjson.com/users/${userId}`, data).then(res=>console.log(res)).catch(err=>console.log(err))
}
export const createUser = (data) =>{
  axios.post(`https://dummyjson.com/users`, data).then(res=>console.log(res)).catch(err=>console.log(err))
}