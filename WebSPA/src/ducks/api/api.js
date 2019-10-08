import axios from 'axios';

export async function request(url, type, data){
    const response = await axios({
        url,
        method: type,
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return response.data;
}

export const requestTypes = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'Delete'
}