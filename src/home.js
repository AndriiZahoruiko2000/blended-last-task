import {
  handleAddToCartClick,
  handleAddToWishlist,
  handleBookClick,
  handleCategoryClick,
  handleDomLoaded,
} from './js/handlers';
import { refs } from './js/refs';
import { updateHeaderCounter } from './js/render-function';

document.addEventListener('DOMContentLoaded', handleDomLoaded);
refs.categories.addEventListener('click', handleCategoryClick);
refs.books.addEventListener('click', handleBookClick);
refs.addToCartBtn.addEventListener('click', handleAddToCartClick);
refs.addToWishlistBtn.addEventListener('click', handleAddToWishlist);
document.addEventListener('DOMContentLoaded', updateHeaderCounter);
