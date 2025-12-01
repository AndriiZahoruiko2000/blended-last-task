import { LOCAL_STORAGE_WISHLIST_KEY } from './js/constants';
import { openModal } from './js/handlers';
import { loadFromLS } from './js/helpers';
import { getProductById } from './js/products-api';
import { refs } from './js/refs';
import {
  createTemplateProducts,
  updateHeaderCounter,
} from './js/render-function';
import './js/modal.js';
//!================================================
document.addEventListener('DOMContentLoaded', e => {
  let wishlist = loadFromLS(LOCAL_STORAGE_WISHLIST_KEY, []);
  const wishlistPromise = wishlist.map(getProductById);
  Promise.all(wishlistPromise).then(response => {
    const markup = createTemplateProducts(response);
    refs.wishlist.innerHTML = markup;
  });
  updateHeaderCounter();
});
//!================================================
refs.wishlist.addEventListener('click', openModal);
