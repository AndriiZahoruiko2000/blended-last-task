import { LOCAL_STORAGE_KEY, LOCAL_STORAGE_WISHLIST_KEY } from './constants';
import { closeModal } from './handlers';
import { loadFromLS, saveToLS } from './helpers';
import { refs } from './refs';
import {
  updateCartBtnText,
  updateHeaderCounter,
  updateWishlistBtnText,
} from './render-function';

//!================================================

let cart = loadFromLS(LOCAL_STORAGE_KEY, []);
let wishlist = loadFromLS(LOCAL_STORAGE_WISHLIST_KEY, []);
//!================================================

refs.closeModal.addEventListener('click', closeModal);

//!================================================
refs.addToCartBtn.addEventListener('click', e => {
  const buyButton = refs.divModalProduct.querySelector(
    '.modal-product__buy-btn'
  );

  const productId = buyButton.dataset.id;
  if (!cart.includes(productId)) {
    cart.push(productId);
    console.log('add');
  } else {
    cart = cart.filter(item => {
      return item !== productId;
    });
    console.log('deleted');
  }

  saveToLS(LOCAL_STORAGE_KEY, cart);
  updateCartBtnText(productId);
  updateHeaderCounter();
});

//!================================================

refs.addToWishlist.addEventListener('click', e => {
  const buyButton = refs.divModalProduct.querySelector(
    '.modal-product__buy-btn'
  );
  const wishlistProductId = buyButton.dataset.id;

  if (!wishlist.includes(wishlistProductId)) {
    wishlist.push(wishlistProductId);
  } else {
    wishlist = wishlist.filter(item => {
      return item !== wishlistProductId;
    });
  }

  saveToLS(LOCAL_STORAGE_WISHLIST_KEY, wishlist);
  updateWishlistBtnText(wishlistProductId);
  updateHeaderCounter();
});
