import axios from 'axios'
const baseUrl = '/api/menu'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

export default { getAll }