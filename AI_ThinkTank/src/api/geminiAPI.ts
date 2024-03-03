import axios from 'axios'

const API_BASE_URL = 'https://api.gemini.com/v1'

// GET request
async function get(endpoint: string, params?: object) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, { params })
    return response.data
  } catch (error) {
    console.error('GET request failed:', error)
    throw error
  }
}

// POST request
async function post(endpoint: string, data: object) {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data)
    return response.data
  } catch (error) {
    console.error('POST request failed:', error)
    throw error
  }
}

// DELETE request
async function del(endpoint: string) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}`)
    return response.data
  } catch (error) {
    console.error('DELETE request failed:', error)
    throw error
  }
}
