import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ou_x1ZySKCjpnB0Ms2N529V_oUWbFetbZUJ6u9oJb7A'
    }
});