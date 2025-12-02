import axios from 'axios';
//!================================================
const baseURL = 'https://books-backend.p.goit.global';
//!================================================
export async function getCategoryList() {
  const endPoint = '/books/category-list';
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data;
}
//!================================================

export async function getBooksByCategory(query) {
  const endPoint = '/books/category';
  const url = baseURL + endPoint;

  const params = {
    category: query,
  };

  const res = await axios.get(url, { params });
  return res.data;
}
//!================================================

export async function getBookById(id) {
  const endPoint = `/books/${id}`;
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data;
}
