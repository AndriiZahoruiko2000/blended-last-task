import { getBookById, getBooksByCategory, getCategoryList } from './books-api';
import { LOCAL_STORAGE_KEY, LOCAL_STORAGE_WISHLIST_KEY } from './constants';
import { loadFromLS, saveToLS } from './helpers';
import { showModal } from './modal';
import { refs } from './refs';
import {
  createModalByBook,
  createTemplateBooks,
  createTemplateCategories,
  renderCartInfo,
  updateCartBtnText,
  updateHeaderCounter,
  updateWishlistBtnText,
} from './render-function';

//!================================================

export const handleDomLoaded = async e => {
  const categoryList = await getCategoryList();
  console.log(categoryList);

  const markup = createTemplateCategories(categoryList);
  refs.categories.innerHTML = markup;
};

//!================================================

export const handleCategoryClick = async e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const categoryName = e.target.textContent;

  const bookCategory = await getBooksByCategory(categoryName);

  const markup = createTemplateBooks(bookCategory);
  refs.books.innerHTML = markup;
};

//!================================================

export const handleBookClick = async e => {
  if (e.target === e.currentTarget) return;
  const li = e.target.closest('li');
  const bookId = li.dataset.id;

  const book = await getBookById(bookId);
  const markup = createModalByBook(book);
  refs.modalBook.innerHTML = markup;

  showModal();
};
//!================================================

export const handleAddToCartClick = async e => {
  let books = loadFromLS(LOCAL_STORAGE_KEY, []);
  const item = refs.modalBook.querySelector('[data-id]');
  const cartBookId = item.dataset.id;

  if (!books.includes(cartBookId)) {
    books.push(cartBookId);
  } else {
    books = books.filter(bookId => {
      return bookId !== cartBookId;
    });
  }
  saveToLS(LOCAL_STORAGE_KEY, books);
  updateCartBtnText(cartBookId);
  updateHeaderCounter();
};
//!================================================

export const handleBooksCartLoad = async e => {
  console.log('start');
  const booksIdies = loadFromLS(LOCAL_STORAGE_KEY, []);
  const promises = booksIdies.map(getBookById);
  const books = await Promise.all(promises);
  console.log(books);
  const markup = createTemplateBooks(books);
  refs.cartBooksList.innerHTML = markup;
  renderCartInfo(books);
};

//!================================================
export const handleAddToWishlist = async e => {
  let books = loadFromLS(LOCAL_STORAGE_WISHLIST_KEY, []);
  const item = refs.modalBook.querySelector('[data-id]');
  const wishlistId = item.dataset.id;

  if (!books.includes(wishlistId)) {
    books.push(wishlistId);
  } else {
    books = books.filter(bookId => {
      return bookId !== wishlistId;
    });
  }
  saveToLS(LOCAL_STORAGE_WISHLIST_KEY, books);
  updateHeaderCounter();
  updateWishlistBtnText(wishlistId);
};

//!================================================

export const handleWishlistLoaded = async e => {
  let bookIdies = loadFromLS(LOCAL_STORAGE_WISHLIST_KEY, []);
  const promises = bookIdies.map(getBookById);
  const books = await Promise.all(promises);

  const markup = createTemplateBooks(books);
  refs.wishlist.innerHTML = markup;
};
