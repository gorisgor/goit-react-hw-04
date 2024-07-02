import axios from 'axios'

const API_KEY = 'KRNJhs0g10MZsM62FfXYN_CmaZP9RR3ihLQR1jBWkeU'
axios.defaults.baseURL('https://api.unsplash.com/')

export const fetchImages = async (query, currentPage) => {
    const responce = await axios.get("/search/photos", {
      params: {
        client_id: API_KEY,
        query: query,
        page: currentPage,
        per_page: 12,
      },
    });
  
    return responce.data.hits;
  };