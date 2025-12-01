import {
  getCategories,
  getProductById,
  getProducts,
  getProductsByCategory,
} from './products-api';
import { refs } from './refs';
import {
  createModalByProduct,
  createTemplateCategories,
  createTemplateProducts,
  updateCartBtnText,
  updateWishlistBtnText,
} from './render-function';

//!================================================

export const initialHome = async e => {
  const categories = await getCategories();
  categories.unshift('All');

  const markup = createTemplateCategories(categories);
  refs.categoryList.innerHTML = markup;

  const products = await getProducts();
  const markupProducts = createTemplateProducts(products.products);
  refs.productsList.innerHTML = markupProducts;
};

//!================================================

export const handleCategoryClick = async e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const categoryBtn = e.target.textContent;
  const response = await getProductsByCategory(categoryBtn);
  const markupByCategoryProduct = createTemplateProducts(response.products);
  refs.productsList.innerHTML = markupByCategoryProduct;
};

//!================================================

export const openModal = async e => {
  const li = e.target.closest('li');
  if (!li) return;
  const itemId = li.dataset.id;

  const response = await getProductById(itemId);
  const markupModalContent = createModalByProduct(response);
  refs.divModalProduct.innerHTML = markupModalContent;

  refs.divModal.classList.add('modal--is-open');
  updateCartBtnText(itemId);
  updateWishlistBtnText(itemId);
};

//!================================================
export const closeModal = e => {
  refs.divModal.classList.remove('modal--is-open');
};
