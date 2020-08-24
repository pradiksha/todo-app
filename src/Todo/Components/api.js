import { fetchData } from "shared/fetchAuth"


const API_URL = process.env.REACT_APP_TODO_API_URL

export const getSaveApi = (body) => {
  const url = `${API_URL}/todos`
  const options = {
    body,
    method: "POST",
  }
  return fetchData(url, options)
}

export const getAllApi = () => {
  const url = `${API_URL}/todos`
  return fetchData(url)
}

export const updateApi = (body) => {
  const url = `${API_URL}/todos/${body.id}`
  const options = {
    body,
    method: "PUT",
  }
  return fetchData(url, options)
}

export const deleteApi = (taskId) => {
  const url = `${API_URL}/todos/${taskId}`
  const options = {
    method: "DELETE",
  }
  return fetchData(url, options)
}