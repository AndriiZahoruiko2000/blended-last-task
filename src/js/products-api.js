import axios from 'axios';
const baseURL = 'https://dummyjson.com/products';
//!================================================

export async function getCategories() {
  const endPoint = '/category-list';
  const url = baseURL + endPoint;

  const params = {};

  const res = await axios.get(url, { params });
  return res.data;
}

//!================================================

export async function getProducts(currentPage = 1) {
  const endPoint = '';
  const url = baseURL + endPoint;

  const params = {
    limit: 12,
    skip: (currentPage - 1) * 12,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

//!================================================

export async function getProductsByCategory(category) {
  const endPoint = `/category/${category}`;
  const url = baseURL + endPoint;

  const params = {};

  const res = await axios.get(url, { params });
  return res.data;
}

//!================================================

export async function getProductById(id) {
  const endPoint = `/${id}`;
  const url = baseURL + endPoint;

  const params = {};

  const res = await axios.get(url, { params });
  return res.data;
}
