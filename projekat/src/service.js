import axios from 'axios'

export const getAllUsers = () => axios.get('http://localhost:3005/users')

export const postUser = (user) => axios.post('http://localhost:3005/users', user)

export const getAllLaunches = () => axios.get('https://api.spacexdata.com/v4/launches')
export const getCompanyInfo = () => axios.get('https://api.spacexdata.com/v4/company')
export const getShips = () => axios.get('https://api.spacexdata.com/v4/ships')
export const getRockets = () => axios.get('https://api.spacexdata.com/v4/rockets')

