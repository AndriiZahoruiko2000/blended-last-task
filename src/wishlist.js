import {
  handleAddToCartClick,
  handleAddToWishlist,
  handleBookClick,
  handleWishlistLoaded,
} from './js/handlers';
import { refs } from './js/refs';
import { updateHeaderCounter } from './js/render-function';

document.addEventListener('DOMContentLoaded', updateHeaderCounter);
document.addEventListener('DOMContentLoaded', handleWishlistLoaded);
refs.wishlist.addEventListener('click', handleBookClick);
refs.addToCartBtn.addEventListener('click', handleAddToCartClick);
refs.addToWishlistBtn.addEventListener('click', handleAddToWishlist);
