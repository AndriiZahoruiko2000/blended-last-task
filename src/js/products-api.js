import axios from 'axios';

export async function getCategories() {
  const baseURL = 'https://dummyjson.com/products';
  const endPoint = '/category-list';
  const url = baseURL + endPoint;

  const params = {};

  const res = await axios.get(url, { params });
  return res.data;
}
