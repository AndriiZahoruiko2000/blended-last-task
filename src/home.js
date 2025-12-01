import { handleCategoryClick, initialHome, openModal } from './js/handlers';
import { getProductById } from './js/products-api';
import { refs } from './js/refs';
//!================================================
import './js/modal.js';
import { updateHeaderCounter } from './js/render-function.js';

//!================================================
//Логіка сторінки Home
document.addEventListener('DOMContentLoaded', initialHome);

refs.categoryList.addEventListener('click', handleCategoryClick);

refs.productsList.addEventListener('click', openModal);

updateHeaderCounter();
