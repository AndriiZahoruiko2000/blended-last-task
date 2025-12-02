import { LOCAL_STORAGE_KEY, LOCAL_STORAGE_WISHLIST_KEY } from './constants';
import { loadFromLS } from './helpers';
import { refs } from './refs';

//!================================================
export function createTemplateCategory(category) {
  return `<li class="categories__item">
   <button class="categories__btn" type="button">${category.list_name}</button>
 </li>
`;
}

export function createTemplateCategories(categories) {
  return categories.map(createTemplateCategory).join('');
}

//!================================================

export function createTemplateBook(book) {
  return `<li class="books__item" data-id="${book._id}">
    <img class="books__image" src="${book.book_image}" alt=""/>
    <p class="books__title">${book.title}</p>
    <p class="books__brand">${book.author}<span class="books__brand--bold">Brand:</span></p>
    <p class="books__category">Category:${book.list_name} </p>
    <p class="books__price">Price: ${book.price}$</p>
 </li>
`;
}

export function createTemplateBooks(books) {
  return books.map(createTemplateBook).join('');
}

//!================================================

export function createModalByBook(book) {
  return `<img class="modal-book__img" src="${book.book_image}" alt="" />
      <div class="modal-book__content">
        <p class="modal-book__title">${book.title}</p>
        <ul class="modal-book__tags">${(book.buy_links || [])
          .map(el => {
            return `<li><a href="${el.url}">${el.name}</a></li>`;
          })
          .join('')}</ul>
        <p class="modal-book__description">${book.description}</p>
        <p class="modal-book__shipping-information">Shipping:${
          book.shippingInformation
        }</p>
        <p class="modal-book__return-policy">Return Policy:${
          book.contributors
        }</p>
        <p class="modal-book__price">Price: ${book.price}</p>
        <button class="modal-book__buy-btn" type="button" data-id="${
          book._id
        }">Buy</button>
      </div>
`;
}
//!================================================
export function renderCartInfo(books) {
  const bookLength = books.length;
  let totalPrice = 0;

  for (const book of books) {
    totalPrice += +book.price;
    console.log(book);
  }

  refs.cartCount.textContent = bookLength;
  refs.cartTotalPrice.textContent = totalPrice.toFixed(2) + '$';
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
    refs.addToWishlistBtn.textContent = 'Remove from Wishlist';
  } else {
    refs.addToWishlistBtn.textContent = 'Add to Wishlist';
  }
};
//!================================================

export const updateHeaderCounter = () => {
  console.log(refs);
  const cart = loadFromLS(LOCAL_STORAGE_KEY, []);
  const wishlist = loadFromLS(LOCAL_STORAGE_WISHLIST_KEY, []);
  console.log(cart);
  console.log(wishlist);
  refs.headerCartCount.textContent = cart.length;
  refs.headerWishlistCount.textContent = wishlist.length;
};
//!================================================
