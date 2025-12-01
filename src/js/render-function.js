import { LOCAL_STORAGE_KEY, LOCAL_STORAGE_WISHLIST_KEY } from './constants';
import { loadFromLS } from './helpers';
import { refs } from './refs';

//!================================================
export function createTemplateCategory(category) {
  return `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>
`;
}

export function createTemplateCategories(categories) {
  return categories.map(createTemplateCategory).join('');
}

//!================================================

export function createTemplateProduct(product) {
  return `<li class="products__item" data-id="${product.id}">
    <img class="products__image" src="${product.thumbnail}" alt=""/>
    <p class="products__title">${product.title}</p>
    <p class="products__brand">${product.brand}<span class="products__brand--bold">Brand:</span></p>
    <p class="products__category">Category:${product.category} </p>
    <p class="products__price">Price: ${product.price}$</p>
 </li>
`;
}

export function createTemplateProducts(products) {
  return products.map(createTemplateProduct).join('');
}

//!================================================

export function createModalByProduct(product) {
  return `<img class="modal-product__img" src="${product.images[0]}" alt="" />
      <div class="modal-product__content">
        <p class="modal-product__title">${product.title}</p>
        <ul class="modal-product__tags">${product.tags}</ul>
        <p class="modal-product__description">${product.description}</p>
        <p class="modal-product__shipping-information">Shipping:${product.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${product.returnPolicy}</p>
        <p class="modal-product__price">Price: ${product.price}</p>
        <button class="modal-product__buy-btn" type="button" data-id="${product.id}">Buy</button>
      </div>
`;
}
//!================================================
export function renderCartInfo(products) {
  const productLength = products.length;
  let totalPrice = 0;

  for (const product of products) {
    totalPrice += product.price;
  }

  refs.cartInfo.querySelector('[data-count]').textContent = productLength;
  refs.cartInfo.querySelector('[data-price]').textContent =
    totalPrice.toFixed(2) + '$';
}

//!================================================

export const updateCartBtnText = id => {
  let cart = loadFromLS(LOCAL_STORAGE_KEY, []);
  if (cart.includes(id)) {
    refs.addToCartBtn.textContent = 'Remove from Cart';
  } else {
    refs.addToCartBtn.textContent = 'Add to Cart';
  }
};

export const updateWishlistBtnText = id => {
  let wishlist = loadFromLS(LOCAL_STORAGE_WISHLIST_KEY, []);
  if (wishlist.includes(id)) {
    refs.addToWishlist.textContent = 'Remove from Wishlist';
  } else {
    refs.addToWishlist.textContent = 'Add to Wishlist';
  }
};
//!================================================

export const updateHeaderCounter = () => {
  console.log(refs);
  const cart = loadFromLS(LOCAL_STORAGE_KEY);
  const wishlist = loadFromLS(LOCAL_STORAGE_WISHLIST_KEY);
  refs.headerCartCount.textContent = cart.length;
  refs.headerWishlistCount.textContent = wishlist.length;
};
