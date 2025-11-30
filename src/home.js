import { handleCategoryClick, initialHome, openModal } from './js/handlers';
import { getProductById } from './js/products-api';
import { refs } from './js/refs';

//Логіка сторінки Home
document.addEventListener('DOMContentLoaded', initialHome);

refs.categoryList.addEventListener('click', handleCategoryClick);

refs.productsList.addEventListener('click', openModal);
